import React from "react";
import styles from "./Cart.module.scss";
import { Header } from "../../components/Header";
import { Promocode } from "../../components/Promocode";

import axios from "axios";
import { Carts } from "../../components/Carts";
import { CartImage } from "./images/CartImage";
import { ButtonEmpty } from "../../UI/ButtonEmpty";
// import { CartImage } from "./images/CartImage";

export const Cart: React.FC = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const status = 1;

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://643179313adb1596516d37a9.mockapi.io/cartItems")
      .then((res) => {
        setTimeout(() => {
          setCartItems(res.data);
          setIsLoading(false);
        }, 500);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.cartInner}>
        {status ? (
          <div>
            <h2 className={styles.title}>
              Корзина - <span>18</span>
            </h2>

            <div className={styles.cartFlex}>
              <div className={styles.carts}>
                <Carts />
                <Carts />
                <Carts />
              </div>
              <Promocode />
            </div>
          </div>
        ) : (
          <div className={styles.cartBlock}>
            <CartImage />
            <h1 className={styles.cartBlockTitle}>Корзина пуста</h1>
            <p className={styles.cartBlockDesc}>
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <ButtonEmpty />
          </div>
        )}
      </div>
    </div>
  );
};
