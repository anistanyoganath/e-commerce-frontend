import React from "react";
import { Header } from "../components/Header";
import { AddProductForm } from "../components/AddProductForm";

export const AddProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <AddProductForm />
    </>
  );
};
