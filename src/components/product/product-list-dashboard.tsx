import type { Product } from "@prisma/client";
import Link from "next/link";

interface ProductDashboardListProps {
  fetchData: () => Promise<Product[]>;
}

export default async function ProductDashboardList({
  fetchData,
}: ProductDashboardListProps) {
  const allProductsForDashboard = await fetchData();
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Handle Product</th>
        </tr>
      </thead>
      <tbody>
        {allProductsForDashboard.map((product, i) => (
          <tr key={i}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.categorySlug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
