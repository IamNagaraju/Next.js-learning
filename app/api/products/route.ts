import { products } from "@/lib/products";

export async function GET() {
  return Response.json({
    success: true,
    data: products,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Received:", body);

  return Response.json(
    {
      success: true,
      message: "Product received",
      data: body,
    },
    { status: 201 }
  );
}