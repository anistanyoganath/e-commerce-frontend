import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { Product } from "../models/ProductModel";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  filterFavouriteProducts,
  setProductList,
  updateProduct,
} from "../state/Slice";
import { useNavigate } from "react-router-dom";
import {
  getAllProducts,
  requestDeleteProduct,
  requestUpdateProduct,
} from "../services/ProductServices";
import { ResponseModel } from "../models/ResponseModel";

interface Props {
  showFavouriteProducts?: boolean;
}
export const ProductList: React.FC<Props> = (props) => {
  const products = useSelector((state: Product[]) => state);
  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.showFavouriteProducts) {
      getProductList();
    } else {
      dispath(filterFavouriteProducts());
    }
  }, []);

  async function getProductList() {
    await getAllProducts()
      .then((response: ResponseModel) => {
        if (response.Status) {
          let tempProductList = response.Data as Product[];
          dispath(setProductList(tempProductList));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteProductFromDB(sku: string) {
    await requestDeleteProduct(sku).then((response: ResponseModel) => {
      console.log(response);
    });
  }

  async function updateProductInDB(product: Product) {
    await requestUpdateProduct(product).then((response: ResponseModel) => {
      console.log(response);
    });
  }

  const handleProductAction = (
    product: Product,
    action: "delete" | "edit" | "like"
  ) => {
    switch (action) {
      case "delete":
        dispath(deleteProduct(product.sku));
        deleteProductFromDB(product.sku);
        break;
      case "edit":
        dispath(updateProduct(product));
        updateProductInDB(product);
        break;
      case "like":
        console.log(product);
        // let tempProduct = product;
        // tempProduct.isFavourite = true;
        // dispath(updateProduct(tempProduct));
        break;
    }
  };

  return (
    <Paper sx={{ mt: 2, ml: 10, mr: 10 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell>PRODUCT NAME</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>$ {product.price}</TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  width: 50,
                  justifyContent: "space-between",
                }}
              >
                <Button onClick={() => handleProductAction(product, "delete")}>
                  <img src="/assets/delete-icon.svg" />
                </Button>
                <Button
                  onClick={() => navigate("/editProduct", { state: product })}
                >
                  <img src="/assets/edit-icon.svg" />
                </Button>
                <Button onClick={() => handleProductAction(product, "like")}>
                  <img src="/assets/star.svg" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
