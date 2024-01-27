import React from "react";
import clsx from "clsx";
import { Layout } from "@/components/layout";

export default function TailwindDemo() {
  const sizes: Record<string, string> = {
    xs: "350px",
    sm: "576px",
    md: "768px",
    lg: "1024px",
    full: "100%",
  };

  const [selectedSize, setSelectedSize] = React.useState<keyof typeof sizes>("full");

  return (
    <Layout title="Tailwind">
      <div className="flex h-full w-full flex-col gap-y-3 p-4 md:p-8">
        <div className="flex items-center justify-between rounded border bg-white p-3 dark:border-transparent dark:bg-black/30">
          <div></div>
          <div className="flex items-center gap-2">
            {Object.keys(sizes).map((item) => (
              <button
                key={item}
                onClick={() => setSelectedSize(item)}
                className={clsx(
                  "rounded px-2 py-1 text-xs text-gray-500 transition dark:bg-gray-800 dark:text-gray-400",
                  item === selectedSize
                    ? "bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white"
                    : "hover:bg-cyan-500/40 dark:hover:bg-gray-700",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div
          className="flex h-full flex-col rounded border bg-white transition-all dark:border-transparent dark:bg-black/30"
          style={{
            width: sizes[selectedSize],
          }}
        ></div>
      </div>
    </Layout>
  );
}
