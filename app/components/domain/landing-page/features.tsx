import Image, { StaticImageData } from "next/image";

import marker_icon from "../../../../public/icons/marker_icon.svg";
import glass_icon from "../../../../public/icons/glass_icon.svg";
import share_icon from "../../../../public/icons/share_icon.svg";
import ex_map_img from "../../../../public/images/landing-page/ex_map_img.png";
import ex_note_img from "../../../../public/images/landing-page/ex_note_img.png";

interface FeatureItem {
  id: number;
  iconSrcs: StaticImageData[];
  title: string;
  desc: string; // description
  imgSrc: StaticImageData;
  imgAlt: string;
}

const FEATURE_DATA: FeatureItem[] = [
  {
    id: 1,
    iconSrcs: [marker_icon],
    title: "저번에 맛있었던 그 집, 어디였지?\n이런 질문은 이제 넣어 두세요.",
    desc: "방문했던 식당은 까먹지 않게\n지도 위에 표시되고,\n평가 당시 느꼈던 맛을 바로 볼 수 있어요.\n지도 위에 나의 맛집 컬렉션을 표시해 보세요.",
    imgSrc: ex_map_img,
    imgAlt: "나만의 식당을 저장하는 지도 이미지",
  },
  {
    id: 2,
    iconSrcs: [glass_icon, share_icon],
    title: "평가는 간편하게,\n검색과 공유는 더 간편하게.",
    desc: "나만의 스타 시스템을 통한 간단 평가와\n음식 카테고리별 분류 기능으로\n원하는 리뷰만 쉽게 볼 수 있어요.\
    \n원한다면 나의 평가나 맛집 리스트를\n쉽게 공유할 수도 있어요.",
    imgSrc: ex_note_img,
    imgAlt: "식당 평가를 작성한 화면 이미지",
  },
];

export const Features = () => {
  return (
    <section className="mt-20">
      {FEATURE_DATA.map((feature, idx) => (
        <div
          key={feature.id}
          className={`flex mt-50 gap-10 md:flex-row justify-around whitespace-pre-line ${
            idx % 2 === 0 ? "md:flex-row-reverse text-left" : ""
          }`}
        >
          <div className="w-[40%] max-w-5xl">
            <Image src={feature.imgSrc} alt={feature.imgAlt} />
          </div>
          <div className="mt-8">
            <div
              className={`flex gap-2 ${
                idx % 2 === 1 ? "justify-end" : ""
              }`}
            >
              {feature.iconSrcs.map((iconSrc, iconSrcIdx) => (
                <Image
                  key={iconSrcIdx + 1}
                  src={iconSrc}
                  alt="icon"
                  sizes="40px"
                  className="w-7 aspect-square"
                />
              ))}
            </div>
            <h1 className={`mt-24 text-3xl leading-11 font-medium ${
                idx % 2 === 1 ? "text-right" : ""
              }`}>{feature.title}</h1>
            <p className={`mt-8 text-lg font-light ${
                idx % 2 === 1 ? "text-right" : ""
              }`}>{feature.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
