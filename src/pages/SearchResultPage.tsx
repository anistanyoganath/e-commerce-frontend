import React from "react";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResults";

export const SearchResultPage: React.FC = () => {
  return (
    <>
      <Header title="PRODUCTS" searchBarEnable />
      <SearchResults />
    </>
  );
};
