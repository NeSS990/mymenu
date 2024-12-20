import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__backgroundText}>
        <p>
          Наш ресторан — это место, где вкус и атмосфера объединяются, чтобы подарить вам незабываемые моменты. Мы гордимся своей историей, традициями и тем, что каждый день можем быть частью вашего отдыха.
        </p>
      </div>

      <div className={styles.aboutUs__card}>
        <h3 className={styles.aboutUs__cardTitle}>01</h3>
        <p className={styles.aboutUs__cardText}>
            В основе нашей работы — страсть к гастрономии и стремление удивлять вас сочетанием вкусов, ароматов и подачи.
        </p>
      </div>

      <div className={`${styles.aboutUs__card} ${styles.aboutUs__cardSecond}`}>
        <h3 className={styles.aboutUs__cardTitle}>02</h3>
        <p className={styles.aboutUs__cardText}>
        Мы заботимся о том, чтобы каждое ваше посещение оставило приятное послевкусие и желание вернуться снова.
        </p>
      </div>

      <div className={`${styles.aboutUs__card} ${styles.aboutUs__cardThird}`}>
        <h3 className={styles.aboutUs__cardTitle}>03</h3>
        <p className={styles.aboutUs__cardText}>
        Наша команда — это люди, которые любят своё дело, а наш ресторан — место, где вы всегда найдёте тепло, уют и радушие.
        </p>
      </div>

      <div className={`${styles.aboutUs__card} ${styles.aboutUs__cardFourth}`}>
        <h3 className={styles.aboutUs__cardTitle}>04</h3>
        <p className={styles.aboutUs__cardText}>
        Каждый день мы стремимся превзойти ожидания,  предлагая не просто еду,а настоящий гастрономический опыт. Спасибо, что выбираете нас в Красноярске!
        </p>
      </div>

      <div className={styles.aboutUs__content}>
        <h1 className={styles.aboutUs__title}>О НАС</h1>
        <p className={styles.aboutUs__subtitle}>Работаем ежедневно <br /> с 10:00 до 24:00</p>
      </div>
    </section>
  );
};

export default AboutUs;