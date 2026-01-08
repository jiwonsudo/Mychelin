type FontSize = "sm" | "md" | "lg" | "xl";

const sizeStyles: Record<FontSize, string> = {
  sm: "text-sm px-3 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
  xl: "text-xl px-8 py-4",
};

export { type FontSize, sizeStyles };