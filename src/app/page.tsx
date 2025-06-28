import Banner from "@/components/pages/home/banner/banner";
import CallInAction from "@/components/pages/home/callInAction/callInAction";
import CallUs from "@/components/pages/home/callUs/callUs";
import Menu from "@/components/pages/home/menu/menu";
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

      <CallInAction />

      <SectionTitle title="FROM OUR MENU" semiTitle="---Check it out---" />

      <Menu />

      <CallUs />
    </>
  );
}
