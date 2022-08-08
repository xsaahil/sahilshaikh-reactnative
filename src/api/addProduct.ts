import { Endpoint } from "rest-hooks";
import { Product, Products } from "../models/Product";
import { ProductInput } from "../screens/AddProductScreen";
import { UPAYMENTS_URL, UPAYMENTS_API_KEY } from "../util/constants";

export const addProduct = (body: ProductInput): Promise<Product> =>
  fetch(`${UPAYMENTS_URL}/products`, {
    method: "POST",
    body: JSON.stringify({
      ...body,
      developerEmail: "saahiil.dev@gmail.com",
    }),
    headers: {
      Authorization: `Bearer ${UPAYMENTS_API_KEY}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const useAddProduct = new Endpoint(addProduct, {
  sideEffect: true,
});
