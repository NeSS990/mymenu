'use client';

import React, { useState, useEffect } from 'react';
import styles from './PromoSlider.module.css';

interface PromoSliderProps {
  images: string[];
}

const PromoSlider: React.FC<PromoSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.promoSlider}>
      <div
        className={styles.promoSlider__slide}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.promoSlider__item}>
            <img src={image} alt={`Promo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;