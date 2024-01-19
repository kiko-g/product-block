import React, { useState } from "react";
import clsx from "clsx";
import type { BadgePosition, Color, Size, SizeAndNull } from "@/types";

import { Select } from "@/components/inputs";
import { Layout } from "@/components/layout";
import { Product } from "@/components/product";

export default function Home() {
  const [color, setColor] = useState<Color>("Black");
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true);
  const [fontSize, setFontSize] = React.useState<Size>("md");
  const [borderRadius, setBorderRadius] = React.useState<SizeAndNull>("md");
  const [badgePosition, setBadgePosition] = React.useState<BadgePosition>("top-left");
  const [hoverEffect, setHoverEffect] = React.useState(true);

  const productStatus = {
    new: true,
    soldOut: false,
    hot: true,
    sale: {
      active: true,
      percent: 30,
    },
  };

  return (
    <Layout title="Editor">
      <div className="grid w-full flex-1 grid-cols-1 divide-x divide-gray-200 self-stretch lg:grid-cols-2">
        <article className="mt-4 flex h-full w-full items-center justify-center p-4 lg:mt-0 lg:p-16">
          <Product status={productStatus} />
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
