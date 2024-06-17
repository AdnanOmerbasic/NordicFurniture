import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Admin Dashboard
        </h1>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Dashboard Navigation
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <Button className="bg-blue-500">
              <Link href="/dashboard/products" className="text-white">
                Show All Products
              </Link>
            </Button>
            <Button className="bg-green-500">
              <Link
                href="/dashboard/products/add-product"
                className="text-white"
              >
                Add Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
