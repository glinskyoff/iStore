import React from "react";
import { IPhone } from "../../types";
import styles from "./Filter.module.scss";

import { Skeleton } from "./Skeleton";

interface FilterProps {
  phones: IPhone[];
  activePhone: string;
  isLoading: boolean;
  onChangeSort: (valueProperty: string, order: string) => void;
  searchText: string;
}

export const Filter: React.FC<FilterProps> = ({
  isLoading,
  onChangeSort,
  phones,
  activePhone,
  searchText,
}) => {
  const [isSortList, setIsSortList] = React.useState(false);
  const [sortValue, setSortValue] = React.useState("новизне");
  const [selectedValue, setSelectedValue] = React.useState(0);
  const sortValues = [
    { id: 1, title: "новизне", valueProperty: "id", order: "asc" },
    { id: 2, title: "количеству памяти", valueProperty: "size", order: "desc" },
    {
      id: 3,
      title: "возрастанию стоимости",
      valueProperty: "price",
      order: "asc",
    },
    {
      id: 4,
      title: "уменьшению стоимости",
      valueProperty: "price",
      order: "desc",
    },
  ];

  const onClickList = (
    id: number,
    title: string,
    valueProperty: string,
    order: string
  ) => {
    setSortValue(title);
    setSelectedValue(id);
    onChangeSort(valueProperty, order);
  };

  const titleSort = (activePhone: string, searchText: string) => {
    if (activePhone === "*") {
      if (searchText) {
        return 'По запросу "' + searchText + '" найдено ';
      } else {
        return "Весь каталог";
      }
    } else {
      return activePhone;
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterInner}>
        <p className={styles.filterTitle}>
          {titleSort(activePhone, searchText)} {" - "}
          <span>{phones.length}</span>
        </p>
        <div className={styles.filterBlock}>
          <p className={styles.title}>
            Сортировать по:{" "}
            <span onClick={() => setIsSortList(!isSortList)}>{sortValue}</span>
          </p>
          {isSortList && (
            <ul onClick={() => setIsSortList(!isSortList)}>
              {sortValues.map((item) => (
                <li
                  key={item.id}
                  style={{
                    background: selectedValue === item.id ? "#303030" : "",
                  }}
                  onClick={() =>
                    onClickList(
                      item.id,
                      item.title,
                      item.valueProperty,
                      item.order
                    )
                  }
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
