import { Input, Button, Textarea } from "@nextui-org/react";
import Link from "next/link";

export default function AddProductForm() {
  return (
    <div>
      <h1 className="flex justify-center items-center mt-12 font-bold text-2xl">
        Add Furniture
      </h1>
      <Link href={`/dashboard/products`}>Go back {`<`}</Link>
      <div className="flex justify-center items-center mt-5">
        <form className="flex w-96 ml-5 flex-col gap-10 ">
          <Input type="name" label="Name" />
          <Textarea type="description" label="Description" />
          <Input type="price" label="Price" />
          <Input type="imgUrl" label="Image Url" />
          <Button color="primary">Save</Button>
        </form>
      </div>
    </div>
  );
}
