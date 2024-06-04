import { db } from "@/db";
import { Image } from "@nextui-org/react";
import { notFound } from "next/navigation";

interface ProductShowProps {
  productName: string;
  productId: string;
}

export default async function ProductShow({
  productName,
  productId,
}: ProductShowProps) {
  const product = await db.product.findFirst({
    where: { name: productName, id: productId },
  });

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-start items-center">
        <h1>{product.name}</h1>
        <Image
          alt={product.name}
          src={product.imagePath}
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-end items-center">{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
}
