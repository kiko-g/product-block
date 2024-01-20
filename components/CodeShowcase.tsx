import React from "react";
import clsx from "clsx";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Inter_Tight } from "next/font/google";

import { CheckIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const inter = Inter_Tight({ subsets: ["latin"] });

export function CodeShowcase({ code, language }: { code: string; language: string }) {
  return (
    <div className={clsx(inter.className, "group relative mb-4 max-w-full overflow-x-scroll rounded-xl")}>
      {/* Controls */}
      <div className="absolute right-3 top-3 z-20 flex items-center justify-end gap-2 font-sans">
        {code === "" ? null : <CopyCodeButton text={code} />}
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        wrapLongLines
        customStyle={{
          backgroundColor: "#222430",
          borderRadius: "0.75rem",
          maxHeight: "600px",
          margin: "0",
          fontSize: "0.8rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 4000);
      })
      .catch(() => console.error("Failed to copy code to clipboard."));
  }, [text]);

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={clsx(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-[#3e424c] text-white hover:bg-blue-600/80 hover:text-white dark:bg-white/10 dark:hover:bg-blue-500/60",
      )}
    >
      <span className="hidden xl:flex">{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  );
}
