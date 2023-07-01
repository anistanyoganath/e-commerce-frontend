import React from "react";
import { Header } from "../components/Header";
import { ProductForm } from "../components/ProductForm";

export const AddProductPage: React.FC = () => {
  return (
    <>
      <Header title="PRODUCTS"/>
      <ProductForm />
    </>
  );
};
