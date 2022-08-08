import { Endpoint } from "rest-hooks";
import { Product, Products } from "../models/Product";
import { UPAYMENTS_API_KEY, UPAYMENTS_URL } from "../util/constants";

export const fetchProducts = (): Promise<Products> =>
  fetch(`${UPAYMENTS_URL}/products`, {
    headers: {
      Authorization: `Bearer ${UPAYMENTS_API_KEY}`,
    },
  }).then((response) => response.json());

export const getProducts = new Endpoint(fetchProducts, {
  pollFrequency: 1000,
});
