"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // 실제로는 전역 상태나 세션을 사용
import logo_img from "@/public/logo.svg";

export const Navbar = () => {
  // TODO: 임시 로그인 상태를 이후 실제 인증 로직과 연결
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav
      className="flex justify-between items-center px-2 fixed top-0 left-0 w-full h-12 font-light
      bg-neutral-300/30 border border-neutral-300/50 rounded-b-2xl shadow-[0_0_10px_2px_#D4D4D480] backdrop-blur-md z-10"
    >
      <Link href="/" className="flex h-8">
        <div className="flex justify-between items-center h-full w-25">
          <Image
            src={logo_img}
            alt="logo"
            className="w-7 h-7 object-contain"
            sizes="28px"
            priority={true}
          />
          <h1 className="h-6 text-md font-medium">Mychelin</h1>
        </div>
      </Link>

      <div className="mr-3 flex gap-4 items-center text-sm">
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="hover:underline">
              대시보드
            </Link>
            <Link href="/profile" className="hover:underline">
              내 정보 수정
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-neutral-500 hover:text-black hover:underline transition duration-200"
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link href="/login" className="hover:underline">
            로그인 / 회원가입
          </Link>
        )}
      </div>
    </nav>
  );
};
