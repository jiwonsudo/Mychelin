import Image from "next/image";

import { Button } from "../../common/Button";

import stars_img from "../../../../public/images/landing-page/stars.png";
import header_bg_img from "../../../../public/images/landing-page/header_bg.png";

export const Hero = () => {
  return (
    <header className="mt-35 font-main">
      <div className="flex justify-center">
        <Image src={stars_img} alt="stars" className="w-30" sizes="200px"/>
      </div>
      <h1 className="mt-15 font-pretty text-7xl text-center">오늘 갔던 그 식당, 어땠나요?</h1>
      <h2 className="mt-12 text-2xl font-light text-center">세상에 없던 당신만의 미식 가이드를 발간해 보세요.</h2>
      <Button className="mt-20 mx-auto block w-25 h-10">시작하기</Button>
      <div className="flex justify-center">
        <Image src={header_bg_img} alt="background_image_foods" className="w-screen mt-25 object-cover" sizes="1500px"/>
      </div>
    </header>
  );
};
