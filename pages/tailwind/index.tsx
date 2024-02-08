import React, { useState } from "react";
import clsx from "clsx";
import { Layout } from "@/components/layout";
import { FunShowcase, ProductCards } from "@/components/tailwind";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TailwindDemo() {
  const sizes: Record<string, string> = {
    xs: "350px",
    sm: "576px",
    md: "768px",
    lg: "1024px",
    full: "100%",
  };

  const showcases: Record<string, any> = {
    fun: FunShowcase,
    cards: ProductCards,
  };

  const [choice, setChoice] = useState("fun");
  const [size, setSelectedSize] = useState<keyof typeof sizes>("full");

  return (
    <Layout title="Tailwind">
      <div className="flex h-full w-full flex-col gap-y-3 p-4 md:p-8">
        <div className="flex items-center justify-between rounded border bg-white p-3 dark:border-transparent dark:bg-black/30">
          <div>
            <Select onValueChange={(e) => setChoice(e)} defaultValue={choice}>
              <SelectTrigger className="w-[180px] bg-white shadow-none hover:bg-slate-50 dark:bg-white/5 dark:hover:opacity-80">
                <SelectValue placeholder="Select a showcase" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="capitalize">Showcases</SelectLabel>
                  <div className="flex flex-col gap-y-1">
                    {Object.keys(showcases).map((item) => (
                      <SelectItem
                        key={item}
                        value={item}
                        className={clsx(
                          "cursor-pointer text-sm text-gray-500 transition dark:text-gray-400",
                          item === choice
                            ? "bg-cyan-500/10 text-cyan-900 dark:text-cyan-600"
                            : "hover:text-cyan-500/40 dark:hover:text-gray-700",
                        )}
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </div>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            {Object.keys(sizes).map((item) => (
              <button
                key={item}
                onClick={() => setSelectedSize(item)}
                className={clsx(
                  "rounded px-1.5 py-1 text-xs text-gray-500 transition md:px-2 md:py-1",
                  item === size
                    ? "bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-cyan-500/40 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col flex-wrap items-center justify-center gap-3 rounded border bg-white transition-all dark:border-transparent dark:bg-black/30">
          {React.createElement(showcases[choice])}
        </div>
      </div>
    </Layout>
  );
}
