import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

import { Logo } from "./images/Logo";
import { Header } from "../../components/Header";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundInner}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <h1 className={styles.title}>Ничего не найдено</h1>
        <p className={styles.description}>
          Данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
};
