import Image from "next/image";
import Link from "next/link";

import logo_img from "../../../public/logo.svg";

export const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center px-2 fixed top-0 left-0 w-full h-12 font-light
    bg-neutral-300/30 border border-neutral-300/50 rounded-b-2xl shadow-[0_0_10px_2px_#D4D4D480] backdrop-blur-md"
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
          <h1 className="h-6 text-md">Mychelin</h1>
        </div>
      </Link>
      <Link href="/login" className="mr-3 text-sm">
        로그인
      </Link>
    </nav>
  );
};
