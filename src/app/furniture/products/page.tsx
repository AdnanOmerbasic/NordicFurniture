import AllProductsList from "@/components/product/all-products-list";
import { fetchAllProducts } from "@/db/queries/products";

export default function allProducts() {
  return (
    <div className="p-4 mt-12 ml-10">
      <AllProductsList fetchData={fetchAllProducts} />
    </div>
  );
}
