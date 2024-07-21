import React from "react";
import Accordion from "@/components/Accordions";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const AccordionPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="折叠面板" />
      <Accordion />
    </DefaultLayout>
  );
};

export default AccordionPage;
