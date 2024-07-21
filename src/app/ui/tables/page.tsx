import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import TableFive from "@/components/Tables/TableFive";
import TableSix from "@/components/Tables/TableSix";
import DataTables from "@/components/DataTables";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="表格" />

      <div className="flex flex-col gap-10">
        <TableThree />
        <TableFive />
        <TableSix />
        <DataTables />
        <TableOne />
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
