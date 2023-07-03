import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";

export const FavouriteProductPage: React.FC = () => {
  return (
    <>
      <Header title="FAVOURITE PRODUCTS" searchBarEnable />
      <ProductList />
    </>
  );
};
