import BannerImage from "@/assets/menu/banner3.jpg";
import SectionBanner from "@/components/pages/our-menu/sectionBanner";
import DarkButton from "@/components/shared/button/button";
import MenuCard from "@/components/shared/card/menuCard";
import PageBanner from "@/components/shared/pageBanner/pageBanner";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";
import menus from "@/lib/menu";

export default async function OurMenu() {
  return (
    <section>
      {/* banner */}
      <PageBanner
        title="OUR MENU"
        semiTitle="Would you like to try a dish?"
        bannerImage={BannerImage.src}
      />

      <main>
        {/* todays offer section */}
        <section className="container mx-auto flex flex-col items-center justify-center">
          {/* todays offer */}
          <SectionTitle title="TODAY'S OFFER" semiTitle="---Don't miss---" />

          {/* menus */}
          <main className="mb-12 grid grid-cols-2 gap-6">
            {menus.slice(0, 4).map((item) => (
              <MenuCard
                title={item.name}
                description={item.recipe}
                price={String(item.price)}
                image={item.image}
                key={item._id}
              />
            ))}
          </main>

          {/* button */}
          <DarkButton label="ORDER YOUR FAVOURITE FOOD" />
        </section>

        {/* desserts section */}
        <section className="flex flex-col items-center justify-center">
          <SectionBanner
            sectionTitle="DESSERTS"
            sectionDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <main className="container mx-auto mb-[56px] grid grid-cols-2 gap-6">
            {menus
              .filter((item) => item.category === "dessert")
              .map((item) => (
                <MenuCard
                  title={item.name}
                  description={item.recipe}
                  price={String(item.price)}
                  image={item.image}
                  key={item._id}
                />
              ))}
          </main>

          <DarkButton label="ORDER YOUR FAVOURITE FOOD" />
        </section>

        {/* pizza section */}
        <section className="flex flex-col items-center justify-center">
          <SectionBanner
            sectionTitle="PIZZA"
            sectionDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <main className="container mx-auto mb-[56px] grid grid-cols-2 gap-6">
            {menus
              .filter((item) => item.category === "pizza")
              .map((item) => (
                <MenuCard
                  title={item.name}
                  description={item.recipe}
                  price={String(item.price)}
                  image={item.image}
                  key={item._id}
                />
              ))}
          </main>

          <DarkButton label="ORDER YOUR FAVOURITE FOOD" />
        </section>

        {/* salad section */}
        <section className="flex flex-col items-center justify-center">
          <SectionBanner
            sectionTitle="SALADS"
            sectionDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <main className="container mx-auto mb-[56px] grid grid-cols-2 gap-6">
            {menus
              .filter((item) => item.category === "salad")
              .map((item) => (
                <MenuCard
                  title={item.name}
                  description={item.recipe}
                  price={String(item.price)}
                  image={item.image}
                  key={item._id}
                />
              ))}
          </main>

          <DarkButton label="ORDER YOUR FAVOURITE FOOD" />
        </section>

        {/* soup section */}
        <section className="mb-8 flex flex-col items-center justify-center">
          <SectionBanner
            sectionTitle="SOUPS"
            sectionDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />

          <main className="container mx-auto mb-[56px] grid grid-cols-2 gap-6">
            {menus
              .filter((item) => item.category === "soup")
              .map((item) => (
                <MenuCard
                  title={item.name}
                  description={item.recipe}
                  price={String(item.price)}
                  image={item.image}
                  key={item._id}
                />
              ))}
          </main>

          <DarkButton label="ORDER YOUR FAVOURITE FOOD" />
        </section>
      </main>
    </section>
  );
}
