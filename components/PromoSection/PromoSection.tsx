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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{ name: string; color: string; price: number } | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

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

  const openModal = (item: { name: string; color: string; price: number }) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleQuantityChange = (action: 'increment' | 'decrement') => {
    if (action === 'increment') {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      alert(`Вы заказали ${quantity} ${selectedItem.name}`);
      closeModal();
    }
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
                <div
                  className={styles.promoSection__card}
                  key={index}
                  onClick={() => openModal(item)}
                >
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
                <div
                  className={styles.promoSection__card}
                  key={index}
                  onClick={() => openModal(item)}
                >
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

      {isModalOpen && selectedItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modal__closeButton} onClick={closeModal}>
              <img src="/X.png" alt="Закрыть" />
            </button>
            <div className={styles.modal__left}>
              <img
                src={`/dishes/${selectedItem.name.toLowerCase()}.png`}
                alt={selectedItem.name}
                className={styles.modal__image}
              />
              <div
                className={styles.modal__blur}
                style={{ backgroundColor: selectedItem.color }}
              ></div>
            </div>
            <div className={styles.modal__right}>
              <h3 className={styles.modal__title}>{selectedItem.name}</h3>
              <p className={styles.modal__description}>Описание</p>
              <p className={styles.modal__ingredients}>
                Ингредиенты: сахар, соль, вода, мука, яйца, масло
              </p>
              <div className={styles.modal__footer}>
                <div className={styles.modal__price}>{selectedItem.price} ₽</div>
                <div className={styles.modal__quantityWrapper}>
                  <button
                    className={styles.modal__quantityButton}
                    onClick={() => handleQuantityChange('decrement')}
                  >
                    -
                  </button>
                  <div className={styles.modal__quantityValue}>{quantity}</div>
                  <button
                    className={styles.modal__quantityButton}
                    onClick={() => handleQuantityChange('increment')}
                  >
                    +
                  </button>
                </div>
                <button className={styles.modal__addButton} onClick={handleAddToCart}>Добавить</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromoSection;