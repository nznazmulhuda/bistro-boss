import RecommendCard from "@/components/shared/card/recommendCard";

export default function Recommend() {
  return (
    <section className="container mx-auto mb-[130px]">
      <main className="grid grid-cols-3 gap-6">
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </main>
    </section>
  );
}
