import AddProductForm from "@/components/product/product-form";

interface AddProductProps {
  params: {
    slug: string;
  };
}

export default function AddProduct({ params }: AddProductProps) {
  const { slug } = params;
  return (
    <div>
      <AddProductForm slug={slug} />
    </div>
  );
}
