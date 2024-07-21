import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Avatars from "@/components/Avatars";
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
      <Breadcrumb pageName="头像" />
      <Avatars />
    </DefaultLayout>
  );
};

export default AlertPage;
