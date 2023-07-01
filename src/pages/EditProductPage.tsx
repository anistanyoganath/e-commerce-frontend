import React from "react";
import { Header } from "../components/Header";
import { ProductForm } from "../components/ProductForm";

export const EditProductPage: React.FC = () => {
  return (
    <>
      <Header title="PRODUCTS" />
      <ProductForm />
    </>
  );
};
