import React from "react";
import Messages from "@/components/Messages";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons: 'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const MessagesPage = () => {
  return (
    <DefaultLayout>
      <Messages />
    </DefaultLayout>
  );
};

export default MessagesPage;