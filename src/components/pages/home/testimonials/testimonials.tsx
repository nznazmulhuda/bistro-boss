import TestimonialCards from "@/components/shared/card/testimonialCard";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";

export default function Testimonials() {
  return (
    <section className="container mx-auto mb-[130px]">
      {/* section title */}
      <SectionTitle
        title="TESTIMONIALS"
        semiTitle="---What Our Clients Say---"
      />

      {/* content */}
      <main>
        {/* swiper */}
        <TestimonialCards key={"testimonials"} />
      </main>
    </section>
  );
}
