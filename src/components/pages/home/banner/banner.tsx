"use client";

import firstSlide from "@/assets/home/01.jpg";
import secondSlide from "@/assets/home/02.jpg";
import thirdSlide from "@/assets/home/03.png";
import fourthSlide from "@/assets/home/04.jpg";
import fifthSlide from "@/assets/home/05.png";
import sixthSlide from "@/assets/home/06.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// all slides
const slides: { url: StaticImageData }[] = [
  {
    url: firstSlide,
  },
  {
    url: secondSlide,
  },
  {
    url: thirdSlide,
  },
  {
    url: fourthSlide,
  },
  {
    url: fifthSlide,
  },
  {
    url: sixthSlide,
  },
];

import type { Swiper as SwiperType } from "swiper";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="h-[calc(100vh_-_155px)] w-full"
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id} className="cursor-grab">
            <Image src={slide.url} alt="slides" className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-10 flex w-[30%] items-center justify-center"
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id} className="cursor-pointer">
            <Image src={slide.url} alt="slides" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
