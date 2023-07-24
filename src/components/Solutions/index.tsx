"use client";
import Card from "../Card";
import Carousel from "react-elastic-carousel";

export default function Solutions() {
  function TabletOrDesktop() {
    return (
      <div className="container px-6 space-y-10 mobile:hidden tablet:block">
        <div className="flex justify-start gap-10">
          <Card
            icon="icon1"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon="icon2"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </div>

        <div className="flex justify-end gap-10">
          <Card
            icon="icon3"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon="icon4"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </div>
      </div>
    );
  }

  function Mobile() {
    return (
      <div className="tablet:hidden w-full mt-10">
        <Carousel isRTL={false} showArrows={false}>
          <Card
            icon="icon1"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon="icon2"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />

          <Card
            icon="icon3"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
          <Card
            icon="icon4"
            title="For your company"
            subtitle="Crypto Solutions"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </Carousel>
      </div>
    );
  }

  return (
    <div className="desktop:grid desktop:grid-cols-2 container mobile:flex mobile:flex-col-reverse">
      <div className="flex flex-col items-center justify-center tablet:min-h-screen">
        <Mobile />
        <TabletOrDesktop />
      </div>

      <div className="flex flex-col justify-center ml-3 mobile:w-full tablet:px-11">
        <div className="font-bold text-orange-edusync tablet:w-590 mobile:space-y-2">
          <p className="text-xl mobile:text-md">Lorem ipsum</p>
          <h2 className="text-40 text-base-edusync mobile:text-2xl">
            Lorem ipsum
          </h2>
          <h2 className="text-base-edusync leading-8 font-normal desktop:pr-36 mobile:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </h2>
          <button className="mobile:hidden bg-orange-edusync text-md mt-8 text-white p-3 px-16 rounded-full flex items-center gap-2 initial">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}
