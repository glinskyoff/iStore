import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "./images/Logo";
import { Telegram } from "./images/Telegram";
import { Instagram } from "./images/Instagram";
import { VK } from "./images/VK";

export const Footer: React.FC = () => {
  const [language, setLanguage] = React.useState("English");

  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerInfo}>
          <a href="">
            <Logo />
          </a>
          <p className={styles.footerTitle}>© 2022 Все права защищены</p>
        </div>
        <div className={styles.footerLink}>
          <div className={styles.footerLinkBlock}>
            <a href="">
              <Telegram />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <VK />
            </a>
          </div>
          <p className={styles.footerLanguage}>Russia</p>
        </div>
      </div>
    </div>
  );
};
