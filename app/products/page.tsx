import { getProducts } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>₹{product.price}</p>

          <AddToCartButton
            productId={product.id}
            productName={product.name}
            price={product.price}
          />
        </div>
      ))}
    </main>
  );
}