import React from "react";
import Layout from "../components/Layout";
import { useContext, useEffect } from "react";
import { ContextFavorites } from "../store/favorites/contextFavorites";
import NewsCardList from "../components/NewsCardList";
import useLocalStorage from "../utils/hooks/useLocalStorage";

import { Container } from "react-bootstrap";

export default function Favorites() {
  const { stateFavorites } = useContext(ContextFavorites);
  const { favorites } = stateFavorites;
  //eslint-disable-next-line
  const [_, setStateAndStorage] = useLocalStorage("favorites", stateFavorites);

  // localStorage
  useEffect(() => {
    setStateAndStorage(stateFavorites);
  }, [setStateAndStorage, stateFavorites]);

  return (
    <Layout>
      <Container>
        <h1 className="mt-4 mb-4">Stirile favorite.</h1>

        {favorites.length === 0 ? (
          <p>Momentan nu ai nicio știre favorită.</p>
        ) : (
          <NewsCardList newslist={favorites} />
        )}
      </Container>
    </Layout>
  );
}
