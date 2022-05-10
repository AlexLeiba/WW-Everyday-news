import Header from "./Header";
import Footer from "./Footer"
import styles from "./Layout.module.css"
import Container from "react-bootstrap/Container"

import React from 'react'

function Layout(props) {
    return (
      <div className={`${styles.layout}`}>
        <Header />
        
          <main>{props.children}</main>
        
        <Footer />
      </div>
    );
}

export default Layout
