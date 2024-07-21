import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Alert from "@/components/Alerts";
import { Metadata } from "next";
export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const AlertPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="提示框" />
      <Alert />
    </DefaultLayout>
  );
};

export default AlertPage;
