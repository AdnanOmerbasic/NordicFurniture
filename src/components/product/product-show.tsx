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
      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto my-8 max-w-7xl mt-10">
        <div className="flex items-start space-x-8">
          <div className="w-2/3 flex justify-center">
            <Image
              alt={product.name}
              src={product.imagePath}
              className="h-auto w-full max-w-lg object-cover rounded-lg"
            />
          </div>
          <div className="w-1/3 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 break-words">
              {product.description}
            </p>
            <div className="text-xl font-semibold text-green-500">
              {product.price}$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
