import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>2024 Все права защищены</div>
      <div className={styles.footer__center}>
        <p className={`${styles.footer__text} ${styles.footer__text_rageitalic}`}>design by</p>
        <p className={`${styles.footer__text} ${styles.footer__text_sendflowers}`}>Dmitriy Yurinskiy</p>
      </div>
      <div className={styles.footer__right}>Политика конфиденциальности</div>
    </footer>
  );
};

export default Footer;