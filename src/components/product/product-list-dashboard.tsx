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
    <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden mt-10">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
          >
            Category
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {allProductsForDashboard.map((product, i) => (
          <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {product.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {product.price}$
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {product.categorySlug}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
