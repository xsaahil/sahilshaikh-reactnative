import { Endpoint } from "rest-hooks";
import { Product, Products } from "../models/Product";
import { UPAYMENTS_API_KEY, UPAYMENTS_URL } from "../util/constants";

type Params = {
  id: string;
};

const fetchProductWithId = ({
  id,
}: Params): Promise<{
  product: Product;
}> =>
  fetch(`${UPAYMENTS_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${UPAYMENTS_API_KEY}`,
    },
  }).then((response) => response.json());

export const getProductWithId = new Endpoint(fetchProductWithId);
