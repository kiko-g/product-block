import React from "react"
import Image from "next/image"
import clsx from "clsx"
import { Inter } from "next/font/google"
import { DarkModeSwitch } from "../components/DarkModeSwitch"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={clsx(
        inter.className,
        "flex min-h-screen w-screen relative flex-col items-center justify-between bg-white dark:bg-neutral-900 p-1 xl:p-0"
      )}
    >
      <div className="top-4 absolute right-4">
        <DarkModeSwitch />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1">
        <article className="w-full h-full p-2 xl:p-4">
          <div></div>
        </article>

        <aside className="w-full h-full border-l-2 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 p-1 xl:p-3"></aside>
      </div>
    </main>
  )
}
