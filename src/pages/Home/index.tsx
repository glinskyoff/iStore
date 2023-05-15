import React from "react";
import styles from "./Home.module.scss";
import { IPhone } from "../../types";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Filter } from "../../components/Filter";
import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";

interface HomeProps {
  phones: IPhone[];
  isLoading: boolean;
  activeIndex: number;
  activePhone: string;
  setActivePhone: (activePhone: string) => void;
  setActiveIndex: (activeIndex: number) => void;
  onChangeSort: (value: string, order: string) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  handleChangeModel: (id: number, brand: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  phones,
  isLoading,
  activeIndex,
  activePhone,
  setActiveIndex,
  setActivePhone,
  onChangeSort,
  searchText,
  setSearchText,
  handleChangeModel,
}) => {
  return (
    <div className={styles.home}>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setActiveIndex={setActiveIndex}
        setActivePhone={setActivePhone}
      />
      <Menu
        handleChangeModel={(id, brand) => handleChangeModel(id, brand)}
        activeIndex={activeIndex}
      />
      <Filter
        phones={phones}
        activePhone={activePhone}
        isLoading={isLoading}
        onChangeSort={(value, order) => onChangeSort(value, order)}
        searchText={searchText}
      />
      <Cards
        phones={phones}
        isLoading={isLoading}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Footer />
    </div>
  );
};
