"use client";

import { Input, Button, Textarea, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import Link from "next/link";
import * as actions from "@/actions";

interface AddProductFormProps {
  slug: string;
}

export default function AddProductForm({ slug }: AddProductFormProps) {
  const categorySlugs = [
    { slug: "living-room" },
    { slug: "bathroom" },
    { slug: "outdoor" },
    { slug: "bedroom" },
  ];
  const [formState, action] = useFormState(
    actions.addProduct.bind(null, slug),
    {
      errors: {},
    }
  );
  return (
    <div>
      <h1 className="flex justify-center items-center mt-12 font-bold text-2xl">
        Add Furniture
      </h1>
      <div className="flex justify-center items-center mt-5">
        <form action={action} className="flex w-96 ml-5 flex-col gap-10 ">
          <Input
            isInvalid={!!formState.errors.name}
            errorMessage={formState.errors.name?.join("and")}
            type="text"
            label="Name"
            name="name"
          />
          <Textarea
            isInvalid={!!formState.errors.description}
            errorMessage={formState.errors.description?.join(". ")}
            label="Description"
            type="text"
            name="description"
          />
          <Input
            isInvalid={!!formState.errors.price}
            errorMessage={formState.errors.price?.join(". ")}
            type="number"
            label="Price"
            name="price"
          />
          <Input
            isInvalid={!!formState.errors.imagePath}
            errorMessage={formState.errors.imagePath?.join(". ")}
            type="url"
            name="imagePath"
            label="Image Url"
          />
          <Select
            isInvalid={!!formState.errors.categorySlug}
            errorMessage={formState.errors.categorySlug?.join(". ")}
            label="Category"
            name="categorySlug"
          >
            {categorySlugs.map((category) => (
              <SelectItem key={category.slug} value={category.slug}>
                {category.slug}
              </SelectItem>
            ))}
          </Select>
          <Button type="submit" color="primary">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
