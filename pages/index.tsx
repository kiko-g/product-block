import React from "react"
import clsx from "clsx"
import { Select } from "@/components/inputs"
import { Layout } from "@/components/layout"

type Size = "xs" | "sm" | "md" | "lg" | "xl"
type SizeAndNull = null | "xs" | "sm" | "md" | "lg" | "xl"
type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right"

export default function Home() {
  const [cycleImageOnHover, setCycleImageOnHover] = React.useState(true)
  const [fontSize, setFontSize] = React.useState<Size>("md")
  const [borderRadius, setBorderRadius] = React.useState<SizeAndNull>("md")
  const [badgePosition, setBadgePosition] = React.useState<BadgePosition>("top-left")
  const [hoverEffect, setHoverEffect] = React.useState(true)

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1">
        <article className="w-full h-full flex items-center justify-center p-4 lg:p-4 mt-4 lg:mt-0">
          {/* Product Block */}
          <a
            href="#"
            className={clsx(
              "w-96 border relative overflow-hidden group transition-all bg-slate-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700",
              hoverEffect && "hover:shadow-xl dark:shadow-gray-700",
              borderRadius === null && "rounded-none",
              borderRadius === "xs" && "rounded-sm",
              borderRadius === "sm" && "rounded",
              borderRadius === "md" && "rounded-md",
              borderRadius === "lg" && "rounded-lg",
              borderRadius === "xl" && "rounded-xl"
            )}
          >
            <div
              className={clsx(
                "absolute flex",
                badgePosition === "top-left" ? "top-0 left-0" : "",
                badgePosition === "top-right" ? "top-0 right-0" : "",
                badgePosition === "bottom-left" ? "bottom-0 left-0" : "",
                badgePosition === "bottom-right" ? "top-0 right-0" : ""
              )}
            >
              <span className="bg-rose-700 font-medium tracking-tighter text-white px-3 py-3 h-full w-full">20%</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1704775934239-446464509646?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNTQyMDYwNA&ixlib=rb-4.0.3&q=80&w=800"
              alt="Product A1"
              className={clsx("w-full", cycleImageOnHover ? "group-hover:hidden block" : "block")}
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1700583712248-6c6c1625ec14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNTQyMDYxNg&ixlib=rb-4.0.3&q=80&w=800"
              alt="Product A2"
              className={clsx("w-full", cycleImageOnHover ? "group-hover:block hidden" : "hidden")}
            />

            <div className="caption relative px-3 py-3 mb-4">
              <div className="flex gap-x-3 items-center justify-between">
                <span
                  className={clsx(
                    "inline-flex flex-1 uppercase font-medium tracking-tighter",
                    fontSize === "xs" && "text-[0.625rem]",
                    fontSize === "sm" && "text-xs",
                    fontSize === "md" && "text-sm",
                    fontSize === "lg" && "text-base",
                    fontSize === "xl" && "text-lg"
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
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>

              <h2
                className={clsx(
                  "font-bold",
                  fontSize === "xs" && "text-base",
                  fontSize === "sm" && "text-lg",
                  fontSize === "md" && "text-xl",
                  fontSize === "lg" && "text-2xl",
                  fontSize === "xl" && "text-3xl"
                )}
              >
                Product A
              </h2>
              <p
                className={clsx(
                  fontSize === "xs" && "text-xs",
                  fontSize === "sm" && "text-sm",
                  fontSize === "md" && "text-base",
                  fontSize === "lg" && "text-lg",
                  fontSize === "xl" && "text-xl"
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>

              <p className="font-semibold mt-3">9.99$</p>
            </div>
          </a>
        </article>

        <aside className="w-full h-full border-t-2 lg:border-t-0 border-l-0 lg:border-l-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 lg:p-4">
          {/* Options */}
          <div className="h-full flex flex-col items-center justify-center flex-1 mx-auto w-full lg:w-96">
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
  )
}
