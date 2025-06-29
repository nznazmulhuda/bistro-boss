"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  isNested?: boolean;
}

const NavLink = ({ href, label, isNested }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isNested) {
    return (
      <Link
        href={href}
        className={clsx(
          "font-inter border-b-4 pb-1.5 text-[24px] font-extrabold uppercase transition-all duration-200 ease-linear",
          isActive
            ? "border-b-[#BB8506] font-bold text-[#BB8506]"
            : "border-b-white font-medium text-[#151515] hover:border-b-[#bb8506d4] hover:font-semibold hover:text-[#bb8506d4]",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "font-inter text-[20px] font-extrabold uppercase",
        isActive ? "text-[#EEFF25]" : "text-white hover:text-[#edff25c2]",
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
