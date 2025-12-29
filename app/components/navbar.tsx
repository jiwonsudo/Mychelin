import Image from "next/image";
import Link from "next/link";

import logo_beige from "../../public/logo_beige.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-2 fixed top-0 left-0 w-full h-12.5">
      <Link href="/" className="flex h-8">
        <div className="h-full aspect-square">
          <Image
            src={logo_beige}
            alt="logo"
            className="w-8 h-8 object-contain"
            sizes="32px"
            priority={true}
          />
          <h1></h1>
        </div>
      </Link>
      <Link href="/login" className="flex mr-3 --font-noto text-landing-page">
        로그인
      </Link>
    </nav>
  );
};
