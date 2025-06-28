export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image?: string;
}

export default function MenuCard({
  title,
  image,
  description,
  price,
}: MenuItem) {
  return (
    <div className="flex justify-between">
      {/* image */}
      <aside>
        <div className="h-[104px] w-[118px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] bg-[#D9D9D9]" />
      </aside>

      {/* title and description */}
      <aside>
        {/* title */}
        <h5 className="font-cinzel text-xl text-[#151515]">{title}</h5>

        {/* description */}
        <p className="font-inter mt-2 w-[441px] text-[16px] leading-[26px] text-[#737373]">
          {description}
        </p>
      </aside>

      {/* price */}
      <aside>
        <p className="font-inter text-xl leading-[26px] text-[#BB8506]">
          {process.env.CURRENCY}
          {price}
        </p>
      </aside>
    </div>
  );
}
