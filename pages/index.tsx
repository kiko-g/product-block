import React from "react";
import { Layout } from "@/components/layout";
import { Product } from "@/components/product";

export default function ProductBlockPage() {
  return (
    <Layout title="Demo">
      <div className="flex flex-1 items-center justify-center gap-8">
        <Product
          status={{
            new: true,
            soldOut: false,
            hot: false,
            sale: {
              active: true,
              percent: 20,
            },
          }}
        />

        <Product
          status={{
            new: false,
            soldOut: true,
            hot: false,
            sale: {
              active: false,
              percent: 50,
            },
          }}
        />

        <Product
          status={{
            new: false,
            soldOut: false,
            hot: true,
            sale: {
              active: true,
              percent: 50,
            },
          }}
        />
      </div>
    </Layout>
  );
}
