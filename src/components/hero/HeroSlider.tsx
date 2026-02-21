"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";

type HeroSliderProps = {
  slides: any[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
