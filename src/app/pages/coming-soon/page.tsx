import React from "react";
import CountDownTimer from "@/components/CountDownTimer";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const ComingSoon: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="倒计时" />
      <div className="relative z-10 overflow-hidden bg-white px-4 dark:bg-boxdark-2 sm:px-8">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="no-scrollbar overflow-y-auto py-20">
            <div className="mx-auto w-full max-w-[600px]">
              <div className="text-center">
                <Link href="/" className="mx-auto mb-10 inline-flex">
                  <Image
                    width={246}
                    height={64}
                    src="https://cdni.iconscout.com/illustration/premium/thumb/time-money-balance-3178551-2666409.png?f=webp"
                    alt="Logo"
                    priority
                  />
                </Link>

                <h1 className="mb-2.5 text-3xl font-black text-black dark:text-white lg:text-4xl xl:text-[50px] xl:leading-[60px]">
                  Nim Admin
                </h1>

                <p className="font-medium">
                  感谢您的支持，我们将持续更新组件，优化代码，提高您的体验度！
                </p>
              </div>
            </div>

            {/* <!-- Countdown timer start --> */}
            <div className="mt-10 flex justify-center">
              <CountDownTimer />
            </div>
            {/* <!-- Countdown timer start --> */}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ComingSoon;
