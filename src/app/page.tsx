import Banner from "@/components/pages/home/banner/banner";
import OrderSlider from "@/components/pages/home/order/order";
import SectionTitle from "@/components/shared/sectionTitle/sectionTitle";

export default function Homepage() {
  return (
    <>
      <Banner />

      <SectionTitle
        title="ORDER ONLINE"
        semiTitle="---From 11:00am to 10:00pm---"
      />

      <OrderSlider />
    </>
  );
}
