import axios from "axios";
import { ResponseModel } from "../models/ResponseModel";

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
