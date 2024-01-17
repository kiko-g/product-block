import React from "react"
import clsx from "clsx"
import { Layout } from "@/components/layout"

export default function ProductBlockPage() {
  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center">
        <Product />
      </div>
    </Layout>
  )
}

function Product() {
  return (
    <a href="#" className="product-block">
      <div className="image-wrapper">
        <div className="floating top-left">
          <span className="badge new">New</span>
        </div>

        <div className="floating bottom-right">
          <span className="badge sale">-20%</span>
        </div>

        <img
          alt="Product A1"
          src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800"
        />
      </div>

      <div className="caption">
        <div className="caption-headline">
          <span className="brand">Brand</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>

        <h3 className="name">Product A</h3>

        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

        <p className="price">9.99$</p>

        <div className="colors"></div>

        <div className="buttons"></div>
      </div>
    </a>
  )
}
