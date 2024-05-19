import { ProductCategory } from "@/db/queries/products";
import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import NextImage from "next/image";

interface ProductListByCategoryProps {
  fetchData: () => Promise<ProductCategory[]>;
}

export default async function ProductListByCategory({
  fetchData,
}: ProductListByCategoryProps) {
  const productsByCategory = await fetchData();

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-5">
      {productsByCategory.map((product) => (
        <Card key={product.id} className="flex justify-center items-center">
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
      ))}
    </div>
  );
}