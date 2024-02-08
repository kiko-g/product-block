import type { AppProps } from "next/app";

import "@/styles/globals.css";

import "@/styles/themes/elegant.css";

import "@/styles/product/basic.css";
import "@/styles/product/elegant.css";
import "@/styles/product/impact.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
