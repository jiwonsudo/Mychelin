import Image from "next/image";

export default function Home() {
  return (
    <div className="background top-0 w-screen h-screen bg-[linear-gradient(to_bottom,#2f0000,#591313)]">
      <div className="nav-bar ml-5 mt-5 flex justify-between">
        <div className="main-logo">
          <Image
          className=""
          src="/logo_beige.svg"
          width={40}
          height={40}
          sizes="100%"
          alt="background"/>
        </div>
      </div>
    </div>
  );
}
