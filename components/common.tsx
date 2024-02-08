import React from "react";

type Props = {
  isActive: boolean;
};

export function TailwindIcon({ isActive }: Props) {
  return (
    <img
      alt="tw"
      src={`https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=${isActive ? "400" : "500"}`}
      className="h-5 w-5"
    />
  );
}
