import React from "react";
import { Layout } from "@/components/layout";
import { Product, ProductSoldOut } from "@/components/product";

export default function ProductBlockPage() {
  return (
    <Layout title="Demo">
      <div className="flex flex-1 items-center justify-center gap-8">
        <Product />
        <ProductSoldOut />
      </div>
    </Layout>
  );
}
