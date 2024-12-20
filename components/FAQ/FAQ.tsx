'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

type Question = {
  question: string;
  answer: string;
};

const faqData: Question[] = [
  { question: 'Почему такие высокие цены?', answer: 'Наши товары отличаются высоким качеством и надёжностью.' },
  { question: 'Есть ли у вас доставка?', answer: 'Да, доставка доступна по всей стране.' },
  { question: 'Система промокодов', answer: 'Мы регулярно проводим акции с промокодами на скидки.' },
  { question: 'Что делать, если заказ не отобразился?', answer: 'Проверьте подключение к интернету и перезагрузите страницу.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faq}>
      <h2 className={styles.faq__title}>Поможем оформить заказ</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faq__item}>
          <div
            className={`${styles.faq__question} ${openIndex === index ? styles['faq__question--open'] : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
            <span className={styles.faq__icon}>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div className={styles.faq__answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;