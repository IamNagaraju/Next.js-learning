"use client";

import { useState } from "react";

type Props = {
  productId: number;
  productName: string;
  price: number;
};

export default function AddToCartButton({
  productId,
  productName,
  price,
}: Props) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    console.log("Product ID:", productId);
    console.log("Product:", productName);
    console.log("Price:", price);

    setAdded(true);
  }

  return (
    <button onClick={handleAddToCart}>
      {added ? "Added to Cart" : `Add ${productName}`}
    </button>
  );
}