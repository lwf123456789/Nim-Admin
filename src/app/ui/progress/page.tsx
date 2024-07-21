import React from "react";
import Progress from "@/components/Progress";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const ProgressPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Progress />
    </DefaultLayout>
  );
};

export default ProgressPage;
