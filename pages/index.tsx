import React from "react";
import clsx from "clsx";
import { Select } from "@/components/inputs";
import { Layout } from "@/components/layout";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type SizeAndNull = null | "xs" | "sm" | "md" | "lg" | "xl";
type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export default function Home() {
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true);
  const [fontSize, setFontSize] = React.useState<Size>("md");
  const [borderRadius, setBorderRadius] = React.useState<SizeAndNull>("md");
  const [badgePosition, setBadgePosition] =
    React.useState<BadgePosition>("top-left");
  const [hoverEffect, setHoverEffect] = React.useState(true);

  return (
    <Layout>
      <div className="grid w-full flex-1 grid-cols-1 lg:grid-cols-2">
        <article className="mt-4 flex h-full w-full items-center justify-center p-4 lg:mt-0 lg:p-4">
          {/* Product Block */}
          <a
            href="#"
            className={clsx(
              "group relative w-96 overflow-hidden border border-gray-300 bg-slate-50 transition-all dark:border-gray-700 dark:bg-gray-800",
              hoverEffect && "hover:shadow-xl dark:shadow-gray-700",
              borderRadius === null && "rounded-none",
              borderRadius === "xs" && "rounded-sm",
              borderRadius === "sm" && "rounded",
              borderRadius === "md" && "rounded-md",
              borderRadius === "lg" && "rounded-lg",
              borderRadius === "xl" && "rounded-xl",
            )}
          >
            <div
              className={clsx(
                "absolute flex",
                badgePosition === "top-left" ? "left-0 top-0" : "",
                badgePosition === "top-right" ? "right-0 top-0" : "",
                badgePosition === "bottom-left" ? "bottom-0 left-0" : "",
                badgePosition === "bottom-right" ? "right-0 top-0" : "",
              )}
            >
              <span className="h-full w-full bg-rose-700 px-3 py-3 font-medium tracking-tighter text-white">
                20%
              </span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1704775934239-446464509646?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNTQyMDYwNA&ixlib=rb-4.0.3&q=80&w=800"
              alt="Product A1"
              className={clsx(
                "w-full",
                cycleImageOnHover ? "block group-hover:hidden" : "block",
              )}
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1700583712248-6c6c1625ec14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNTQyMDYxNg&ixlib=rb-4.0.3&q=80&w=800"
              alt="Product A2"
              className={clsx(
                "w-full",
                cycleImageOnHover ? "hidden group-hover:block" : "hidden",
              )}
            />

            <div className="relative mb-4 px-3 py-3">
              <div className="flex items-center justify-between gap-x-3">
                <span
                  className={clsx(
                    "inline-flex flex-1 font-medium uppercase tracking-tighter",
                    fontSize === "xs" && "text-[0.625rem]",
                    fontSize === "sm" && "text-xs",
                    fontSize === "md" && "text-sm",
                    fontSize === "lg" && "text-base",
                    fontSize === "xl" && "text-lg",
                  )}
                >
                  Brand
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>

              <h3
                className={clsx(
                  "font-bold",
                  fontSize === "xs" && "text-base",
                  fontSize === "sm" && "text-lg",
                  fontSize === "md" && "text-xl",
                  fontSize === "lg" && "text-2xl",
                  fontSize === "xl" && "text-3xl",
                )}
              >
                Product A
              </h3>
              <p
                className={clsx(
                  fontSize === "xs" && "text-xs",
                  fontSize === "sm" && "text-sm",
                  fontSize === "md" && "text-base",
                  fontSize === "lg" && "text-lg",
                  fontSize === "xl" && "text-xl",
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>

              <p className="mt-3 font-semibold">9.99$</p>
            </div>
          </a>
        </article>

        <aside className="h-full w-full border-l-0 border-t-2 border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900 lg:border-l-2 lg:border-t-0 lg:p-4">
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
