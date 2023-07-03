import axios from "axios";
import { ResponseModel } from "../models/ResponseModel";
import { Product } from "../models/ProductModel";

const apiURL = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
  return new Promise<any>((resolve, reject) => {
    axios
      .get(apiURL + "getAllProducts")
      .then((response) => {
        resolve(response.data as ResponseModel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postNewProduct = async (product: Product) => {
  return new Promise<any>((resolve, reject) => {
    axios
      .post(apiURL + "addProduct", product)
      .then((response) => {
        resolve(response.data as ResponseModel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestDeleteProduct = async (sku: string) => {
  return new Promise<any>((resolve, reject) => {
    axios
      .delete(apiURL + "deleteProduct", {
        params: {
          sku: sku,
        },
      })
      .then((response) => {
        resolve(response.data as ResponseModel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestUpdateProduct = async (product: Product) => {
  return new Promise<any>((resolve, reject) => {
    axios
      .put(apiURL + "updateProduct", product)
      .then((response) => {
        resolve(response.data as ResponseModel);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
