import React, { useState } from "react";
import clsx from "clsx";
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
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 lg:flex-row">
      <Product
        status={{
          new: true,
          soldOut: false,
          hot: false,
          sale: {
            active: true,
            percent: 20,
          },
        }}
      />

      <Product
        status={{
          new: false,
          soldOut: true,
          hot: false,
          sale: {
            active: false,
            percent: 50,
          },
        }}
      />

      <Product
        status={{
          new: false,
          soldOut: false,
          hot: true,
          sale: {
            active: true,
            percent: 50,
          },
        }}
      />
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
