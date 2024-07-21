import React from "react";
import Dropdowns from "@/components/Dropdowns";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const DropdownPage = () => {
  return (
    <DefaultLayout>
      <Dropdowns />
    </DefaultLayout>
  );
};

export default DropdownPage;
