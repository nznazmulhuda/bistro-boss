interface PageBannerProps {
  title: string;
  semiTitle: string;
  bannerImage: string;
}

export default function PageBanner({
  title,
  semiTitle,
  bannerImage,
}: PageBannerProps) {
  return (
    <section
      className="flex h-[calc(100vh_-_155px)] w-full items-center justify-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="container mx-auto flex h-[450px] flex-col items-center justify-center bg-[#15151599]">
        <h1 className="font-cinzel text-[88px] font-bold text-white">
          {title}
        </h1>

        <p className="font-cinzel text-center text-2xl font-semibold text-white">
          {semiTitle}
        </p>
      </main>
    </section>
  );
}
