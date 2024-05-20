import { Image, Button, Divider } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex">
      <div className="flex justify-start items-center opacity-85 ">
        <Image
          as={NextImage}
          isBlurred
          src="/door.jpg"
          alt="Welcome image"
          width={1000}
          height={1000}
          className="m-5 object-cover"
          sizes="500"
          radius="full"
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-48 pl-80">
        <h2 className="font-bold text-2xl">Furniture For Your Home</h2>
        <br></br>
        <h2 className="font-bold text-2xl">Premium Quality</h2>
        <Divider></Divider>
        <Button className="bg-black text-white w-32 mt-10">
          <Link href="/furniture/products">Collection</Link>
        </Button>
      </div>
    </section>
  );
}
