import React, { useState } from "react";
import clsx from "clsx";
import type { BadgePosition, Color, Size, SizeAndNull } from "@/types";

import { Select } from "@/components/inputs";
import { Layout } from "@/components/layout";

export default function Home() {
  const [color, setColor] = useState<Color>("Black");
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true);
  const [fontSize, setFontSize] = React.useState<Size>("md");
  const [borderRadius, setBorderRadius] = React.useState<SizeAndNull>("md");
  const [badgePosition, setBadgePosition] = React.useState<BadgePosition>("top-left");
  const [hoverEffect, setHoverEffect] = React.useState(true);

  return (
    <Layout title="Editor">
      <div className="grid w-full flex-1 grid-cols-1 divide-x divide-gray-200 self-stretch lg:grid-cols-2">
        <article className="mt-4 flex h-full w-full items-center justify-center p-4 lg:mt-0 lg:p-4">
          <a
            href="#"
            className={clsx(
              "product-block",
              hoverEffect && "hover:shadow-xl",
              borderRadius === null && "rounded-none",
              borderRadius === "xs" && "rounded-sm",
              borderRadius === "sm" && "rounded",
              borderRadius === "md" && "rounded-md",
              borderRadius === "lg" && "rounded-lg",
              borderRadius === "xl" && "rounded-xl",
            )}
          >
            <div className="image-wrapper">
              <div className={clsx("floating", badgePosition)}>
                <span className="badge new">New</span>
                <span className="badge sale">-20%</span>
              </div>

              <img
                alt="Product A1"
                src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800"
              />
            </div>

            <div className="caption group">
              <div className="caption-headline">
                <span className="brand">Brand</span>
              </div>

              <h3 className="name">Product A</h3>

              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>

              <div className="price-and-ratings">
                <span className="price">9.99$</span>
                <div className="ratings">
                  <svg
                    className="star"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="rating-float">4.95</span>
                  <a className="rating-count">(73)</a>
                </div>
              </div>

              <div className="colors">
                {["Gray", "Brown", "Blue", "Black"].map((x, i) => (
                  <button
                    key={`color-${x}-${i}`}
                    onClick={() => setColor(x as Color)}
                    className={clsx(
                      "color",
                      color === x ? "active" : "",
                      x === "Black" ? "border border-black bg-black/70" : "",
                      x === "Blue" ? "border border-blue-400 bg-blue-400/70" : "",
                      x === "Brown" ? "border border-[#b87b58] bg-[#b87b58]/70" : "",
                      x === "Gray" ? "border border-gray-500 bg-gray-500/70" : "",
                    )}
                  ></button>
                ))}
              </div>

              <div className="buttons">
                <button className="add-to-cart">
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
          </a>
        </article>

        <aside className="h-full w-full border-gray-300 p-4 dark:border-gray-700 lg:p-4">
          {/* Options */}
          <div className="mx-auto flex h-full w-full flex-1 flex-col items-center justify-center lg:w-96">
            <Select
              label="Font Size"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value as Size)}
              options={["xs", "sm", "md", "lg", "xl"]}
            />
          </div>
        </aside>
      </div>
    </Layout>
  );
}
