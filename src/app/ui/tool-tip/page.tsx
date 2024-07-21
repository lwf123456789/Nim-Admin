import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TooltipsOne from "@/components/ToolTips/TooltipsOne";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const Tooltips: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="提示框" />

      <div className="flex flex-col gap-7.5">
        <TooltipsOne />
      </div>
    </DefaultLayout>
  );
};

export default Tooltips;
