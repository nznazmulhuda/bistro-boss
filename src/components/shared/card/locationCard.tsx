import { ReactNode } from "react";

export interface LocationCardProps {
  icon: ReactNode;
  title: string;
  lists: string[];
}

export default function LocationCard(props: LocationCardProps) {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center border border-[#E8E8E8] p-8">
      {/* icon */}
      <div className="absolute top-0 flex w-full items-center justify-center bg-[#D1A054] py-6">
        {props.icon}
      </div>

      {/* details */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#F3F3F3]">
        <h5 className="font-inter text-2xl font-medium text-[#151515]">
          {props.title}
        </h5>

        {/* lists */}
        <ul>
          {props.lists.map((item) => (
            <li key={item} className="font-inter text-[16px] text-[#444]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
