import { type FontSize, sizeStyles } from "@/app/constants/design";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fontSize?: FontSize;
}

export const TextField = ({
  fontSize = "md",
  className = "",
  ...props
}: TextFieldProps) => {
  return (
    <input
      className={`g-neutral-300/15 border border-neutral-300/50 shadow-[0_10px_10px_-5px_#D4D4D480] rounded-3xl backdrop-blur-md hover:shadow-[0_10px_10px_-5px_#d4d4d4]
        duration-200 placeholder:text-neutral-400/80 focus:shadow-[0_10px_10px_-5px_#b6b6b6] font-main ${sizeStyles[fontSize]} ${className}`}
      {...props}
    >
    </input>
  );
};
