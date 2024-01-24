import React, { useState } from "react";
import type { Alignment, BadgePosition, Color, ProductType, Size } from "@/types";

import { Select } from "@/components/inputs";
import { Layout } from "@/components/layout";
import { CustomizedProduct } from "@/components/product";

export default function Home() {
  const [fontSize, setFontSize] = React.useState<Size>("md");
  const [captionAlignment, setCaptionAlignment] = React.useState<Alignment>("left");

  const [color, setColor] = useState<Color>("Black");
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true);
  const [borderRadius, setBorderRadius] = React.useState<Size | null>("md");
  const [badgePosition, setBadgePosition] = React.useState<BadgePosition>("top-left");
  const [hoverEffect, setHoverEffect] = React.useState(true);

  const defaultPrd: ProductType = {
    info: {
      title: "Product Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      brand: "Brand",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget mattis aliquam, augue nisl ultricies nunc, nec tincidunt velit nunc quis eros.",
      brand: "Brand A",
      price: 1270,
      ratingAvg: 4.82,
      ratingCount: 3275,
      colors: ["#224455", "#33bb99", "#aa6677", "#4499ee"],
      image:
        "https://images.unsplash.com/photo-1536992266094-82847e1fd431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwMzUzODk&ixlib=rb-4.0.3&q=80&w=800",
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
      <div className="grid w-full flex-1 grid-cols-1 divide-x divide-gray-200 self-stretch md:grid-cols-2">
        <article className="mt-4 flex h-full w-full items-center justify-center p-4 md:mt-0 md:p-16">
          <CustomizedProduct product={product} />
        </article>

        <aside className="flex h-full w-full items-center border-gray-300 p-4 dark:border-gray-700 md:p-16">
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
