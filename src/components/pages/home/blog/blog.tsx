import FeaturedImage from "@/assets/home/featured.jpg";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";
import Image from "next/image";

export default function Blog() {
  return (
    <section
      className="w-full py-[130px]"
      style={{
        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${FeaturedImage.src}) lightgray 50% / cover no-repeat;`,
      }}
    >
      <main className="container mx-auto">
        {/* section title */}
        <SectionTitle
          title="FROM OUR MENU"
          semiTitle="---Check it out---"
          isDark
        />

        {/* content */}
        <div className="flex items-center justify-center gap-17">
          {/* image */}
          <aside>
            <Image src={FeaturedImage} alt="Featured iamge" />
          </aside>

          {/* description */}
          <aside>
            <p className="font-inter w-[604px] text-xl leading-[30px] text-white">
              <span className="text-2xl leading-[36px]">
                March 20, 2023 <br /> WHERE CAN I GET SOME? <br />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            {/* button */}
            <button className="font-inter mt-6 cursor-pointer rounded-lg border-b-4 border-b-white px-[30px] py-5 text-xl font-semibold text-white uppercase transition-all duration-350 ease-linear hover:border-b-black hover:bg-black">
              Read more
            </button>
          </aside>
        </div>
      </main>
    </section>
  );
}
