import type { Product } from "@prisma/client";
import { db } from "@/db";

export type ProductCategory = Product & {
  categorySlug: string;
};

export type AllProducts = Product & {};

export function fetchProductByCategory(
  slug: string
): Promise<ProductCategory[]> {
  return db.product.findMany({
    where: { categorySlug: slug },
  });
}
