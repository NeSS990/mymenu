import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>2024 Все права защищены</div>
      <div className={styles.footer__right}>Политика конфиденциальности</div>
    </footer>
  );
};

export default Footer;
