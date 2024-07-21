import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import VerifyLogin from "@/components/Auth/VerifyLogin";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const SignUp: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="验证码登录" />
      <VerifyLogin />
    </DefaultLayout>
  );
};

export default SignUp;
