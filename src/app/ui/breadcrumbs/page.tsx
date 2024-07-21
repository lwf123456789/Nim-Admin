import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const BreadcrumbsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumbs />
    </DefaultLayout>
  );
};

export default BreadcrumbsPage;
