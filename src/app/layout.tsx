import type { Metadata } from "next";
import { Inter, Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/shared/layout/layoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Bistro Boss Restaurant",
  description: "Powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${raleway.variable}`}
    >
      <body className="antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
