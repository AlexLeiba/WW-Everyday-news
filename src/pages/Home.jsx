import React from 'react';
import Layout from '../components/Layout';
import useFetch from '../utils/hooks/useFetch';
import { getNewsEndpoint } from '../api/guardianApi';
import { Container } from 'react-bootstrap';
import NewsCardList from '../components/NewsCardList';
import { getAdaptedData } from '../api/adaptors';

function Home() {
  const urlFootball = getNewsEndpoint('football', 1, 6);
  const dataFootball = useFetch(urlFootball);
  console.log(urlFootball);
  const urlTech = getNewsEndpoint('technology', 1, 6);
  const dataTech = useFetch(urlTech);
  const urlGames = getNewsEndpoint('games', 1, 6);
  const dataGames = useFetch(urlGames);
  const urlFashion = getNewsEndpoint('fashion', 1, 6);
  const dataFashion = useFetch(urlFashion);
  const urlBooks = getNewsEndpoint('books', 1, 6);
  const dataBooks = useFetch(urlBooks);
  const urlFilm = getNewsEndpoint('film', 1, 6);
  const dataFilm = useFetch(urlFilm);

  const adaptedFootball = getAdaptedData(dataFootball);
  const adaptedTech = getAdaptedData(dataTech);
  const adaptedGames = getAdaptedData(dataGames);
  const adaptedFashion = getAdaptedData(dataFashion);
  const adaptedBooks = getAdaptedData(dataBooks);
  const adaptedFilm = getAdaptedData(dataFilm);

  return (
    <div>
      <Layout>
        <section>
          <Container className='mt-4'>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Football</h1>
            <NewsCardList newslist={adaptedFootball} />
          </Container>
        </section>

        <section>
          <Container>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Games</h1>
            <NewsCardList newslist={adaptedGames} />
          </Container>
        </section>

        <section>
          <Container>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Technology</h1>
            <NewsCardList newslist={adaptedTech} />
          </Container>
        </section>

        <section>
          <Container>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Fashion</h1>
            <NewsCardList newslist={adaptedFashion} />
          </Container>
        </section>

        <section>
          <Container>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Film</h1>
            <NewsCardList newslist={adaptedFilm} />
          </Container>
        </section>

        <section>
          <Container>
            <h1 style={{ color: 'rgba(0, 0, 0, 1)' }}>Books</h1>
            <NewsCardList newslist={adaptedBooks} />
          </Container>
        </section>
      </Layout>
    </div>
  );
}

export default Home;
