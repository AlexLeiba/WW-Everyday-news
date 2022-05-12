import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ContextFavorites } from "../store/favorites/contextFavorites";
import { style } from "react-stylesheet";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const { stateFavorites } = useContext(ContextFavorites);
  const [toggleNav, setToggleNav] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  const { location } = useHistory();
  const [locationState, setLocationstate] = useState(location.pathname);
  useEffect(() => {
    setLocationstate(location.pathname);
  }, [location]);

  function scrollWindow() {
    let scrolled = window.scrollY;
    if (scrolled >= 100) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
  });

  return (
    <header className={`${styles.header}`}>
      <nav className={toggleNav ? `${styles.nav2}` : `${styles.nav}`}>
        <Container className="d-flex justify-content-between align-items-center  pz-2">
          <Link to="/" className="" title="Home">
            <img
              style={{ height: 42, width: 42 }}
              src="https://icon-library.com/images/in-the-news-icon/in-the-news-icon-2.jpg"
              alt="Logo news"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              menu
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/football"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/football"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  FOOTBALL
                </Link>
              </li>

              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/games"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/games"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  GAMES
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/technology"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/technology"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  TECHNOLOGY
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/fashion"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/fashion"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  FASHION
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/film"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/film"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  FILM
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/books"
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === "/category/books"
                      ? { color: "#fbb44c" }
                      : toggleNav
                      ? { color: "azure" }
                      : { color: "black" }
                  }
                >
                  BOOKS
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/favorites" className={`${styles.favorites} p-3 `}>
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
