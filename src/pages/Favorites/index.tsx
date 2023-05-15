import React from "react";
import styles from "./Favorites.module.scss";
import { Header } from "../../components/Header";
import { CardFavorite } from "../../components/Cards/CardFavorite";
import { Footer } from "../../components/Footer";
import { Hearth } from "./images/Hearth";
import { ButtonEmpty } from "../../UI/ButtonEmpty";

export const Favorites: React.FC = () => {
  const status = 1;

  return (
    <div className={styles.favorites}>
      <Header />
      <div className={styles.favoritesInner}>
        {status ? (
          <div>
            <h2 className={styles.title}>Избранное</h2>
            <div className={styles.favoritesBlock}>
              <CardFavorite />
              <CardFavorite />
              <CardFavorite />
            </div>
          </div>
        ) : (
          <div className={styles.favoritesBlockEmpty}>
            <Hearth />
            <h2 className={styles.title}>У вас нет избранных товаров</h2>
            <p className={styles.desc}>
              Добавьте в избранное товары, чтобы не потерять товар
            </p>
            <ButtonEmpty />
          </div>
        )}
      </div>
    </div>
  );
};
