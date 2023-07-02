import React, { useState } from "react";
import { Header } from "../components/Header";
import { ProductForm } from "../components/ProductForm";
import { useSearchParams } from "react-router-dom";

export const EditProductPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sku] = useState(searchParams.get("sku") as unknown as number);

  return (
    <>
      <Header title="PRODUCTS" />
      <ProductForm />
    </>
  );
};
