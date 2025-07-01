"use client";

import ShopCard from "@/components/shared/card/shopCard";
import menus, { MenuItems } from "@/lib/menu";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function Saladpage() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState<MenuItems[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const saladData = menus.filter((item) => item.category === "salad");

  useEffect(() => {
    setDatas(saladData.slice(page * 9 - 9, page * 9));
  }, [page, saladData]);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
          {page} / {Math.ceil(saladData.length / 9)}
        </p>

        {/* right button */}
        <button
          className={clsx(
            "cursor-pointer rounded-full p-2 text-3xl text-white transition-all duration-300 ease-linear",
            page >= Math.ceil(saladData.length / 9)
              ? "bg-gray-400"
              : "bg-amber-800 hover:bg-amber-700",
          )}
          onClick={() => (setPage(page + 1), scrollToSection())}
          disabled={page >= Math.ceil(saladData.length / 9)}
        >
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
}
