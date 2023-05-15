import React from "react";
import styles from "./Cards.module.scss";
import { IPhone } from "../../types";
import { Logo } from "./images/Logo";

interface ModalProps extends IPhone {
  handleModal: (amount: number) => void;
}

export const Modal: React.FC<ModalProps> = ({
  handleModal,
  id,
  article,
  imageUrl,
  brand,
  size,
  color,
  price,
}) => {
  const [amount, setAmount] = React.useState(1);

  const amountIncrement = () => {
    setAmount((prev) => prev + 1);
  };

  const amountDecrement = () => {
    2 <= amount ? setAmount((prev) => prev - 1) : 1;
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.modalInner}>
          <div className={styles.modalTop}>
            <p className={styles.modalTitle}>Товар добавлен в корзину</p>
            <div className={styles.modalButtonBlock}>
              <button
                className={styles.continue}
                onClick={() => handleModal(amount)}
              >
                Продолжить
              </button>
              <button className={styles.cart}>В корзину</button>
            </div>
          </div>

          <div className={styles.modalBlock}>
            <div className={styles.left}>
              <div className={styles.photo}>
                <img src={imageUrl} alt="phone" />
              </div>

              <div className={styles.info}>
                <p className={styles.infoBrand}>{brand}</p>
                <p className={styles.sizeColor}>
                  {size === 1024 ? "1 ТБ" : size + " ГБ"} / {color}
                </p>
                <p className={styles.photoId}>{article}</p>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.countBlock}>
                <button className={styles.dec} onClick={amountDecrement}>
                  -
                </button>
                <p className={styles.count}>{amount}</p>
                <button className={styles.inc} onClick={amountIncrement}>
                  +
                </button>
              </div>
              <p className={styles.price}>
                {(price * amount).toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>

          <div className={styles.modalLogo}>
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};
