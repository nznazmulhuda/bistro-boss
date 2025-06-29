import PageBanner from "@/components/shared/pageBanner/pageBanner";
import PageBannerImage from "@/assets/shop/banner2.jpg";
import { ReactNode } from "react";
import NavLink from "@/components/shared/navlink/navLink";

export default function OurShopLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <section>
      {/* page banner */}
      <PageBanner
        bannerImage={PageBannerImage.src}
        semiTitle="Would you like to try a dish?"
        title="OUR SHOP"
      />

      {/* navbar */}
      <nav className="mt-[130px] mb-12">
        <ul className="flex items-center justify-center gap-14">
          <li>
            <NavLink isNested href="/our-shop" label="all" />
          </li>

          <li>
            <NavLink isNested href="/our-shop/salad" label="SALAD" />
          </li>

          <li>
            <NavLink isNested href="/our-shop/pizza" label="pizza" />
          </li>

          <li>
            <NavLink isNested href="/our-shop/soup" label="soups" />
          </li>

          <li>
            <NavLink isNested href="/our-shop/dessert" label="desserts" />
          </li>

          <li>
            <NavLink isNested href="/our-shop/drink" label="drinks" />
          </li>
        </ul>
      </nav>

      {/* nested page */}
      {children}
    </section>
  );
}
