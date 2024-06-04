"use server";

import type { Product } from "@prisma/client";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const addProductSchema = z.object({
  name: z
    .string()
    .min(4)
    .regex(/^[a-zA-Z0-9\- ]+$/, { message: "Can't contain any symbols" }),

  description: z
    .string()
    .min(20)
    .regex(/^[a-zA-Z0-9\- ,. ]+$/, { message: "Can't contain any symbols" }),
  price: z.number().int().positive(),

  imagePath: z.string().url(),
  categorySlug: z.string(),
});

interface AddProductFormState {
  errors: {
    name?: string[];
    description?: string[];
    price?: string[];
    imagePath?: string[];
    categorySlug?: string[];
    _form?: string[];
  };
}

export async function addProduct(
  slug: string,
  formState: AddProductFormState,
  formData: FormData
): Promise<AddProductFormState> {
  const validation = addProductSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    imagePath: formData.get("imagePath"),
    categorySlug: formData.get("categorySlug"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  let product: Product;
  try {
    product = await db.product.create({
      data: {
        name: validation.data.name,
        description: validation.data.description,
        price: validation.data.price,
        imagePath: validation.data.imagePath,
        categorySlug: validation.data.categorySlug,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Could not create the product"],
        },
      };
    }
  }

  revalidatePath("/dashboard/products");
  revalidatePath(`/furniture/${slug}/`);
  redirect("/dashboard/products");
}
