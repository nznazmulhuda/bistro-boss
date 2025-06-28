import ChefService from "@/assets/home/chef-service.jpg";

export default function CallInAction() {
  return (
    <section
      className="container mx-auto flex items-center justify-center"
      style={{
        background: `url(${ChefService.src}) lightgray -553.5px 0px / 183.864% 134.833% no-repeat`,
        padding: "120px 121px",
      }}
    >
      <main className="flex flex-col items-center justify-center bg-white px-42 py-24">
        {/* title */}
        <h3 className="font-cinzel text-[45px] text-[#151515]">Bistro Boss</h3>

        <p className="font-inter text-center text-[16px] leading-[26px] text-[#151515]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </main>
    </section>
  );
}
