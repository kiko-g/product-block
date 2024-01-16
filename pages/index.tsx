import React from "react"
import clsx from "clsx"
import { Inter } from "next/font/google"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
const inter = Inter({ subsets: ["latin"] })

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
    <main
      className={clsx(
        inter.className,
        "flex min-h-screen w-screen relative flex-col items-center justify-between bg-white dark:bg-neutral-900 text-gray-800 dark:text-white p-1 xl:p-0"
      )}
    >
      <div className="top-4 absolute right-4">
        <DarkModeSwitch />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1">
        <article className="w-full h-full flex items-center justify-center">
          {/* Product Block */}
          <a
            href="#"
            className={clsx(
              "w-96 border relative overflow-hidden group transition-all",
              hoverEffect && "hover:shadow-xl hover:translate-x-1 hover:-translate-y-1",
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
            </div>
          </a>
        </article>

        <aside className="w-full h-full border-l-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-1 xl:p-3">
          <div></div>
        </aside>
      </div>
    </main>
  )
}
