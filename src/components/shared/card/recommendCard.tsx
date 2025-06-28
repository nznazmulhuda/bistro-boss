import RecommendImage from "@/assets/home/slide1.jpg";
import Image from "next/image";

export default function RecommendCard() {
  return (
    <div className="h-[541px] bg-[#F3F3F3]">
      {/* iamge */}
      <aside className="h-[300px] w-full overflow-hidden">
        <Image
          src={RecommendImage}
          alt="Recommend Image"
          className="flex h-[160%] w-full"
        />
      </aside>

      {/* content */}
      <aside className="mt-8 flex flex-col items-center justify-center">
        {/* title */}
        <h6 className="font-inter text-center text-2xl font-semibold text-[#151515]">
          Caeser Salad
        </h6>

        {/* description */}
        <p className="font-inter mt-2 w-[345px] text-center text-[16px] leading-[26px] text-[#151515]">
          Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>

        {/* add to cart button */}
        <button className="font-inter mt-6 cursor-pointer rounded-lg border-b-4 border-b-[#bb8506] bg-[#E8E8E8] px-[30px] py-5 text-center text-xl font-medium text-[#BB8506] uppercase transition-all duration-350 ease-linear hover:border-b-[#1F2937] hover:bg-[#1F2937] hover:text-[#BB8506]">
          Add to cart
        </button>
      </aside>
    </div>
  );
}
