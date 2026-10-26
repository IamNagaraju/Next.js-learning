import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("products", "max");

  return Response.json({
    success: true,
    message: "Products cache invalidated",
  });
}