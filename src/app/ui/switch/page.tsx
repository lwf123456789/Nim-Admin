import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
export const metadata: Metadata = {
  title: "Next.js Spinners | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Spinners page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const SwitchPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="开关" />

      <div className="flex flex-col gap-7.5">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                开关切换
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div>
  
      </div>
    </DefaultLayout>
  );
};

export default SwitchPage;
