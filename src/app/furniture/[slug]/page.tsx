import ProductListByCategory from "@/components/product/product-list-by-category";
import { fetchProductByCategory } from "@/db/queries/products";

interface CategoryShowPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryShowPage({ params }: CategoryShowPageProps) {
  const { slug } = params;

  return (
    <div className="p-4 mt-12 ml-10">
      <ProductListByCategory fetchData={() => fetchProductByCategory(slug)} />
    </div>
  );
}
