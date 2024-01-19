export type ProductStatus = {
  new: boolean;
  hot: boolean;
  soldOut: boolean;
  sale: {
    active: boolean;
    percent: number;
  };
};

// Product Block Options
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Alignment = "left" | "center" | "right";

export type Color = "Gray" | "Brown" | "Blue" | "Black";
export type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
