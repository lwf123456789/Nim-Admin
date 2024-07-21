import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import RangeSliderOne from "@/components/ProFormElements/RangeSlider/RangeSliderOne";
import RangeSliderTwo from "@/components/ProFormElements/RangeSlider/RangeSliderTwo";
export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const SliderPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="滑动" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              滑动
            </h3>
          </div>
          <div className="flex flex-col gap-5.5 p-7.5">
            <RangeSliderOne />
            <RangeSliderTwo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SliderPage;
