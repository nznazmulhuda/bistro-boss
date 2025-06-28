"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export interface Reviews {
  _id: string;
  name: string;
  details: string;
  rating: number;
}

export default function TestimonialCards() {
  const reviews: Reviews[] = [
    {
      _id: "643010e0f5a7e52ce1e8fa65",
      name: "Jane Doe",
      details:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: 3,
    },
    {
      _id: "643010f9f5a7e52ce1e8fa66",
      name: "John Doe",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      rating: 2,
    },
    {
      _id: "6430110af5a7e52ce1e8fa67",
      name: "MJ Doe",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
      rating: 5,
    },
    {
      _id: "64301123f5a7e52ce1e8fa68",
      name: "Sarah Smith",
      details:
        "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
      rating: 4,
    },
    {
      _id: "6430113af5a7e52ce1e8fa69",
      name: "Robert Johnson",
      details:
        "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
      rating: 5,
    },
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="flex flex-col items-center justify-center">
            {/* rating */}
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((rate) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  key={rate}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.475 6.6877C23.4083 4.44395 26.5917 4.44395 27.525 6.6877L31.8625 17.1189L43.1208 18.021C45.5458 18.2148 46.5292 21.2398 44.6813 22.8231L36.1042 30.171L38.7229 41.1564C39.2875 43.5231 36.7146 45.3919 34.6396 44.1252L25 38.2377L15.3604 44.1252C13.2854 45.3919 10.7125 43.521 11.2771 41.1564L13.8958 30.171L5.31875 22.8231C3.47084 21.2398 4.45417 18.2148 6.87917 18.021L18.1375 17.1189L22.475 6.6877Z"
                    fill={review.rating >= rate ? "#CD9003" : "#A1A1A1"}
                  />
                </svg>
              ))}
            </div>

            {/* icon */}
            <div className="mt-12 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <g clipPath="url(#clip0_2_507)">
                  <path
                    d="M34.615 46.1542L21.1533 46.1542C19.5506 46.1542 18.1881 45.5935 17.0662 44.4716C15.9449 43.3497 15.3835 41.9876 15.3835 40.3845V38.4623C15.3835 34.2152 16.8862 30.5897 19.8914 27.5846C22.8963 24.5805 26.5225 23.0778 30.7691 23.0778H34.615C35.6565 23.0778 36.5576 22.697 37.3191 21.9361C38.0803 21.1747 38.4608 20.2736 38.4608 19.2319V11.5389C38.4608 10.4974 38.0801 9.59543 37.3191 8.83408C36.5578 8.07379 35.6567 7.69238 34.615 7.69238L30.7691 7.69238C26.602 7.69238 22.6265 8.50446 18.84 10.1263C15.0539 11.7492 11.7791 13.9429 9.01428 16.7077C6.2497 19.4712 4.0566 22.7462 2.43393 26.5328C0.811258 30.3188 -0.000183105 34.2954 -0.000183105 38.4621L-0.000183105 80.7688C-0.000183105 83.9756 1.1211 86.6985 3.36472 88.9429C5.60854 91.1861 8.33355 92.3076 11.5385 92.3076H34.6164C37.8212 92.3076 40.5453 91.1861 42.7894 88.9429C45.0326 86.6985 46.1545 83.9756 46.1545 80.7688V57.6929C46.1545 54.4867 45.0326 51.7638 42.7879 49.5191C40.5449 47.2762 37.8197 46.1542 34.615 46.1542Z"
                    fill="#151515"
                  />
                  <path
                    d="M96.6366 49.5191C94.3936 47.2762 91.6692 46.1542 88.4637 46.1542L75.0022 46.1542C73.4004 46.1542 72.0366 45.5935 70.9166 44.4716C69.7942 43.3497 69.2339 41.9876 69.2339 40.3845V38.4623C69.2339 34.2152 70.7366 30.5897 73.7403 27.5846C76.7442 24.5805 80.3701 23.0778 84.6189 23.0778H88.4639C89.5056 23.0778 90.4074 22.697 91.1683 21.9361C91.9288 21.1747 92.3108 20.2736 92.3108 19.2319V11.5389C92.3108 10.4974 91.929 9.59543 91.1683 8.83408C90.4076 8.07379 89.5058 7.69238 88.4639 7.69238L84.6189 7.69238C80.4495 7.69238 76.4748 8.50446 72.6872 10.1263C68.9018 11.7492 65.628 13.9429 62.8632 16.7077C60.0984 19.4712 57.9043 22.7462 56.2822 26.5328C54.66 30.3188 53.8475 34.2954 53.8475 38.4621V80.7688C53.8475 83.9756 54.9698 86.6985 57.2128 88.9429C59.456 91.1861 62.1804 92.3076 65.3857 92.3076H88.4624C91.668 92.3076 94.3921 91.1861 96.6351 88.9429C98.8798 86.6985 99.9998 83.9756 99.9998 80.7688V57.6929C100 54.4865 98.8798 51.7638 96.6366 49.5191Z"
                    fill="#151515"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_507">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* review */}
            <p className="font-inter w-[1096px] text-center text-xl leading-[35px] text-[#444]">
              {review.details}
            </p>

            {/* reviewr name */}
            <h5 className="font-inter text-[32px] font-medium text-[#CD9003]">
              {review.name}
            </h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
