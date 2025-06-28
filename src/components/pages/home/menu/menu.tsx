import MenuCard, { MenuItem } from "@/components/shared/card/menuCard";

const menuItems: MenuItem[] = [
  {
    title: "ROAST DUCK BREAST ------------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
  {
    title: "ESCALOPE DE VEAU ------------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
  {
    title: "FISH PARMENTIER ------------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
  {
    title: "TUNA NIÇOISE ------------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
  {
    title: "CHICKEN AND WALNUT SALAD ---------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
  {
    title: "ROASTED PORK BELLY ------------------",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    price: "14.5",
  },
];

export default function Menu() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-12">
        <main className="grid grid-cols-2 gap-6">
          {/* menu cards */}
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </main>

        <button className="font-inter cursor-pointer rounded-lg border-b-4 border-b-[#1F2937] px-[30px] py-5 text-xl font-medium text-[#1F2937] uppercase transition-all duration-350 ease-linear hover:bg-[#1F2937] hover:text-white">
          View Full Menu
        </button>
      </div>
    </section>
  );
}
