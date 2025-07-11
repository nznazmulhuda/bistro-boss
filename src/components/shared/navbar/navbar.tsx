import ShopingLogo from "@/assets/icon/shop.png";
import ProfileLogo from "@/assets/icon/profile.svg";
import Image from "next/image";
import NavLink from "../navlink/navLink";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 z-50 w-full -translate-x-1/2 bg-[#00000071] bg-none">
      <div className="mx-auto flex h-[130px] w-9/10 items-center justify-between">
        {/* logo */}
        <aside>
          <h1 className="font-cinzel text-[32px] leading-normal font-black text-white">
            BISTRO BOSS <br />
            <span className="text-2xl font-bold tracking-[9.12px]">
              Restaurant
            </span>
          </h1>
        </aside>

        {/* links */}
        <aside>
          <ul className="flex items-center gap-6">
            <li>
              <NavLink href="/" label="home" />
            </li>

            <li>
              <NavLink href="/contact-us" label="contact us" />
            </li>

            <li>
              <NavLink href="/dashboard" label="dashboard" />
            </li>

            <li>
              <NavLink href="/our-menu" label="our menu" />
            </li>

            <li className="flex items-center">
              <NavLink href="/our-shop" label="our shop" />
              {/* shoping logo */}
              <Image
                src={ShopingLogo}
                alt="Shop logo"
                className="h-[43px] w-[62px]"
              />
            </li>

            <li>
              <Link href={"/login"}>
                <button className="font-inter flex cursor-pointer items-center gap-2 text-[20px] font-extrabold text-white uppercase">
                  Sign in
                  <Image
                    src={ProfileLogo}
                    alt="Profile iamge"
                    className="h-[50px] w-[54px]"
                  />
                </button>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
}
