import CRM from "@/components/Dashboard/CRM";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const CrmPage = () => {
  return (
    <DefaultLayout>
      <CRM />
    </DefaultLayout>
  );
};

export default CrmPage;
