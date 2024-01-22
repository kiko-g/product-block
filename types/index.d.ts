export type ProductType = {
  info: {
    title: string;
    description: string;
    price: number;
    image: string;
    ratingAvg: number;
    ratingCount: number;
    colors: ColorHex[];
    new: boolean;
    hot: boolean;
    soldOut: boolean;
    sale: {
      active: boolean;
      percent: number;
    };
  };
  options?: {
    captionAlignment?: Alignment;
    fontSize?: Size;
    outerMargin?: Size | null;
    innerPadding?: Size | null;
    borderRadius?: Size | null;
    borderWidth?: Size | null;
    borderColor?: ColorHex;
    borderStyle?: "solid" | "dashed" | "dotted";
    imageWidthAndHeight?: `${number}x${number}`;
    showProductButtons?: boolean;
    showColorOptions?: boolean;
    showRatings?: boolean;
    showTwoColumnsMobile?: boolean;
    showFromPrice?: boolean;
    grayscaleUnavailable?: boolean;
    hoverDim?: boolean;
    hoverShadowBox?: boolean;
    hoverScaleImage?: boolean;
    hoverImageChange?: boolean;
    badgePosition?: BadgePosition;
    saleTagColor?: ColorHex;
    saleTagText?: string;
    newTagColor?: ColorHex;
    newTagAge?: string;

    showDescription?: boolean;
    animateOnEntrance?: boolean;
    backgroundColor?: ColorHex;
  };
};

// Product Block Options
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Alignment = "left" | "center" | "right";

export type Color = "Gray" | "Brown" | "Blue" | "Black";
export type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type ColorHex = `#${string}`;
