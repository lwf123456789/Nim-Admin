"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ModalTwo from "@/components/Modals/ModalTwo";
import ModalThree from "@/components/Modals/ModalThree";
const Modals: React.FC = () => {

  return (
    <>
      <Breadcrumb pageName="模态框" />

      <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center gap-5">
          <ModalTwo />
          <ModalThree />
        </div>
      </div>
    </>
  );
};

export default Modals;
