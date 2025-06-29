import ShopCard from "@/components/shared/card/shopCard";
import { menus } from "../our-menu/page";

export default function OurShop() {
  return (
    <section>
      {/* main content */}
      <main className="container mx-auto grid grid-cols-3 gap-6">
        {menus.map((item) => (
          <ShopCard key={item._id} {...item} />
        ))}
      </main>
    </section>
  );
}
