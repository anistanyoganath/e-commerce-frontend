import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addProduct } from "../state/Slice";
import { Product } from "../models/Product";
import { useDispatch } from "react-redux";

interface Props {
  sku?: string;
}
export const ProductForm: React.FC<Props> = (props) => {
  const dispath = useDispatch();
  const [productDetail, setProductDetail] = useState<Product>();

  function addNewProduct() {
    dispath(addProduct(productDetail!));
  }

  return (
    <Paper sx={{ marginLeft: 10, marginRight: 10, marginTop: 4, padding: 2 }}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextField
            label={"SKU"}
            fullWidth
            value={productDetail?.sku}
            onChange={(e) => {
              setProductDetail({ ...productDetail!, sku: e.target.value });
            }}
          />
        </Grid>
        <Grid container spacing={4} mt={1}>
          <Grid item md={6} xs={12}>
            <TextField
              label={"Name"}
              fullWidth
              value={productDetail?.name}
              onChange={(e) => {
                setProductDetail({ ...productDetail!, name: e.target.value });
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label={"Quantity"}
              fullWidth
              type="number"
              value={productDetail?.quantity}
              onChange={(e) => {
                setProductDetail({
                  ...productDetail!,
                  quantity: Number(e.target.value),
                });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={4} md={12}>
        <FormHelperText>A small description about the project</FormHelperText>
        <TextField
          label={"product description"}
          fullWidth
          multiline
          value={productDetail?.description}
          onChange={(e) => {
            setProductDetail({
              ...productDetail!,
              description: e.target.value,
            });
          }}
        />
      </Grid>
      <Box display={"flex"} alignItems={"center"}>
        <Typography>Product Images</Typography>
      </Box>
      <Button
        sx={{ marginLeft: "auto", display: "block" }}
        variant={"contained"}
        onClick={addNewProduct}
      >
        Add product
      </Button>
    </Paper>
  );
};
