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
import { addProduct, updateProduct } from "../state/Slice";
import { Product } from "../models/ProductModel";
import { useDispatch } from "react-redux";
import {
  postNewProduct,
  requestUpdateProduct,
} from "../services/ProductServices";
import { ResponseModel } from "../models/ResponseModel";
import { useLocation, useNavigate } from "react-router-dom";

const initialProductDetails: Product = {
  sku: "",
  name: "",
  quantity: 0,
  price: 0,
  description: "",
  images: [],
};
export const ProductForm: React.FC = () => {
  const dispath = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const product: Product = state;
  const [productDetail, setProductDetail] = useState<Product>(
    product ? product : initialProductDetails
  );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (product) {
      dispath(updateProduct(productDetail!));
      await requestUpdateProduct(productDetail!).then(
        (response: ResponseModel) => {
          console.log(response);
        }
      );
    } else {
      dispath(addProduct(productDetail!));
      await postNewProduct(productDetail!).then((response: ResponseModel) => {
        console.log(response);
      });
    }
    navigate("/")
  }

  return (
    <Paper
      sx={{ marginLeft: 10, marginRight: 10, marginTop: 4, padding: 2 }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Grid>
        <Grid container spacing={2} mt={1}>
          <Grid item md={5} xs={12}>
            <TextField
              label={"SKU"}
              fullWidth
              value={productDetail?.sku}
              required
              onChange={(e) => {
                setProductDetail({ ...productDetail!, sku: e.target.value });
              }}
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <TextField
              label={"Price"}
              fullWidth
              value={productDetail?.price}
              required
              onChange={(e) => {
                setProductDetail({
                  ...productDetail!,
                  price: parseInt(e.target.value),
                });
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={1}>
          <Grid item md={6} xs={12}>
            <TextField
              label={"Name"}
              required
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
              required
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
      <Box display={"flex"} alignItems={"center"} mt={2}>
        <Typography>Product Images</Typography>
      </Box>
      <Button
        sx={{ marginLeft: "auto", display: "block" }}
        variant={"contained"}
        type="submit"
      >
        {product ? "Save changes" : "Add product"}
      </Button>
    </Paper>
  );
};
