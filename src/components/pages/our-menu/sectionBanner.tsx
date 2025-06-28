import ChefService from "@/assets/home/chef-service.jpg";

export default function SectionBanner({
  sectionTitle,
  sectionDescription,
}: {
  sectionTitle: string;
  sectionDescription: string;
}) {
  return (
    <section
      className="mt-11 mb-[106px] flex w-full items-center justify-center py-[175px]"
      style={{
        background: `url(${ChefService.src}) lightgray -805.091px 0px / 183.864% 134.833% no-repeat`,
      }}
    >
      <main className="container mx-auto flex flex-col items-center justify-center bg-[#15151599] px-42 py-24">
        {/* title */}
        <h3 className="font-cinzel text-[45px] text-white">{sectionTitle}</h3>

        <p className="font-inter text-center text-[16px] leading-[26px] text-white">
          {sectionDescription}
        </p>
      </main>
    </section>
  );
}
