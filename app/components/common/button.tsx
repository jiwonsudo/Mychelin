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
      className={`bg-neutral-300/15 border border-neutral-300/50 rounded-3xl
        shadow-[0_0_10px_2px_#D4D4D480] backdrop-blur-md font-main hover:cursor-pointer
        hover:scale-105 ease-in-out duration-200 ${sizeStyles[fontSize]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
