import { FontSize, sizeStyles } from "@/app/design";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: FontSize;
  children: React.ReactNode;
  dimmed?: boolean;
}

export const Button = ({
  fontSize = "md",
  children,
  dimmed = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`bg-neutral-300/15 border border-neutral-300/50 rounded-3xl
        shadow-[0_0_10px_2px_#d4d4d480] backdrop-blur-md font-main hover:cursor-pointer
         ease-in-out duration-200 ${sizeStyles[fontSize]} ${className} ${
        dimmed
          ? "text-neutral-400/80"
          : "text-black hover:shadow-[0_0_10px_2px_#d4d4d4]"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
