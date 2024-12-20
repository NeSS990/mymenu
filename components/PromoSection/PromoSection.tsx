'use client';

import React, { useState } from 'react';
import styles from './PromoSection.module.css';

interface PromoSectionProps {
  title: string;
  data: { name: string; color: string; price: number }[];
}

const PromoSection: React.FC<PromoSectionProps> = ({ title, data }) => {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPageItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={styles.promoSection}>
      <h2 className={styles.promoSection__title}>{title}</h2>

      <div className={styles.promoSection__carousel}>
        <div className={styles.promoSection__carouselWrapper}>
          {!isExpanded && (
            <>
              {totalPages > 1 && currentPage > 0 && (
                <button
                  className={`${styles.promoSection__arrow} ${styles['promoSection__arrow--left']}`}
                  onClick={goToPreviousPage}
                >
                  <img src="/left-arrow.svg" alt="" />
                </button>
              )}

              {currentPageItems.map((item, index) => (
                <div className={styles.promoSection__card} key={index}>
                  <div
                    className={styles.promoSection__cardBlur}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <img
                    src={`/dishes/${item.name.toLowerCase()}.png`}
                    alt={item.name}
                    className={styles.promoSection__cardImage}
                  />
                  <div className={styles.promoSection__cardTitle}>{item.name}</div>
                  <div className={styles.promoSection__cardPrice}>{item.price} ₽</div>
                </div>
              ))}

              {totalPages > 1 && currentPage < totalPages - 1 && (
                <button
                  className={`${styles.promoSection__arrow} ${styles['promoSection__arrow--right']}`}
                  onClick={goToNextPage}
                >
                  <img src="/right-arrow.svg" alt="" />
                </button>
              )}
            </>
          )}

          {isExpanded && (
            <div className={styles.promoSection__gridWrapper}>
              {data.map((item, index) => (
                <div className={styles.promoSection__card} key={index}>
                <div
                  className={styles.promoSection__cardBlur}
                  style={{ backgroundColor: item.color }}
                ></div>
                <img
                  src={`/dishes/${item.name.toLowerCase()}.png`}
                  alt={item.name}
                  className={styles.promoSection__cardImage}
                />
                <div className={styles.promoSection__cardTitle}>{item.name}</div>
                <div className={styles.promoSection__cardPrice}>{item.price} ₽</div>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isExpanded && totalPages > 1 && (
        <>
          <div className={styles.promoSection__pagination}>
            {[...Array(totalPages)].map((_, index) => (
              <div
                key={index}
                className={`${styles.promoSection__pageDot} ${
                  currentPage === index ? styles['promoSection__pageDot--active'] : ''
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <button
            className={styles.promoSection__expandButton}
            onClick={toggleExpand}
          >
            Развернуть
            <img src="/arrow-down.svg" alt="Развернуть" className="promoSection__icon" />
          </button>
        </>
      )}

      {isExpanded && (
        <button
          className={styles.promoSection__collapseButton}
          onClick={toggleExpand}
        >
          Свернуть
          <img src="/arrow-up.svg" alt="Развернуть" className="promoSection__icon" />
        </button>
      )}
    </section>
  );
};

export default PromoSection;