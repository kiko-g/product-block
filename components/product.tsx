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

            <button className="details">
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
