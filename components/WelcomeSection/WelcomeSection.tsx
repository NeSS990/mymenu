import React from 'react';
import styles from './WelcomeSection.module.css';

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeSection__left}>
        <div className={styles.welcomeSection__background} />
        <div className={styles.welcomeSection__content}>
          <h1 className={styles.welcomeSection__title}>DI & AR</h1>
          <p className={styles.welcomeSection__subtitle}>
            Открой для себя дверь в мир изысканных вкусов и незабываемых впечатлений.
          </p>
          <div className={styles.welcomeSection__divider} />
          <p className={styles.welcomeSection__description}>
            Позволь себе открыть новые горизонты вкуса и погрузиться в мир самых изысканных блюд.
          </p>
        </div>
      </div>

      <div className={styles.welcomeSection__right}>
        <div className={styles.welcomeSection__lightEffect} />
      </div>
    </section>
  );
};

export default WelcomeSection;