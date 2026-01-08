"use client";

import { useState } from "react";

import { type FontSize, sizeStyles } from "@/app/constants/design";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fontSize?: FontSize;
  isPW?: boolean;
}

export const TextField = ({
  label,
  fontSize = "md",
  className = "",
  isPW = false,
  type,
  ...props
}: TextFieldProps) => {
  const [show, setShow] = useState(false);

  // 비밀번호 필드라면 show 상태에 따라 타입을 결정, 아니면 원래 전달받은 type 사용
  const inputType = isPW ? (show ? "text" : "password") : type;

  // sizeStyles에서 px-X 값을 찾아 X만 추출
  const paddingXMatch = sizeStyles[fontSize].match(/px-(\d+)/);
  const labelLeft = `${
    (paddingXMatch ? Number(paddingXMatch[1]) : 4) * 0.25
  }rem`;

  return (
    <div className={`relative flex items-center w-full font-main ${className}`}>
      <input
        placeholder=" "
        className={`peer w-full bg-neutral-300/15 border border-neutral-300/50 shadow-[0_10px_10px_-5px_#d4d4d480] 
          rounded-3xl backdrop-blur-md hover:shadow-[0_10px_10px_-5px_#d4d4d4]
          duration-200 focus:shadow-[0_10px_10px_-5px_#a7a7a7] outline-none ${
            sizeStyles[fontSize]
          }
          placeholder:text-transparent focus:placeholder:text-neutral-400/80 
          ${isPW ? "pr-12" : ""}`} // 버튼 자리를 위해 패딩 추가
        type={inputType}
        {...props}
      />

      {/* Floating Label */}
      <label
        style={{ left: labelLeft }}
        className={`
          absolute top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none
          text-neutral-400 font-main origin-left

          peer-focus:top-0 peer-focus:translate-x-1 peer-focus:scale-[0.85] peer-focus:text-neutral-600
          peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-x-1 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-neutral-600
          
          /* before 배경 박스: h-[2px]와 위치 보정 추가 */
          before:content-[''] before:absolute before:-inset-x-1 before:h-0.75 before:top-1/2 before:-translate-y-1/2 before:-z-10 
          before:bg-white before:rounded-sm

          before:opacity-0 peer-focus:before:opacity-100 peer-[:not(:placeholder-shown)]:before:opacity-100
        `}
      >
        {label}
      </label>

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
