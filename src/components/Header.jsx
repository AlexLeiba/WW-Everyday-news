import { useState, useContext } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ContextFavorites } from "../store/favorites/contextFavorites";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const { stateFavorites } = useContext(ContextFavorites);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center  pz-2">
          <Link to="/" className="" title="Home">
            <img
              src="https://www.prodjradio.net/wp-content/uploads/2013/08/pronews.png"
              alt="itschool logo"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/football"
                  className="p-3 text-uppercase text-light"
                >
                  FOOTBALL
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/games"
                  className="p-3 text-uppercase text-light"
                >
                  GAMES
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/technology"
                  className="p-3 text-uppercase text-light"
                >
                  TECHNOLOGY
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/fashion"
                  className="p-3 text-uppercase text-light"
                >
                  FASHION
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/film"
                  className="p-3 text-uppercase text-light"
                >
                  FILM
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/books"
                  className="p-3 text-uppercase text-light"
                >
                  BOOKS
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/favorites"
                  className={`{styles.favorites} p-3 text-secondary`}
                >
                  {/* setam stateul favorites sa arate cand are ceva adaugat la favorite */}
                  Favorites ({stateFavorites.favorites.length})
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
