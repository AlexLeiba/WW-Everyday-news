import React from 'react';
import styles from './Scroll.module.css';

export const GotoTop = ({ handleVisibleButton, showGoUp }) => {
  return (
    <div className={styles.goTop} onClick={handleVisibleButton}>
      Up
    </div>
  );
};
