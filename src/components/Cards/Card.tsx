import React from "react";
import { IPhone } from "../../types";
import styles from "./Cards.module.scss";
import { Modal } from "./Modal";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface CardProps extends IPhone {}

export const Card: React.FC<CardProps> = ({
  id,
  imageUrl,
  brand,
  size,
  color,
  price,
  article,
}) => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);
  // const [isCartItem, setIsCartItem] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleModal = (amount: number) => {
    setIsModal(false);
    // setIsCartItem(true);
    // console.log(id, imageUrl, article, brand, size, color, price, amount);
    // axios.post("https://643179313adb1596516d37a9.mockapi.io/cartItems", {
    //   ...props,
    //   amount,
    // });
  };

  return (
    <div className={styles.cardBlock}>
      {isModal && (
        <Modal
          id={id}
          imageUrl={imageUrl}
          brand={brand}
          size={size}
          color={color}
          price={price}
          article={article}
          handleModal={(amount) => handleModal(amount)}
        />
      )}
      <div className={styles.cardImg}>
        <img src={imageUrl} alt="phone" />
      </div>
      <p className={styles.cardTitle}>{brand}</p>
      <p className={styles.cardSize}>
        {size === 1024 ? "1 ТБ" : size + " ГБ"} / {color}
      </p>
      <p className={styles.cardPrice}>
        {price.toLocaleString("ru-RU", {
          style: "currency",
          currency: "RUB",
          maximumFractionDigits: 0,
        })}
      </p>
      <div className={styles.cardButtonBlock}>
        <button
          className={styles.cardButtonBuy}
          onClick={
            // isCartItem ? () => navigate("/cart") : () => setIsModal(true)
            () => setIsModal(true)
          }
        >
          {/* {isCartItem ? "Перейти в корзину" : "Купить"} */}
          Купить
        </button>
        <button
          className={styles.cardButtonFavorite}
          onClick={() => setIsAdded(!isAdded)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99999 5.33331C5.94999 5.33331 2.66666 8.61665 2.66666 12.6666C2.66666 20 11.3333 26.6666 16 28.2173C20.6667 26.6666 29.3333 20 29.3333 12.6666C29.3333 8.61665 26.05 5.33331 22 5.33331C19.52 5.33331 17.3267 6.56465 16 8.44931C15.3238 7.48612 14.4254 6.70004 13.381 6.15764C12.3366 5.61524 11.1769 5.33248 9.99999 5.33331Z"
              stroke={isAdded ? "red" : "#323437"}
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
