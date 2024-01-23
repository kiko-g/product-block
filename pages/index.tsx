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
    name: "Basic",
    products: [
      {
        info: {
          title: "Product A",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit quia aliquam vitae mattis nisi.",
          price: 10,
          ratingAvg: 4.93,
          ratingCount: 1893,
          colors: ["#30be9a", "#ff8822", "#2277dd", "#001122"],
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
          title: "Product C",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 25,
          ratingAvg: 4.45,
          ratingCount: 14,
          colors: ["#995522", "#559292", "#ffffff"],
          image:
            "https://images.unsplash.com/photo-1536992266094-82847e1fd431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwMzUzODk&ixlib=rb-4.0.3&q=80&w=800",
          new: false,
          soldOut: false,
          hot: true,
          sale: {
            active: true,
            percent: 50,
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
        <div className="mx-auto flex w-full max-w-full flex-1 flex-col items-start space-y-4 self-stretch p-6 md:p-8">
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
          <div className="flex flex-1 flex-col flex-wrap items-center justify-start gap-6 self-stretch md:flex-row">
            {section.products.map((product, productIdx) => (
              <Product key={`product-${productIdx}`} product={product} />
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
