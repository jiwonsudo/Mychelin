"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { CarouselProps } from "../dashboard.types";

import star_img from "@/public/icons/star_white.png";

export const Carousel = ({ data, onItemClick }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const velocity = useRef(0);
  const startX = useRef(0);
  const lastX = useRef(0);
  const momentumRafID = useRef<number | null>(null);

  const applyMomentum = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += velocity.current;
    velocity.current *= 0.95; // 프레임마다 줄어들 가속도 (속도의 배수)
    if (Math.abs(velocity.current) > 0.1) {
      // velocity의 절댓값 > 0.1 일때만 속도 줄이고 아니라면 컷오프
      momentumRafID.current = requestAnimationFrame(applyMomentum);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDrag(true);
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    startX.current = x;
    lastX.current = x;
    velocity.current = 0;
    if (momentumRafID.current) {
      // 이미 실행중인 requestAnimationFrame 정지
      cancelAnimationFrame(momentumRafID.current);
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrag || !scrollRef.current) return;

    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    const deltaX = lastX.current - x;
    scrollRef.current.scrollLeft += deltaX;

    velocity.current = deltaX;
    lastX.current = x;
  };

  const handleEnd = () => {
    setIsDrag(false);
    momentumRafID.current = requestAnimationFrame(applyMomentum);
  };

  const handleItemClick = (e: React.MouseEvent, item: any) => {
    const endX = e.pageX;
    const dragDistance = Math.abs(startX.current - endX);

    // 드래그 거리가 5px 미만일 때만 클릭으로 간주 (사용자 의도 파악)
    if (dragDistance < 5) {
      onItemClick?.(item);
    }
  }

  return (
    <div className="overflow-hidden">
      <h1 className="ml-18 mb-6 text-2xl font-bold">{"여기에 캐러셀 제목"}</h1>

      <div
        ref={scrollRef}
        // 마우스 이벤트
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        // 터치 이벤트
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        // 모바일에서 브라우저 스크롤과 충돌 방지
        className="flex gap-14 overflow-x-hidden px-12 py-6 -my-4 cursor-grab active:cursor-grabbing select-none touch-pan-y"
      >
        {data.map((item, i) => (
          <div
            key={item.id}
            onMouseUp={(e) => handleItemClick(e, item)} // 데이터 전달
            className={`
            min-w-75 h-45 shrink-0 rounded-3xl shadow-[0_0_10px_2px_#d4d4d4]
            ${i === 0 ? "ml-4" : ""} 
            ${i === data.length - 1 ? "mr-4" : ""}
          `}
          >
            <div className="group w-full h-full relative overflow-hidden rounded-3xl backdrop-blur-md">
              <Image
                src={item.imageUrl}
                alt={item.title}
                sizes="140"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute ml-6 bottom-4 z-2">
                <p className="text-white text-sm font-normal opacity-60">
                  {item.description}
                </p>
                <div className="text-white text-2xl font-semibold">
                  {item.title}
                </div>
              </div>
              <div className="absolute right-4 bottom-5 items-center justify-end flex gap-1 z-2">
                {Array.from({ length: item.rating || 0 }).map((_, idx) => (
                  <Image 
                    key={idx} 
                    src={star_img} 
                    alt="star" 
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain" // scale 관련 클래스 제거
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
