export interface CarouselData {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  rating?: number; // 별점
}

export interface CarouselProps {
  data: CarouselData[];
  onItemClick?: (item: CarouselData) => void;
}