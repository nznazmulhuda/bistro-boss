import type { Metadata } from "next";
import { Inter, Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/navbar";

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
  description: "Powerd by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${raleway.variable}`}
    >
      <body className={`antialiased`}>
        {/* navbar */}
        <Navbar />

        {/* others body part */}
        {children}

        {/* footer */}
      </body>
    </html>
  );
}
