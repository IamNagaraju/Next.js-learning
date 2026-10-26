import {
  unstable_cacheLife as cacheLife,
  cacheTag,
} from "next/cache";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17",
    price: 79999,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 99999,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 24999,
  },
];

export async function getProducts(): Promise<Product[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("products");

  console.log("getProducts() executed");

  return products;
}