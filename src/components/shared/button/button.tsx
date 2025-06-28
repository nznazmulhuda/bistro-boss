export default function DarkButton({ label }: { label: string }) {
  return (
    <button className="font-inter cursor-pointer rounded-lg border-b-4 border-b-[#1F2937] px-[30px] py-5 text-xl font-medium text-[#1F2937] uppercase transition-all duration-350 ease-linear hover:bg-[#1F2937] hover:text-white">
      {label}
    </button>
  );
}
