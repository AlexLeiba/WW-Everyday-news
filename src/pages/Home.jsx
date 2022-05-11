import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import useFetch from "../utils/hooks/useFetch";
import { getNewsEndpoint } from "../api/guardianApi";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import { getAdaptedData } from "../api/adaptors";
import { Button } from "bootstrap";

function Home() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");

  const urlFootball = getNewsEndpoint("football", 1, 6);
  const dataFootball = useFetch(urlFootball);
  console.log(urlFootball);
  const urlTech = getNewsEndpoint("technology", 1, 6);
  const dataTech = useFetch(urlTech);
  const urlGames = getNewsEndpoint("games", 1, 6);
  const dataGames = useFetch(urlGames);
  const urlFashion = getNewsEndpoint("fashion", 1, 6);
  const dataFashion = useFetch(urlFashion);
  const urlBooks = getNewsEndpoint("books", 1, 6);
  const dataBooks = useFetch(urlBooks);
  const urlFilm = getNewsEndpoint("film", 1, 6);
  const dataFilm = useFetch(urlFilm);

  // data venita de la fetch, nu vine sub forma pe care o dorim, deci trebuie sa o adaptam dupa denumirile la propurile pe care le am dat.
  const adaptedFootball = getAdaptedData(dataFootball);
  const adaptedTech = getAdaptedData(dataTech);
  const adaptedGames = getAdaptedData(dataGames);
  const adaptedFashion = getAdaptedData(dataFashion);
  const adaptedBooks = getAdaptedData(dataBooks);
  const adaptedFilm = getAdaptedData(dataFilm);

  //DISPLAY HANDLER
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleScrollUp = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  function handleActivateClick() {
    handleScrollUp();
  }
  return (
    <div>
      <Layout>
        <section>
          <Container className="mt-4">
            <h1>Football</h1>
            <NewsCardList newslist={adaptedFootball} />
          </Container>
        </section>

        <section>
          <Container>
            <h1>Games</h1>
            <NewsCardList newslist={adaptedGames} />
            {/* propuri efective */}
          </Container>
        </section>

        <section>
          <Container>
            <h1>Technology</h1>
            <NewsCardList newslist={adaptedTech} />
            {/* propuri efective */}
          </Container>
        </section>

        <section>
          <Container>
            <h1>Fashion</h1>
            <NewsCardList newslist={adaptedFashion} />
            {/* propuri efective */}
          </Container>
        </section>

        <section>
          <Container>
            <h1>Film</h1>
            <NewsCardList newslist={adaptedFilm} />
            {/* propuri efective */}
          </Container>
        </section>

        <section>
          <Container>
            <h1>Books</h1>
            <NewsCardList newslist={adaptedBooks} />
            {/* propuri efective */}
          </Container>
        </section>
        <button
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "black",
            color: "white",
          }}
          onClick={handleScrollUp}
        >
          Up
        </button>
      </Layout>
    </div>
  );
}

export default Home;
