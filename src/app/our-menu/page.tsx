import BannerImage from "@/assets/menu/banner3.jpg";
import SectionBanner from "@/components/pages/our-menu/sectionBanner";
import DarkButton from "@/components/shared/button/button";
import MenuCard from "@/components/shared/card/menuCard";
import PageBanner from "@/components/shared/pageBanner/pageBanner";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";

export interface MenuItems {
  _id: string;
  name: string;
  recipe: string;
  image: string;
  category: string;
  price: number;
}

export const menus: MenuItems[] = [
  {
    _id: "642c155b2c4774f05c36eeaa",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "drinks",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee7c",
    name: "Escalope de Veau",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "popular",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36ee88",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee7a",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "popular",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8c",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee94",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee9e",
    name: "Breton Fish Stew",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 12.9,
  },
  {
    _id: "642c155b2c4774f05c36eea6",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36eeaf",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee89",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8a",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee96",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36ee81",
    name: "Tuna Niçoise",
    recipe:
      "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini",
    image: "https://picsum.photos/424/300",
    category: "offered",
    price: 10.5,
  },
  {
    _id: "642c155b2c4774f05c36ee84",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eea4",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36eea5",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36ee87",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee83",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "offered",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee7f",
    name: "Roasted Pork Belly",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "popular",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eea8",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36eeba",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "drinks",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee80",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "offered",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36ee90",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb0",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8d",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8e",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36eea7",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36ee99",
    name: "Goats Cheese Pizza",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb3",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb5",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb6",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36eeb8",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee7e",
    name: "Fish Parmentier",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "popular",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8b",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee8f",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee91",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee97",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36eea0",
    name: "Roasted Pork Belly",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eea9",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36ee85",
    name: "Tuna Niçoise",
    recipe:
      "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 10.5,
  },
  {
    _id: "642c155b2c4774f05c36ee93",
    name: "Tuna Niçoise",
    recipe:
      "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 10.5,
  },
  {
    _id: "642c155b2c4774f05c36ee95",
    name: "Chicken and Walnut Salad",
    recipe:
      "Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 13.5,
  },
  {
    _id: "642c155b2c4774f05c36ee9b",
    name: "Goats Cheese Pizza",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb7",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36ee9c",
    name: "Breton Fish Stew",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 12.9,
  },
  {
    _id: "642c155b2c4774f05c36ee9d",
    name: "Goats Cheese Pizza",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeac",
    name: "Roasted Pork Belly",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb4",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee98",
    name: "Breton Fish Stew",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 12.9,
  },
  {
    _id: "642c155b2c4774f05c36ee82",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "offered",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee86",
    name: "Escalope de Veau",
    recipe:
      "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "https://picsum.photos/424/300",
    category: "dessert",
    price: 12.5,
  },
  {
    _id: "642c155b2c4774f05c36ee9a",
    name: "Breton Fish Stew",
    recipe:
      "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing",
    image: "https://picsum.photos/424/300",
    category: "pizza",
    price: 12.9,
  },
  {
    _id: "642c155b2c4774f05c36eeab",
    name: "Goats Cheese Pizza",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "salad",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeb1",
    name: "Fish Parmentier",
    recipe:
      "Sautéed breaded veal escalope with watercress, lemon and veal jus.",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 9.5,
  },
  {
    _id: "642c155b2c4774f05c36eead",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36eeae",
    name: "Tuna Niçoise",
    recipe:
      "Warm goats cheese and roasted vegetable salad with black olive tapenade crostini",
    image: "https://picsum.photos/424/300",
    category: "soup",
    price: 10.5,
  },
];

export default function OurMenu() {
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
