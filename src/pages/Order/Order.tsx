import React from "react";
import styles from "./Order.module.scss";

import { OrderItem } from "./OrderItem";

export const Order: React.FC = () => {
  return (
    <div className={styles.order}>
      <div className={styles.titleOrder}>
        <h2>
          Заказ - #99999 <span>от 28.12.2022</span>
        </h2>
        <p>
          Итого: <span>163 980 ₽</span>
        </p>
      </div>
      <OrderItem />
      <OrderItem />
      <div className={styles.orderButton}>
        <button>Удалить из истории</button>
      </div>
    </div>
  );
};
