"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PopoversOne from "@/components/Popovers/PopoversOne";
import PopoversTwo from "@/components/Popovers/PopoversTwo";

const Popovers: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="气泡卡片" />

      <div className="flex flex-col gap-7.5">
        <PopoversOne />
        <PopoversTwo />
      </div>
    </>
  );
};

export default Popovers;
