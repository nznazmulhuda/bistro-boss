"use client";

import ShopCard from "@/components/shared/card/shopCard";
import menus, { MenuItems } from "@/lib/menu";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function DrinkPage () {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState<MenuItems[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const drinkData = menus.filter((item) => item.category === "drink");

  useEffect(() => {
    setDatas(drinkData.slice(page * 9 - 9, page * 9));
  }, [page]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (drinkData.length <= 0) {
    return (
      <section>
        <main className="mt-2 mb-20 flex items-center justify-center">
          <h5 className="font-inter text-5xl font-semibold">No data found!</h5>
        </main>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="container mx-auto">
      {/* main content */}
      <main className="grid grid-cols-3 gap-6">
        {datas.map((item) => (
          <ShopCard key={item._id} {...item} />
        ))}
      </main>

      {/* pagination */}
      <div className="mt-15 mb-24 flex items-center gap-4">
        {/* left button */}
        <button
          className={clsx(
            "cursor-pointer rounded-full p-2 text-3xl text-white transition-all duration-300 ease-linear",
            page <= 1 ? "bg-gray-400" : "bg-amber-800 hover:bg-amber-700",
          )}
          onClick={() => (setPage(page - 1), scrollToSection())}
          disabled={page <= 1}
        >
          <GoArrowLeft fontWeight={900} />
        </button>

        {/* page count */}
        <p className="text-xl font-bold">
          {page} / {Math.ceil(drinkData.length / 9)}
        </p>

        {/* right button */}
        <button
          className={clsx(
            "cursor-pointer rounded-full p-2 text-3xl text-white transition-all duration-300 ease-linear",
            page >= Math.ceil(drinkData.length / 9)
              ? "bg-gray-400"
              : "bg-amber-800 hover:bg-amber-700",
          )}
          onClick={() => (setPage(page + 1), scrollToSection())}
          disabled={page >= Math.ceil(drinkData.length / 9)}
        >
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
}
