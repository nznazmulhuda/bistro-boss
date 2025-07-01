"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const HIDDEN_LAYOUT_ROUTES = ["/login", "/register"];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = HIDDEN_LAYOUT_ROUTES.some((path) =>
    pathname.startsWith(path),
  );

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
