import Page404 from './pages/Page404';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewsCategory from './pages/NewsCategory';
import Favorites from './pages/Favorites';
import NewsDetails from './pages/NewsDetails';
import useLocalStorage from './utils/hooks/useLocalStorage';

import { ContextFavorites } from '../src/store/favorites/contextFavorites';
import { useReducer } from 'react';
import {
  reducerFavorites,
  initialState,
} from './store/favorites/reducerFavorites';

function App() {
  const [initialLocalStorageState] = useLocalStorage('favorites', initialState);

  const [stateFavorites, dispatchFavorites] = useReducer(
    reducerFavorites,
    initialLocalStorageState
  );

  const favoritesContextValue = {
    stateFavorites,
    dispatchFavorites,
  };

  return (
    <div className='App'>
      <ContextFavorites.Provider value={favoritesContextValue}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/category/:idCategory'>
            <NewsCategory />
          </Route>

          <Route path='/news/:idNews*'>
            <NewsDetails />
          </Route>

          <Route path='/favorites'>
            <Favorites />
          </Route>

          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </ContextFavorites.Provider>
    </div>
  );
}

export default App;
