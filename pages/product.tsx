import React from "react"
import { Layout } from "@/components/layout"
import { Product } from "@/components/product"

export default function ProductBlockPage() {
  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center">
        <Product />
      </div>
    </Layout>
  )
}
