import React from "react";
import { useParams } from "react-router";
import { getNewsDetailsEndpoint } from "../api/guardianApi";
import useFetch from "../utils/hooks/useFetch";
import Layout from "../components/Layout";
import getAdaptedDetailsData from "../api/adaptors";
import { useContext, useState, useEffect } from "react";
import { ContextFavorites } from "../store/favorites/contextFavorites";
import { addToFavorites } from "../store/favorites/actionsFavorites";
import { getFormattedDate } from "../date";
import styles from "./NewsDetails.module.css";
import useLocalStorage from "../utils/hooks/useLocalStorage";

// Bootstrap
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function NewsDetails() {
  const { dispatchFavorites, stateFavorites } = useContext(ContextFavorites);
  const [stateAlert, setStateAlert] = useState(false);

  // extragem (parametrul)id-ul, din App, care va contine (datele) despre cardul pe care am dat click
  let { idNews } = useParams();
  const urlDetails = getNewsDetailsEndpoint(idNews);
  const dataDetails = useFetch(urlDetails);
  console.log(dataDetails);

  const adaptedData = getAdaptedDetailsData(dataDetails);
  // object destructuring
  const { title, description, images, content, thumbnail, date, author } =
    adaptedData;

  let formattedDate = getFormattedDate(date);
  const [_, setStateAndStorage] = useLocalStorage("favorites", stateFavorites);

  // Adaugarea in localStorage este un efect, atunci cand se modifica produsele favorite.
  // Cum strim ca s-au modificat produsele favorite? Primim o noua valoare a lui favoritesState.
  // setLocalStorageState este sugerat sa fie adaugat la dependente de o regula de lining.

  useEffect(() => {
    setStateAndStorage(stateFavorites);
  }, [stateFavorites, setStateAndStorage]);

  function handleFavorites(product) {
    const actionResult = addToFavorites(product);
    dispatchFavorites(actionResult);
    //  Alerta
    setStateAlert(true);

    setTimeout(() => {
      setStateAlert(false);
    }, 4000);
  }

  return (
    <div>
      <Layout>
        <Container className={`my-3 ${styles.newsDetails}`}>
          {stateAlert && (
            <Alert variant="success" id={styles.alert}>
              Acum poți vedea știrea accesând secțiunea Favorite.
            </Alert>
          )}
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}>{title}</h1>
              <h5
                style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}
              >
                {description}
              </h5>
              {/* folosim __html daca datele din api sunt transmise sub forma (<html>) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ width: "80%", height: "80%" }}
                  dangerouslySetInnerHTML={{ __html: images }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: "10%",
                  marginLeft: "10%",
                  marginBottom: 4,
                }}
              >
                <div>
                  <p className="fw-bold">{author}</p>
                  <p>{formattedDate}</p>
                </div>

                <Button
                  className="button  btn-secondary"
                  onClick={() => {
                    handleFavorites({
                      id: idNews,
                      title,
                      description,
                      thumbnail,
                      closeButton: true,
                    });
                  }}
                >
                  Adauga la favorite
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ width: "80%", height: "80%" }}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default NewsDetails;
