import ProductDashboardList from "@/components/product/product-list-dashboard";
import { fetchAllProducts } from "@/db/queries/products";

export default function ProductDashboardListShow() {
  return (
    <>
      <ProductDashboardList fetchData={fetchAllProducts} />
    </>
  );
}
