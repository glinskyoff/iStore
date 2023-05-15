import React from "react";
import styles from "./Order.module.scss";

import iphone from "../../components/Cards/images/phones/iphone12_violet.png";

export const OrderItem: React.FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.photo}>
        <img src={iphone} alt="iphone" />
        <div className={styles.group}>
          <h2>Apple iPhone 12</h2>
          <h3>256 ГБ / Фиолетовый</h3>
          <h4>634006</h4>
        </div>
      </div>
      <div className={styles.amountBlock}>
        <p className={styles.total}>
          Цена: <span>81 990 ₽</span>
        </p>
        <p className={styles.one}>
          1 шт. x <span>81 990 ₽</span>
        </p>
      </div>
    </div>
  );
};
