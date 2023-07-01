import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { Product } from "../models/Product";

export const MainPage: React.FC = () => {
  const productList: Product[] = [
    {
      sku: 1234,
      productName: "testProduct",
      images: [],
      productDescription: "",
      quantity: 10,
      price: 100
    },
  ];
  return (
    <>
      <Header title="PRODUCTS" />
      <ProductList productList={productList} />
    </>
  );
};
