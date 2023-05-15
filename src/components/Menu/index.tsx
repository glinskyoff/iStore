import React from "react";
import styles from "./Menu.module.scss";

import { Phone } from "./images/Phone";

interface MenuProps {
  activeIndex: number;
  handleChangeModel: (id: number, brand: string) => void;
}

export const Menu: React.FC<MenuProps> = ({
  handleChangeModel,
  activeIndex,
}) => {
  const menu = [
    "Весь каталог",
    "iPhone 14",
    "iPhone 13",
    "iPhone 12",
    "iPhone 11",
    "iPhone X",
    "iPhone 8",
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.menuInner}>
        {menu.map((item, index) => (
          <button
            className={styles.menuItem}
            onClick={() => handleChangeModel(index, item)}
            key={index}
            style={{
              background:
                activeIndex === index ? "rgba(100, 102, 105, 0.25)" : "",
            }}
          >
            <Phone />
            <p className={styles.menuItemTitle}>{item}</p>
          </button>
          // <MenuItem
          //   key={item.id}
          //   {...item}
          //   handleChangeModel={handleChangeModel}
          //   currentPhone={currentPhone}
          // />
        ))}
      </div>
    </div>
  );
};
