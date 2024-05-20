import { db } from "@/db";
import type { Product } from "@prisma/client";

export function fetchProductByCategory(slug: string): Promise<Product[]> {
  return db.product.findMany({
    where: { categorySlug: slug },
  });
}

export function fetchAllProducts(): Promise<Product[]> {
  return db.product.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
}
