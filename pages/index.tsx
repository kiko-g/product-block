import React, { useState } from "react";
import clsx from "clsx";
import type { ProductType } from "@/types";
import { productBlockCssString, productBlockHtmlString } from "@/utils";

import { Tab } from "@headlessui/react";
import { Layout } from "@/components/layout";
import { Product } from "@/components/product";
import { CodeShowcase } from "@/components/CodeShowcase";

type SectionsWithProducts = {
  name: string;
  products: ProductType[];
};

const sections: SectionsWithProducts[] = [
  {
    // https://source.unsplash.com/random/800x800?clotes
    name: "Basic",
    products: [
      {
        info: {
          title: "Product A",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi.",
          brand: "Brand A",
          price: 10,
          ratingAvg: 4.93,
          ratingCount: 1893,
          colors: ["#30be9a", "#ff8822", "#2277dd", "#334455"],
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
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwMzUzNTc&ixlib=rb-4.0.3&q=80&w=800",
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
          title: "Product D",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          brand: "Brand C",
          price: 25,
          ratingAvg: 4.45,
          ratingCount: 14,
          colors: ["#995522", "#559292", "#ffffff"],
          image:
            "https://images.unsplash.com/photo-1536992266094-82847e1fd431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwMzUzODk&ixlib=rb-4.0.3&q=80&w=800",
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          brand: "Brand C",
          price: 25,
          ratingAvg: 4.45,
          ratingCount: 14,
          colors: ["#cc3300", "#226699", "#991100", "#55aa00"],
          image:
            "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwNTY5NDQ&ixlib=rb-4.0.3&q=80&w=800",
          new: false,
          soldOut: false,
          hot: false,
          sale: {
            active: true,
            percent: 80,
          },
        },
      },
    ],
  },
  {
    // apple.com
    name: "Elegant",
    products: [
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
    ],
  },
  {
    // https://source.unsplash.com/random/800x800?toys
    name: "Impact",
    products: [
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
            "https://images.unsplash.com/photo-1609741199984-45b1c92bb0dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8dG95c3x8fHx8fDE3MDYwNTc2OTk&ixlib=rb-4.0.3&q=80&w=800",
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
            "https://images.unsplash.com/photo-1531512721928-a2c9d1a3fb9f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8dG95c3x8fHx8fDE3MDYwNTc2OTU&ixlib=rb-4.0.3&q=80&w=800",
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
            "https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8dG95c3x8fHx8fDE3MDYwNTc2ODk&ixlib=rb-4.0.3&q=80&w=800",
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
          colors: ["#ee3333", "#33ee33", "#3333ee"],
          image:
            "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8dG95c3x8fHx8fDE3MDYwNTc3MDY&ixlib=rb-4.0.3&q=80&w=800",
          new: false,
          soldOut: false,
          hot: false,
          sale: {
            active: true,
            percent: 80,
          },
        },
      },
    ],
  },
];

export default function ProductBlockPage() {
  const tabs = [
    {
      name: "Cards",
      component: CardsTab,
    },
    {
      name: "Code",
      component: CodeTab,
    },
  ];

  return (
    <Layout title="Demo">
      <Tab.Group>
        <div className="mx-auto flex w-full max-w-full flex-1 flex-col items-start space-y-4 self-stretch p-4 md:p-6">
          <Tab.List className="flex w-full items-center justify-start gap-4 rounded bg-white p-4 dark:bg-white/5">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  clsx(
                    "rounded px-3 py-2 text-sm transition",
                    selected
                      ? "bg-slate-700 text-white dark:bg-white/10 dark:text-white"
                      : "hover:bg-slate-700/10 dark:hover:bg-white/5",
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="w-full rounded bg-white p-6 dark:bg-white/5">
            {tabs.map((tab) => (
              <Tab.Panel key={tab.name}>
                <tab.component />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </Layout>
  );
}

function CardsTab() {
  return (
    <div className="flex flex-col space-y-10">
      {sections.map((section, sectionIdx) => (
        <div key={section.name}>
          <h3 className="mb-3 text-4xl font-extrabold">
            {sectionIdx + 1}. {section.name}
          </h3>
          <div className="flex flex-1 flex-col flex-wrap items-center justify-start gap-5 self-stretch md:flex-row">
            {section.products.map((product, productIdx) => (
              <Product key={`product-${productIdx}`} styleSuffix={section.name.toLowerCase()} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CodeTab() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CodeShowcase language="html" code={productBlockHtmlString} />
      <CodeShowcase language="css" code={productBlockCssString} />
    </div>
  );
}
