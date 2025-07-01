"use client";

import firstSlide from "@/assets/home/slide1.jpg";
import secondSlide from "@/assets/home/slide2.jpg";
import thirdSlide from "@/assets/home/slide3.jpg";
import fourthSlide from "@/assets/home/slide4.jpg";
import fifthSlide from "@/assets/home/slide5.jpg";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// all slides
const slides: { url: StaticImageData; title: string }[] = [
  {
    url: firstSlide,
    title: "Salads",
  },
  {
    url: secondSlide,
    title: "Soups",
  },
  {
    url: thirdSlide,
    title: "pizzas",
  },
  {
    url: fourthSlide,
    title: "desserts",
  },
  {
    url: fifthSlide,
    title: "Salads",
  },
];

export default function OrderSlider() {
  return (
    <div className="container mx-auto mb-8">
      <Swiper
        loop={false}
        spaceBetween={10}
        navigation={false}
        modules={[FreeMode, Pagination]}
        slidesPerView={4}
        className="w-full"
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id} className="relative h-[450px] cursor-grab">
            <Image src={slide.url} alt="slides" className="h-full w-full" />

            <h4 className="font-cinzel text-shadow-2xl absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-[32px] font-semibold text-white text-shadow-black">
              {slide.title}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
