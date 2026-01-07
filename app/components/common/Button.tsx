import { FontSize, sizeStyles } from "@/app/constants/design";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: FontSize;
  children: React.ReactNode;
}

export const Button = ({
  fontSize = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`bg-neutral-300/40 border border-neutral-300/80 rounded-3xl
        shadow-[0_0_10px_2px_#d4d4d4] backdrop-blur-md font-main hover:cursor-pointer
        hover:shadow-[0_0_10px_2px_#b8b8b8] ease-in-out duration-200 ${sizeStyles[fontSize]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
