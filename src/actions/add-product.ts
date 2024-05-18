"use server";

import { z } from "zod";

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
});

export async function addProduct(formData: FormData) {
  const validate = addProductSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
  });
}
