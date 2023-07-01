import {
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
  return (
    <Paper sx={{ margin: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell>PRODUCT NAME</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.productList.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
