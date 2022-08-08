export type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
};
export type Products = {
  products: Product[];
};

export type Category = {
  _id: string;
  name: string;
};
export type Categories = {
  categories: Category[];
};
