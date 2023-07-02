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
import { deleteProduct, setProductList, updateProduct } from "../state/Slice";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../services/ProductServices";
import { ResponseModel } from "../models/ResponseModel";

export const ProductList: React.FC = () => {
  const productList = useSelector((state: Product[]) => state);
  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getProductList();
  }, []);

  async function getProductList() {
    await getAllProducts().then((response: ResponseModel) => {
      if (response.status) {
        let tempProductList = response.data as Product[];
        dispath(setProductList(tempProductList));
      }
    });
  }

  const handleProductAction = (
    product: Product,
    action: "delete" | "edit" | "like"
  ) => {
    switch (action) {
      case "delete":
        dispath(deleteProduct(product.sku));
        break;
      case "edit":
        dispath(updateProduct(product));
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
          {productList.map((product, index) => (
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
                <Button onClick={() => navigate("/editProduct/" + product.sku)}>
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
