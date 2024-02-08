import React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout";

export default function ThemesIndexPage() {
  const themes = [
    {
      name: "Elegant",
      link: "/themes/elegant",
    },
  ];

  return (
    <Layout title="Themes">
      <ul className="grid h-full w-full grid-cols-1 gap-3 p-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {themes.map((theme) => (
          <li key={theme.name} className="h-full w-full">
            <Link
              href={theme.link}
              className="flex w-full flex-col rounded-xl bg-white p-4 transition hover:opacity-80 dark:bg-white/10"
            >
              <div className="h-36 w-full rounded-md border border-teal-600 bg-teal-600/50 dark:border-teal-600 dark:bg-teal-500/30" />
              <h3 className="mt-2 text-xl font-bold uppercase tracking-tighter">{theme.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
