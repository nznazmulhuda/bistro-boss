import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  semiTitle: string;
  isDark?: boolean;
}

export default function SectionTitle({
  title,
  semiTitle,
  isDark,
}: SectionTitleProps) {
  return (
    <div className="mt-20 mb-12">
      <h5 className="font-inter mb-4 text-center text-[20px] text-[#D99904] italic">
        {semiTitle}
      </h5>

      <div className="text- mx-auto w-[424px] border-y-4 border-[#E8E8E8] py-5">
        <h2
          className={clsx(
            `font-inter text-center text-[40px] ${isDark ? "text-white" : "text-[#151515]"}`,
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
