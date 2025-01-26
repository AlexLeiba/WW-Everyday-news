import { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import { ContextFavorites } from '../store/favorites/contextFavorites';
import { ChevronDown, Menu, X } from 'lucide-react';
function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const { stateFavorites } = useContext(ContextFavorites);
  const [toggleNav, setToggleNav] = useState(false);
  const [dropMenuShow, setDropMenuShow] = useState(false);

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
    window.addEventListener('scroll', scrollWindow);
  });

  function handleDropMenuShow() {
    setDropMenuShow(!dropMenuShow);
  }

  return (
    <header className={`${styles.header}`}>
      <nav className={toggleNav ? `${styles.nav2}` : `${styles.nav}`}>
        <Container className='d-flex justify-content-between align-items-center  pz-2'>
          <Link to='/' className='' title='Home'>
            <img
              style={{ height: 42, width: 42 }}
              src='/icon-home.jpg'
              alt='Logo news'
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <div className={styles.mobileDropdownIcons}>
              {isDisplayed ? (
                <X
                  style={{ color: toggleNav ? 'white' : 'black' }}
                  onClick={handleMenuClick}
                  width={20}
                  height={20}
                />
              ) : (
                <Menu
                  style={{ color: toggleNav ? 'white' : 'black' }}
                  onClick={handleMenuClick}
                  width={20}
                  height={20}
                />
              )}
            </div>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? 'container' : null}>
                <Link
                  to='/category/football'
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === '/category/football'
                      ? { color: '#fbb44c', fontWeight: 800 }
                      : toggleNav
                      ? { color: 'azure', fontWeight: 800 }
                      : { color: 'black', fontWeight: 800 }
                  }
                >
                  FOOTBALL
                </Link>
              </li>

              <li className={isDisplayed ? 'container' : null}>
                <Link
                  to='/category/games'
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === '/category/games'
                      ? { color: '#fbb44c', fontWeight: 800 }
                      : toggleNav
                      ? { color: 'azure', fontWeight: 800 }
                      : { color: 'black', fontWeight: 800 }
                  }
                >
                  GAMES
                </Link>
              </li>
              <li className={isDisplayed ? 'container' : null}>
                <Link
                  to='/category/technology'
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === '/category/technology'
                      ? { color: '#fbb44c', fontWeight: 800 }
                      : toggleNav
                      ? { color: 'azure', fontWeight: 800 }
                      : { color: 'black', fontWeight: 800 }
                  }
                >
                  TECHNOLOGY
                </Link>
              </li>
              <li className={isDisplayed ? 'container' : null}>
                <Link
                  to='/category/fashion'
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    locationState === '/category/fashion'
                      ? { color: '#fbb44c', fontWeight: 800 }
                      : toggleNav
                      ? { color: 'azure', fontWeight: 800 }
                      : { color: 'black', fontWeight: 800 }
                  }
                >
                  FASHION
                </Link>
              </li>

              <li
                className={isDisplayed ? 'container' : null}
                onClick={handleDropMenuShow}
              >
                <div
                  to='/category/fashion'
                  className={`p-3 text-uppercase ${styles.links}`}
                  style={
                    ({ position: 'relative' },
                    toggleNav
                      ? { color: 'azure', fontWeight: 800 }
                      : { color: 'black', fontWeight: 800 })
                  }
                >
                  Others
                  <ChevronDown width={20} height={20} />
                  {dropMenuShow ? (
                    <div className={`${styles.dropMenu}`}>
                      <li className={isDisplayed ? 'container' : null}>
                        <Link
                          to='/category/film'
                          className={`px-3 pt-3 text-uppercase ${styles.links}`}
                          style={
                            locationState === '/category/film'
                              ? { color: '#fbb44c' }
                              : toggleNav
                              ? { color: 'black' }
                              : { color: 'azure' }
                          }
                        >
                          FILM
                        </Link>
                      </li>
                      <li className={isDisplayed ? 'container' : null}>
                        <Link
                          to='/category/books'
                          className={`px-3 pt-3 text-uppercase ${styles.links}`}
                          style={
                            locationState === '/category/books'
                              ? { color: '#fbb44c', paddingLeft: 4 }
                              : toggleNav
                              ? { color: 'black', paddingLeft: 4 }
                              : { color: 'azure', paddingLeft: 4 }
                          }
                        >
                          BOOKS
                        </Link>
                      </li>
                      <li className={isDisplayed ? 'container' : null}>
                        <Link
                          to=''
                          className={`px-3 pt-3 text-uppercase ${styles.links}`}
                          style={
                            toggleNav
                              ? { color: 'black', paddingLeft: 4 }
                              : { color: 'azure' }
                          }
                        >
                          All categories
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </li>

              <li className={isDisplayed ? 'container' : null}>
                <Link to='/favorites' className={`${styles.favorites} p-3 `}>
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
