import React from "react";
import { style } from "react-stylesheet";
import styles from "./Scroll.module.css";

export const GotoTop = ({ handleVisibleButton, showGoUp }) => {
  return (
    <div className={styles.goTop} onClick={handleVisibleButton}>
      Up
    </div>
  );
};
