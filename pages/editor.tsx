import React, { useState } from "react";
import type { Alignment, BadgePosition, Color, ProductType, Size } from "@/types";

import { Select } from "@/components/inputs";
import { Layout } from "@/components/layout";
import { Product } from "@/components/product";

export default function Home() {
  const [fontSize, setFontSize] = React.useState<Size>("md");
  const [captionAlignment, setCaptionAlignment] = React.useState<Alignment>("left");

  const [color, setColor] = useState<Color>("Black");
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true);
  const [borderRadius, setBorderRadius] = React.useState<Size | null>("md");
  const [badgePosition, setBadgePosition] = React.useState<BadgePosition>("top-left");
  const [hoverEffect, setHoverEffect] = React.useState(true);

  const defaultProduct: ProductType = {
    info: {
      title: "Product A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      ratingAvg: 0,
      ratingCount: 0,
      colors: ["#000000", "#ff0000"],
      image: "https://source.unsplash.com/random/800x800?gray",
      new: false,
      soldOut: false,
      hot: false,
      sale: {
        active: false,
        percent: 15,
      },
    },
    options: {},
  };

  const product: ProductType = {
    info: {
      title: "Product A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      ratingAvg: 4.78,
      ratingCount: 839,
      colors: ["#000000", "#00ff00"],
      image:
        "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800",
      new: true,
      soldOut: false,
      hot: false,
      sale: {
        active: true,
        percent: 20,
      },
    },
  };

  return (
    <Layout title="Editor">
      <div className="grid w-full flex-1 grid-cols-1 divide-x divide-gray-200 self-stretch lg:grid-cols-2">
        <article className="mt-4 flex h-full w-full items-center justify-center p-4 lg:mt-0 lg:p-16">
          <Product product={product} />
        </article>

        <aside className="flex h-full w-full items-center border-gray-300 p-4 dark:border-gray-700 lg:p-16">
          {/* Options */}
          <div className="mx-auto grid w-full grid-cols-3 gap-8">
            <Select
              label="Caption Alignment"
              value={captionAlignment}
              onChange={(e) => setCaptionAlignment(e.target.value as Alignment)}
              options={["left", "center", "right"]}
            />

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
