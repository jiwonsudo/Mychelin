'use client';

import { CarouselData } from "../dashboard.types";
import { Carousel } from "./Carousel";

// TODO: Carousel 테스트데이터 실제 데이터 주입할 것
const testData: CarouselData[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `테스트제목 ${i + 1}`,
  description: "테스트설명문",
  imageUrl: "/test.jpg",
  rating: 3,
}));

export const DashboardContainer = () => {
  return (
    <Carousel
      data={testData}
      onItemClick={(item) => {
        // 추후 실제 데이터 로직으로 수정 필요
        alert(`ID: ${item.id}, title: ${item.title}`);
      }}
    ></Carousel>
  );
};
