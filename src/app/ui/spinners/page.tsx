import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SpinnerOne from "@/components/Spinners/SpinnerOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SpinnerTwo from "@/components/Spinners/SpinnerTwo";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const SpinnersPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="加载动画" />

      <div className="flex flex-col gap-7.5">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 sm:p-6 xl:p-9">
            <SpinnerOne />
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 sm:p-6 xl:p-9">
            <SpinnerTwo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SpinnersPage;
