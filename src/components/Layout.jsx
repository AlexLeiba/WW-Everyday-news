import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout(props) {
  const [toggleNav, setToggleNav] = useState(false);

  function scrollWindow() {
    let scrolled = window.scrollY;
    if (scrolled >= 700) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
  });

  const handleScrollUp = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <div className={`${styles.layout}`}>
      <Header />

      <main>{props.children}</main>
      {toggleNav ? (
        <button
          className={
            toggleNav ? `${styles.scrollButton}` : `${styles.scrollButton2}`
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            position: 'fixed',
            bottom: 10,
            right: 10,
            transition: '0.3s',
          }}
          onClick={handleScrollUp}
        ></button>
      ) : (
        <div></div>
      )}

      <Footer />
    </div>
  );
}

export default Layout;
