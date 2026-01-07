import { useState } from "react";

import { type FontSize, sizeStyles } from "@/app/constants/design";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fontSize?: FontSize;
  isPW?: boolean;
}

export const TextField = ({
  fontSize = "md",
  className = "",
  isPW=false,
  type,
  ...props
}: TextFieldProps) => {
  const [show, setShow] = useState(false);

  // 비밀번호 필드라면 show 상태에 따라 타입을 결정, 아니면 원래 전달받은 type 사용
  const inputType = isPW ? (show ? "text" : "password") : type;

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <input
        className={`w-full bg-neutral-300/15 border border-neutral-300/50 shadow-[0_10px_10px_-5px_#D4D4D480] 
          rounded-3xl backdrop-blur-md hover:shadow-[0_10px_10px_-5px_#d4d4d4]
          duration-200 placeholder:text-neutral-400/80 focus:shadow-[0_10px_10px_-5px_#b6b6b6] 
          font-main outline-none ${sizeStyles[fontSize]} 
          ${isPW ? "pr-12" : ""}`} // 버튼 자리를 위해 패딩 추가
        type={inputType}
        {...props}
      />
      
      {isPW && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 text-xs font-medium text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          {show ? "숨기기" : "보기"}
        </button>
      )}
    </div>
  );
};
