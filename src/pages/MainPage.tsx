import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Product } from "../models/Product";

export const MainPage: React.FC = () => {
  const productList: Product[] = [
    {
      sku: 1234,
      name: "testProduct",
      images: [],
      description: "",
      quantity: 10,
      price: 100
    },
  ];
  return (
    <>
      <Header title="PRODUCTS" searchBarEnable/>
      <ProductList productList={productList} />
    </>
  );
};
