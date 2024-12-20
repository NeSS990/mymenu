import React from 'react';
import styles from './MenuNavigation.module.css';

const MenuNavigation: React.FC = () => {
  return (
    <div className={styles.menuNavigation}>
      <a href="#mainDishes" className={styles.menuNavigation__link}>Основные блюда</a>
      <a href="#salads" className={styles.menuNavigation__link}>Салаты</a>
      <a href="#drinks" className={styles.menuNavigation__link}>Напитки</a>
    </div>
  );
};

export default MenuNavigation;