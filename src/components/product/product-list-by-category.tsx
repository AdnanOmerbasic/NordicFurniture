import type { Product } from "@prisma/client";
import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";

interface ProductListByCategoryProps {
  fetchData: () => Promise<Product[]>;
}

export default async function ProductListByCategory({
  fetchData,
}: ProductListByCategoryProps) {
  const productsByCategory = await fetchData();

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-5">
      {productsByCategory.map((product) => (
        <Link
          href={`/furniture/${product.categorySlug}/${encodeURIComponent(
            product.name
          )}/${product.id}`}
          key={product.id}
        >
          <Card className="flex justify-center items-center">
            <CardBody className="text-xl font-bold flex justify-center items-center">
              <Image
                alt={product.name}
                src={product.imagePath}
                width={300}
                radius="lg"
                height={300}
                shadow="md"
                className="flex justify-center items-center"
              />
            </CardBody>
            <CardFooter className=" flex justify-between">
              <b>{product.name}</b>
              <p>{product.price}$</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
