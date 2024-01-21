import React, { useState } from "react";
import clsx from "clsx";
import type { ProductType } from "@/types";
import { productBlockCssString, productBlockHtmlString } from "@/utils";

import { Tab } from "@headlessui/react";
import { Layout } from "@/components/layout";
import { Product } from "@/components/product";
import { CodeShowcase } from "@/components/CodeShowcase";

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
        <div className="mx-auto flex w-full max-w-full flex-1 flex-col items-start space-y-4 self-stretch p-6 lg:p-8">
          <Tab.List className="flex w-full items-center justify-start gap-4">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  clsx(
                    "rounded px-3 py-2 text-sm font-medium transition",
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

          <Tab.Panels>
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
  const products: ProductType[] = [
    {
      info: {
        title: "Product A",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 100,
        ratingAvg: 4.78,
        ratingCount: 839,
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
        image:
          "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800",
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
        image:
          "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800",
        new: false,
        soldOut: false,
        hot: true,
        sale: {
          active: true,
          percent: 50,
        },
      },
    },
    {
      info: {
        title: "Product D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 40,
        ratingAvg: 4.81,
        ratingCount: 1344,
        image:
          "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDU1MTQxNjk&ixlib=rb-4.0.3&q=80&w=800",
        new: false,
        soldOut: false,
        hot: false,
        sale: {
          active: false,
          percent: 50,
        },
      },
    },
  ];
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:flex-row">
      {products.map((product, productIdx) => (
        <Product key={`product-${productIdx}`} product={product} />
      ))}
    </div>
  );
}

function CodeTab() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <CodeShowcase language="html" code={productBlockHtmlString} />
      <CodeShowcase language="css" code={productBlockCssString} />
    </div>
  );
}
