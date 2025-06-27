"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

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
