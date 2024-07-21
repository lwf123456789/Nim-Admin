import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PaginationOne from "@/components/Paginations/PaginationOne";
import PaginationTwo from "@/components/Paginations/PaginationTwo";
import PaginationThree from "@/components/Paginations/PaginationThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const Pagination: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="分页器" />

      <div className="flex flex-col gap-7.5">
        <PaginationOne />
        <PaginationTwo />
        <PaginationThree />
      </div>
    </DefaultLayout>
  );
};

export default Pagination;
