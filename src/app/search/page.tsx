import { redirect } from "next/navigation";
import { fetchProductsBySearchTerms } from "@/db/queries/products";
import ProductListByCategory from "@/components/product/product-list-by-category";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <ProductListByCategory
        fetchData={() => fetchProductsBySearchTerms(term)}
      />
    </div>
  );
}
