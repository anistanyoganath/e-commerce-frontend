import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Product } from "../models/Product";

interface Props {
  productList: Product[];
}

export const ProductList: React.FC<Props> = (props) => {
  const handleProductAction = (
    sku: number,
    action: "delete" | "edit" | "star"
  ) => {
    switch (action) {
      case "delete":

      case "edit":

      case "star":
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
          {props.productList.map((product, index) => (
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
                <Button
                  onClick={() => handleProductAction(product.sku, "delete")}
                >
                  <img src="/assets/delete-icon.svg" />
                </Button>
                <Button
                  onClick={() => handleProductAction(product.sku, "edit")}
                >
                  <img src="/assets/edit-icon.svg" />
                </Button>
                <Button
                  onClick={() => handleProductAction(product.sku, "star")}
                >
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
