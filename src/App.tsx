import React from "react";
import axios from "axios";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { IPhone } from "./types";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Favorites } from "./pages/Favorites";
import { Orders } from "./pages/Order";

export const App: React.FC = () => {
  const [phones, setPhones] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState("");

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeValue, setActiveValue] = React.useState("id");
  const [activeOrder, setActiveOrder] = React.useState("");
  const [activePhone, setActivePhone] = React.useState("*");

  const onChangeSort = (value: string, order: string) => {
    setActiveValue(value);
    setActiveOrder(order);
  };

  const handleChangeModel = (id: number, brand: string) => {
    setActiveIndex(id);
    setSearchText("");
    brand === "Весь каталог" ? setActivePhone("*") : setActivePhone(brand);
  };

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://643179313adb1596516d37a9.mockapi.io/items?${
          activePhone ? "brand=" + activePhone : ""
        }&sortBy=${activeValue ? activeValue + "&order=" + activeOrder : ""}`
      )
      .then((res) => {
        setTimeout(() => {
          setPhones(res.data);
          setIsLoading(false);
        }, 500);
      });
    window.scrollTo(0, 0);
  }, [activePhone, activeValue, activeOrder]);

  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                phones={phones}
                isLoading={isLoading}
                setActiveIndex={setActiveIndex}
                setActivePhone={setActivePhone}
                activeIndex={activeIndex}
                activePhone={activePhone}
                onChangeSort={(value, order) => onChangeSort(value, order)}
                searchText={searchText}
                setSearchText={setSearchText}
                handleChangeModel={(id, brand) => handleChangeModel(id, brand)}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/order" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
