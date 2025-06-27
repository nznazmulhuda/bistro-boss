interface SectionTitleProps {
  title: string;
  semiTitle: string;
}

export default function SectionTitle({ title, semiTitle }: SectionTitleProps) {
  return (
    <div className="mt-20 mb-12">
      <h5 className="font-inter text-center text-[20px] text-[#D99904] italic">
        {semiTitle}
      </h5>

      <div className="text- mx-auto w-[424px] border-y-4 border-[#E8E8E8] px-10 py-5">
        <h2 className="font-inter text-center text-[40px] text-[#151515]">
          {title}
        </h2>
      </div>
    </div>
  );
}
