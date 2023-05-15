import React from "react";
import { Header } from "../../components/Header";

import styles from "./Order.module.scss";
import { Footer } from "../../components/Footer";
import { Order } from "./Order";
import { OrderImage } from "./images/OrderImage";
import { ButtonEmpty } from "../../UI/ButtonEmpty";

export const Orders: React.FC = () => {
  const status = 1;

  return (
    <div className={styles.orderMain}>
      <Header />
      <div className={styles.orderInner}>
        {status ? (
          <div>
            <h1 className={styles.title}>Мои заказы</h1>
            <Order />
          </div>
        ) : (
          <div className={styles.orderBlock}>
            <OrderImage />
            <h1 className={styles.orderTitle}>Список заказов пуст</h1>
            <p className={styles.orderDesc}>
              Здесь будут отображаться ранее заказанные товары
            </p>
            <ButtonEmpty />
          </div>
        )}
      </div>
    </div>
  );
};
