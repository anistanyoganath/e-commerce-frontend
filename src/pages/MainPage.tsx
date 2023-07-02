import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Product } from "../models/ProductModel";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header title="PRODUCTS" searchBarEnable/>
      <ProductList />
    </>
  );
};
