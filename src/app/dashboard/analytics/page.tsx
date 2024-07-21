
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Marketing from "@/components/Dashboard/Marketing";
import Analytics from "@/components/Dashboard/Analytics";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const AnalyticsPage = () => {
  return (
    <DefaultLayout>
      <Marketing />
      <Analytics />
    </DefaultLayout>
  );
};

export default AnalyticsPage;
