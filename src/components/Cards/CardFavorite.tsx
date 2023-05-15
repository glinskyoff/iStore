import React from "react";
import styles from "./Cards.module.scss";

export const CardFavorite: React.FC = () => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.cardImg}>
        <img
          src="https://res.cloudinary.com/dm9xki8iv/image/upload/v1681633092/phones/iphone14_silver_hsfo2a.png"
          alt="phone"
        />
      </div>
      <p className={styles.cardTitle}>Apple iPhone 14</p>
      <p className={styles.cardSize}>1 ТБ / Белый</p>
      <p className={styles.cardPrice}> 118 990 ₽</p>
      <div className={styles.cardButtonBlock}>
        <button className={styles.cardButtonBuy}>Купить</button>
        <button className={styles.cardButtonFavorite}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99999 5.33331C5.94999 5.33331 2.66666 8.61665 2.66666 12.6666C2.66666 20 11.3333 26.6666 16 28.2173C20.6667 26.6666 29.3333 20 29.3333 12.6666C29.3333 8.61665 26.05 5.33331 22 5.33331C19.52 5.33331 17.3267 6.56465 16 8.44931C15.3238 7.48612 14.4254 6.70004 13.381 6.15764C12.3366 5.61524 11.1769 5.33248 9.99999 5.33331Z"
              stroke="#323437"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
