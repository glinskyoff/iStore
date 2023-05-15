import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { IPhone } from "../../types";

import { CartImage } from "./images/CartImage";
import { Favorite } from "./images/Favorite";
import { Logo } from "./images/Logo";
import { Profile } from "./images/Profile";
import { Search } from "./images/Search";
import { Close } from "./images/Close";

interface HeaderProps {
  searchText?: string;
  setSearchText?: (searchText: string) => void;
  setActiveIndex?: (activeIndex: number) => void;
  setActivePhone?: (activePhone: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchText,
  setSearchText,
  setActiveIndex,
  setActivePhone,
}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText!(e.target.value);
    setActiveIndex!(0);
    setActivePhone!("*");
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerSearch}>
          <Search />
          <input
            type="text"
            ref={inputRef}
            className={styles.headerSearchInput}
            placeholder="Найти телефон"
            value={searchText}
            onChange={(e) => onChangeSearch(e)}
            onClick={() => navigate("/")}
          />
          {searchText && <Close setSearchText={setSearchText} />}
        </div>

        <Link
          className={styles.headerLogo}
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Logo />
        </Link>

        <div className={styles.headerCart}>
          <Link to="/favorites" className={styles.headerCartLink}>
            <Favorite />
          </Link>
          <Link to="/order" className={styles.headerCartLink}>
            <Profile />
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className={styles.headerCartBlock}>
              <CartImage />
              <p className={styles.headerCartAmount}>123</p>
              <p className={styles.headerCartPrice}>999.999 ₽</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
