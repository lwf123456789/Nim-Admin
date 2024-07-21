import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
