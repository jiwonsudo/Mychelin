import Image from "next/image";
import fork from "../../public/images/fork.webp";

export const Header = () => {
  return (
    <header>
      <Image
        src={fork}
        alt="fork image"
        loading="eager"
        className="h-[80%] w-auto fixed left-[50%] bottom-0 -translate-x-1/2 z-2"
      ></Image>
      <div className="fixed top-[30%] w-full text-[150px] font-bookk-bold text-landing-page">
        <div className="flex justify-between m-5">
          <h1>나만의</h1>
          <h1>맛집을</h1>
        </div>
        <h1 className="text-center">플레이리스트처럼.</h1>
      </div>
    </header>
  );
};
