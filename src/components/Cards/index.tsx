import React from "react";
import { IPhone } from "../../types";
import styles from "./Cards.module.scss";

import { Card } from "./Card";
import { Skeleton } from "./Skeleton";

interface CardsProps {
  phones: IPhone[];
  isLoading: boolean;
  searchText: string;
  setSearchText: (searchText: string) => void;
}

export const Cards: React.FC<CardsProps> = ({
  phones,
  isLoading,
  searchText,
}) => {
  const skeleton = [...new Array(6)].map((obj, index) => (
    <Skeleton key={index} />
  ));
  const phonesFilter = phones
    .filter((obj) => {
      return obj.brand
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
        ? true
        : false;
    })
    .map((obj) => <Card key={obj.id} {...obj} />);

  return (
    <div className={styles.cardsBlock}>
      {isLoading ? skeleton : phonesFilter}
    </div>
  );
};
