import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/favorites/actionsFavorites";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ContextFavorites } from "../store/favorites/contextFavorites";
import styles from "./NewsCard.module.css";
import { FaBeer } from "react-icons";
// aceasta componenta va fi responsabila pentru afisarea cardului pe ecran.
// facem componenta reutilizabila.

function NewsCard(props) {
  const { dispatchFavorites } = useContext(ContextFavorites);
  const { images, title, description, id, closeButton, thumbnail } = props;
  return (
    <Card className=" h-100 d-flex flex-column justify-content-between align-items-center bg-dark">
      <Link to={`/news/${id}`} className="h-100">
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title className="fs-2">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {closeButton && (
        <Button
          className={`${styles.removeButton} bg-danger`}
          onClick={() => {
            const actionResult = removeFromFavorites(id);

            dispatchFavorites(actionResult);
          }}
        ></Button>
      )}
    </Card>
  );
}

export default NewsCard;
