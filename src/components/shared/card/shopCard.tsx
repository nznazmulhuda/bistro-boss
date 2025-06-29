import { MenuItems } from "@/app/our-menu/page";
import RecommendImage from "@/assets/home/slide1.jpg";
import Image from "next/image";

export default function ShopCard(data: MenuItems) {
  return (
    <div className="bg-[#F3F3F3] pb-6">
      {/* iamge */}
      <aside className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={RecommendImage}
          alt="Recommend Image"
          className="flex h-[160%] w-full"
        />

        <div className="font-inter absolute top-5 right-5 h-[48px] w-[89px] bg-[#111827] px-6 py-3 text-center text-[16px] leading-[26px] font-semibold text-white">
          ${data.price}
        </div>
      </aside>

      {/* content */}
      <aside className="mt-8 flex h-[220px] flex-col items-center justify-between">
        <div>
          {/* title */}
          <h6 className="font-inter text-center text-2xl font-semibold text-[#151515]">
            {data.name}
          </h6>
          {/* description */}
          <p className="font-inter mt-2 w-[350px] text-center text-[16px] leading-[26px] text-[#151515]">
            {data.recipe}
          </p>
        </div>

        {/* add to cart button */}
        <button className="font-inter mt-6 cursor-pointer rounded-lg border-b-4 border-b-[#bb8506] bg-[#E8E8E8] px-[30px] py-5 text-center text-xl font-medium text-[#BB8506] uppercase transition-all duration-350 ease-linear hover:border-b-[#1F2937] hover:bg-[#1F2937] hover:text-[#BB8506]">
          Add to cart
        </button>
      </aside>
    </div>
  );
}
