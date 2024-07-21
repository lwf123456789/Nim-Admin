import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PricingTableOne from "@/components/PricingTables/PricingTableOne";
import PricingTableTwo from "@/components/PricingTables/PricingTableTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const PricingTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="套餐页面" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <PricingTableOne />
        <PricingTableTwo />
      </div>
    </DefaultLayout>
  );
};

export default PricingTables;
