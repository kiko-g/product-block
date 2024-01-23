import React, { useState } from "react";
import clsx from "clsx";
import type { ColorHex, ProductType } from "@/types";

export function Product({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0]);

  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100;

  return (
    <div className="product-block">
      <a className="image-wrapper" href="#link-from-image-wrapper">
        <div className="floating top-left">
          {product.info.new && <span className="badge new">New</span>}
          {product.info.sale.active && <span className="badge sale">-{product.info.sale.percent}%</span>}
          {product.info.soldOut && <span className="badge sold-out">Sold Out</span>}
          {product.info.hot && <span className="badge hot">Hot</span>}
        </div>

        <img alt="Product A1" className={clsx(product.info.soldOut ? "sold-out" : "")} src={product.info.image} />
      </a>

      <div className="caption">
        <a href="#link-from-caption">
          <div className="caption-headline">
            <span className="brand">{product.info.brand}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>

          <h3 className="title">{product.info.title}</h3>
          <p className="description">{product.info.description}</p>
          <div className="price-and-ratings">
            <div className="ratings">
              <div className="rating">
                <svg
                  className="star"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="rating-float">{product.info.ratingAvg.toFixed(2)}</span>
                <span className="rating-count">({product.info.ratingCount})</span>
              </div>
            </div>

            <div className="prices">
              <span className="price old">{product.info.price.toFixed(2)}$</span>
              {product.info.sale.active && <span className="price sale">{priceWithDiscount.toFixed(2)}$</span>}
            </div>
          </div>
        </a>

        <div className="product-footer">
          <div className="colors">
            {product.info.colors.map((x, i) => (
              <button
                key={`color-${x}-${i}`}
                onClick={() => setColor(x)}
                style={{ backgroundColor: `${x}aa`, borderColor: x === "#ffffff" ? "#999" : x }}
                className={clsx("color", color === x ? "active" : "")}
              ></button>
            ))}
          </div>

          <div className="buttons">
            <button className="add-to-cart" disabled={product.info.soldOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span>Add to cart</span>
            </button>

            <button className="details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomizedProduct({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0]);

  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100;

  return (
    <div className="flex w-full flex-col self-stretch overflow-hidden rounded border-0 border-gray-300 bg-[#fbfdfd] transition-all hover:bg-[#fefefe] hover:shadow-lg dark:border-gray-700 dark:bg-black/30 md:w-64">
      <a className="relative overflow-hidden" href="#link-from-image-wrapper">
        <div className="absolute left-0 top-0 m-2 flex flex-col gap-y-1.5">
          {product.info.new && <span className="badge new">New</span>}
          {product.info.sale.active && <span className="badge sale">-{product.info.sale.percent}%</span>}
          {product.info.soldOut && <span className="badge sold-out">Sold Out</span>}
          {product.info.hot && <span className="badge hot">Hot</span>}
        </div>

        <img
          alt="Product A1"
          className={clsx("block w-full transition-all hover:scale-110", product.info.soldOut ? "sold-out" : "")}
          src={product.info.image}
        />
      </a>

      <div className="group relative flex flex-1 flex-col justify-between">
        <a href="#link-from-caption" className="px-3 pt-3">
          <div className="flex items-center justify-start gap-x-1.5">
            <span className="inline-flex text-base font-medium uppercase tracking-tighter text-gray-500 group-hover:opacity-100 dark:text-gray-400">
              {product.info.brand}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 -rotate-45 stroke-gray-500 opacity-0 transition-opacity duration-200 ease-in-out dark:stroke-gray-400"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>

          <h3 className="w-min whitespace-nowrap text-xl font-bold hover:underline">{product.info.title}</h3>
          <p className="h-16 overflow-clip text-sm tracking-tight">{product.info.description}</p>
          <div className="mb-5 mt-2 flex w-full flex-col justify-start gap-2">
            <div className="flex flex-col items-start text-xs">
              <div className="flex items-center gap-x-1 tracking-tight hover:underline">
                <svg
                  className="mr-[1px] h-3 w-3 fill-amber-300 stroke-amber-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">{product.info.ratingAvg.toFixed(2)}</span>
                <span className="font-semibold text-gray-900 dark:text-white">({product.info.ratingCount})</span>
              </div>
            </div>

            <div className="flex flex-col gap-y-1.5 text-base">
              <span
                className={clsx(
                  "w-min leading-none tracking-tight",
                  product.info.sale.active ? "font-semibold" : "font-medium line-through",
                )}
              >
                {product.info.price.toFixed(2)}$
              </span>
              {product.info.sale.active && (
                <span className="w-min text-lg font-semibold tracking-tight text-rose-500 hover:underline">
                  {priceWithDiscount.toFixed(2)}$
                </span>
              )}
            </div>
          </div>
        </a>

        <div className="px-3 pb-4">
          <div className="mt-3 flex w-min items-center justify-between gap-x-2">
            {product.info.colors.map((x, i) => (
              <button
                key={`color-${x}-${i}`}
                onClick={() => setColor(x)}
                style={{ backgroundColor: `${x}aa`, borderColor: x === "#ffffff" ? "#999" : x }}
                className={clsx(
                  "h-6 w-6 rounded-md border-2 transition-all duration-200 ease-in-out hover:opacity-80",
                  color === x
                    ? "ring-2 ring-gray-400 ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-gray-800"
                    : "",
                )}
              ></button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-x-2">
            <button
              className="flex flex-1 items-center justify-center gap-x-1 rounded bg-emerald-600 px-3 py-2 text-sm font-medium tracking-tighter text-white transition-all duration-200 ease-in-out enabled:hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={product.info.soldOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span>Add to cart</span>
            </button>

            <button className="flex items-center justify-center gap-x-1 rounded bg-gray-500 px-3 py-2 text-sm font-medium tracking-tighter text-white transition-all duration-200 ease-in-out enabled:hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white/20 enabled:hover:dark:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
