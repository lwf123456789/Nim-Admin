import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Badge from "@/components/Badges";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const TagPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="标签" />

      <div className="flex flex-col gap-7.5">
        <Badge />
      </div>
    </DefaultLayout>
  );
};

export default TagPage;
