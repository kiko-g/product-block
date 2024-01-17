import clsx from "clsx";
import React, { useState } from "react";

type Color = "Gray" | "Brown" | "Blue" | "Black";

export function Product() {
  const colors: Color[] = ["Gray", "Brown", "Blue", "Black"];
  const [color, setColor] = useState<Color>("Black");

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
          className=""
          alt="Product A1"
          src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800"
        />
      </div>

      <div className="caption group">
        <div className="caption-headline">
          <span className="brand">Brand</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="icon opacity-15 group-hover:opacity-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>

        <h3 className="name">Product A</h3>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>

        <p className="price">9.99$</p>

        <div className="colors">
          {colors.map((x, i) => (
            <button
              key={`color-${x}-${i}`}
              onClick={() => setColor(x)}
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
  );
}
