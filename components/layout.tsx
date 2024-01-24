import React from "react";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RectangleGroupIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

const navigations = [
  {
    name: "Product",
    href: "/",
    icon: Square3Stack3DIcon,
    shown: true,
  },
  {
    name: "Editor",
    href: "/editor",
    icon: RectangleGroupIcon,
    shown: true,
  },
];

export function Layout({ children, title }: { children: React.ReactNode; title: string }) {
  const siteName = "Product Block";
  const renderedTitle = title ? `${siteName}: ${title}` : siteName;

  return (
    <>
      <Head>
        <title>{renderedTitle}</title>
      </Head>

      <main className="relative flex min-h-screen w-screen items-start justify-between bg-slate-50 text-gray-800 dark:bg-[#181e2a] dark:text-white">
        <Sidebar />
        <div className="flex w-full flex-1 items-start self-stretch">{children}</div>
      </main>
    </>
  );
}

function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="hidden min-w-full shrink-0 flex-col space-y-4 self-stretch border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#131720] lg:flex lg:min-w-[16rem]">
      <ul className="top-0 flex w-full flex-1 flex-col space-y-2">
        {navigations
          .filter((item) => item.shown !== false)
          .map((item, itemIdx) => {
            const isActive = pathname === item.href;

            return (
              <li key={`nav-${itemIdx}`}>
                <Link
                  title={item.name}
                  href={item.href}
                  className={clsx(
                    isActive
                      ? "bg-slate-600 text-white hover:opacity-80 dark:bg-slate-500/80"
                      : "hover:bg-slate-600/10 dark:hover:bg-slate-500/30",
                    `flex cursor-pointer items-center justify-center gap-2 rounded px-3 py-3 text-sm transition ease-in-out xl:justify-start`,
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden md:block">{item.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
      <hr />
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex w-full items-center justify-start gap-x-2.5">
          <GitHubLink />
        </div>

        <div className="flex items-center gap-x-2">
          <DarkModeSwitch />
        </div>
      </div>
    </aside>
  );
}

function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="flex w-full items-center justify-between gap-x-3 border-b border-black/10 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#131720]">
      <div className="flex flex-1 items-center gap-x-2">
        {navigations.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "rounded px-3 py-2 text-sm",
              "hover:bg-gray-200 dark:hover:bg-gray-800",
              "transition-colors duration-200 ease-in-out",
              pathname === item.href ? "bg-gray-200 dark:bg-gray-800" : "bg-transparent",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-2.5">
        <GitHubLink />
        <DarkModeSwitch />
      </div>
    </div>
  );
}

function GitHubLink() {
  return (
    <Link href="https://github.com/kiko-g/product-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="h-6 w-6 transition hover:opacity-80"
      >
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
      </svg>
    </Link>
  );
}

function DarkModeSwitch() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <div className="pointer-events-auto flex items-center justify-center">
      <button type="button" onClick={toggleMode} aria-label="Toggle dark mode" className="group">
        {/* Sun */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="block h-7 w-7 fill-orange-400 stroke-transparent transition group-hover:opacity-80 dark:hidden"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>

        {/* Moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden h-6 w-6 fill-blue-400 stroke-blue-400 transition group-hover:opacity-80 dark:block"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
