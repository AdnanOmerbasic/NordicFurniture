import ProductShow from "@/components/product/product-show";

interface ProductShowPageProps {
  params: {
    productName: string;
    productId: string;
  };
}

export default function ProductShowPage({ params }: ProductShowPageProps) {
  const { productName, productId } = params;
  const decodeName = decodeURIComponent(productName);

  return (
    <div>
      <ProductShow productName={decodeName} productId={productId} />
    </div>
  );
}
