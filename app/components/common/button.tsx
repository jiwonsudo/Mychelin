type FontSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: FontSize;
  children: React.ReactNode;
}

const sizeStyles: Record<FontSize, string> = {
  sm: 'text-sm px-3 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
  xl: 'text-xl px-8 py-4',
};

export const Button = ({ 
  size = 'sm',
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={`bg-neutral-300/15 border border-neutral-300/50 rounded-3xl
        shadow-[0_0_10px_2px_#D4D4D480] backdrop-blur-md font-main hover:cursor-pointer ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};