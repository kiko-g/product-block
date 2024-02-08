import React from "react";
import clsx from "clsx";
import { BoltIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Product } from "./product";
import type { ProductType, SectionsWithProducts } from "@/types";

export function FunShowcase() {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        className={clsx(
          "flex items-center justify-center gap-2 rounded border px-2.5 py-2 text-sm text-white transition hover:scale-110 hover:shadow-lg",
          "lg:border-sky-700 lg:bg-sky-700/70 lg:hover:bg-sky-700",
          "md:border-sky-600 md:bg-sky-600/70 md:hover:bg-sky-600",
          "sm:border-sky-500 sm:bg-sky-500/70 sm:hover:bg-sky-500",
          "border-sky-400 bg-sky-400/70 hover:bg-sky-400",
        )}
      >
        <PlusCircleIcon className="h-5 w-5" />
        <span className="hidden md:inline-flex">Add</span>
      </button>

      <button className="flex items-center justify-center gap-2 rounded border border-rose-700 bg-gradient-to-br from-rose-700 to-rose-500 px-2.5 py-2 text-sm text-white transition-all hover:from-rose-500 hover:to-rose-700">
        <MinusCircleIcon className="h-5 w-5" />
        <span className="hidden md:inline-flex">Remove</span>
      </button>

      <button className="flex items-center justify-center gap-2 rounded border border-primary-700 border-transparent bg-primary-600/80 px-2.5 py-2 text-sm text-white transition-all hover:bg-primary-600">
        <BoltIcon className="h-5 w-5" />
        <span className="hidden md:inline-flex">Upgrade</span>
      </button>
    </div>
  );
}

const products: ProductType[] = [
  {
    info: {
      title: "Product A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi.",
      brand: "Brand A",
      price: 10,
      ratingAvg: 4.93,
      ratingCount: 1893,
      colors: ["#bbb4a8", "#444b5b", "#ffffff", "#4d4e50"],
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
      new: true,
      soldOut: false,
      hot: false,
      sale: {
        active: true,
        percent: 20,
      },
    },
  },
  {
    info: {
      title: "Product B",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      brand: "Brand B",
      price: 50,
      ratingAvg: 4.83,
      ratingCount: 211,
      colors: ["#ee3333", "#44dd88", "#1144aa"],
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
      new: false,
      soldOut: true,
      hot: false,
      sale: {
        active: false,
        percent: 35,
      },
    },
  },
  {
    info: {
      title: "Product C",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      brand: "Brand C",
      price: 25,
      ratingAvg: 4.45,
      ratingCount: 14,
      colors: ["#995522", "#559292", "#ffffff"],
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708",
      new: false,
      soldOut: false,
      hot: false,
      sale: {
        active: false,
        percent: 50,
      },
    },
  },
  {
    info: {
      title: "Product D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae. E pluribus unum.",
      brand: "Brand C",
      price: 340,
      ratingAvg: 3.89,
      ratingCount: 2392,
      colors: ["#7722dd", "#dd4499", "#ff8866"],
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143",
      new: false,
      soldOut: false,
      hot: false,
      sale: {
        active: true,
        percent: 80,
      },
    },
  },
];

export function ProductCards() {
  return (
    <div className="flex flex-col space-y-4 p-12">
      <div className="flex flex-1 flex-col flex-wrap items-center justify-start gap-5 self-stretch md:flex-row">
        {products.map((product: ProductType, productIdx: number) => (
          <Product key={`product-${productIdx}`} styleSuffix="elegant" product={product} />
        ))}
      </div>
    </div>
  );
}
