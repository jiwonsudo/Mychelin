export interface CarouselData {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  rating?: number; // 별점
}

export interface CarouselProps {
  data: CarouselData[];
  onItemClick?: (item: CarouselData) => void;
}