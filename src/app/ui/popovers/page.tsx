import React from "react";
import Popovers from "@/components/Popovers";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const PopOversPage = () => {
  return (
    <DefaultLayout>
      <Popovers />
    </DefaultLayout>
  );
};

export default PopOversPage;
