type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Product</h1>
      <p>Product ID: {id}</p>
    </main>
  );
}