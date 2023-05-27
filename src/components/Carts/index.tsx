import React from "react";
import styles from "./Carts.module.scss";

import iphone from "../Cards/images/phones/iphone13_green.png";

export const Carts: React.FC = () => {
  const price = 75990;
  const [cartItemAmount, setCartItemAmount] = React.useState(1);

  const cartItemDecrement = () => {
    2 <= cartItemAmount ? setCartItemAmount((prev) => prev - 1) : 1;
  };

  const cartItemIncrement = () => {
    setCartItemAmount((prev) => prev + 1);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.flex}>
        <div className={styles.groupInfo}>
          <img src={iphone} alt="iphone" />
          <div className={styles.info}>
            <h1>Apple iPhone 13</h1>
            <h2>256 Гб / Зелёный</h2>
            {/* <div className={styles.block}> */}
            <h4>645013</h4>
            {/* <button>Убрать из корзины</button> */}
            {/* </div> */}
          </div>
        </div>
        <div className={styles.groupCount}>
          <div className={styles.countBlock}>
            <button className={styles.dec} onClick={cartItemDecrement}>
              -
            </button>
            <p className={styles.count}>{cartItemAmount}</p>
            <button className={styles.inc} onClick={cartItemIncrement}>
              +
            </button>
          </div>
          <p className={styles.price}>
            {(price * cartItemAmount).toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
