// https://upayments-studycase-api.herokuapp.com/api/categories/

import { Endpoint } from "rest-hooks";
import { Categories } from "../models/Product";
import { UPAYMENTS_API_KEY, UPAYMENTS_URL } from "../util/constants";

const fetchProductCategories = (): Promise<Categories> =>
  fetch(`${UPAYMENTS_URL}/categories`, {
    headers: {
      Authorization: `Bearer ${UPAYMENTS_API_KEY}`,
    },
  }).then((response) => response.json());

export const getProductCategories = new Endpoint(fetchProductCategories);
