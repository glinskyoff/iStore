import React from "react";
import styles from "./Promocode.module.scss";

export const Promocode: React.FC = () => {
  return (
    <div className={styles.promocode}>
      <div className={styles.block}>
        <h2 className={styles.title}>У вас имеется промокод?</h2>
        <div className={styles.group}>
          <input type="text" placeholder="Введите промокод" />
          <button></button>
        </div>
        <p className={styles.success}>промокод активирован</p>
        <p className={styles.error}>промокод не найден</p>
      </div>
      <div className={styles.cartBlock}>
        <h2 className={styles.title}>
          В корзине - <span>1 товар </span>
        </h2>
        <div className={styles.amountBlock}>
          <div className={styles.amount}>
            <h3>Стоимость</h3>
            <p>999 999 ₽</p>
          </div>
          <div className={styles.amountPromocode}>
            <h3>Промокод</h3>
            <p>- 99 999 ₽</p>
          </div>
          <div className={styles.amountTotal}>
            <h3>Итоговая сумма</h3>
            <p>999 999 ₽</p>
          </div>
        </div>
      </div>
      <button className={styles.amountButton}>Оформить заказ</button>
    </div>
  );
};
