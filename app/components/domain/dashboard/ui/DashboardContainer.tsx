import { CarouselData } from "../dashboard.types";
import { Carousel } from "./Carousel";

const testData: CarouselData[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `테스트제목 ${i + 1}`,
  description: '테스트설명문',
  imageUrl: '/test.jpg',
  rating: 3,
}));

export const DashboardContainer = () => {
  return (
    <Carousel data={testData}></Carousel>
  );
}