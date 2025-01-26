import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromFavorites } from '../store/favorites/actionsFavorites';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ContextFavorites } from '../store/favorites/contextFavorites';
import styles from './NewsCard.module.css';

function NewsCard(props) {
  const { dispatchFavorites } = useContext(ContextFavorites);
  const { title, description, id, closeButton, thumbnail } = props;
  return (
    <Card className=' h-100 d-flex flex-column justify-content-between align-items-center bg-dark'>
      <Link to={`/news/${id}`} className='h-100'>
        <Card.Img variant='top' src={thumbnail} />
        <Card.Body>
          <Card.Title className='fs-2'>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {closeButton && (
        <Button
          className={`${styles.removeButton} `}
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
