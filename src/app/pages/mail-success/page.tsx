import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const MailSuccess: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="成功页面" />
      <div className="bg-gray-100 h-110 mb-4">
        <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-10">
          <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">支付成功!</h3>
            <p className="text-gray-600 my-2">您已成功支付，请返回首页继续下一步！</p>
            <p> 感谢支持!  </p>
            <div className="py-10 text-center">
              <a href="#" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                返回首页
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
        <div className="mx-auto max-w-[490px] text-center">
          <Image
            width={400}
            height={300}
            src={"https://cdni.iconscout.com/illustration/premium/thumb/get-success-5560595-4634156.png?f=webp"}
            alt="illustration"
          />

          <div className="mt-7.5">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
              消息已成功发送！
            </h2>
            <p className="font-medium text-black dark:text-white">
              感谢您的联系。我们已经收到您的消息，并会尽快回复您。
            </p>
            <Link
              href="/"
              className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-opacity-90"
            >
              <svg
                className="fill-current"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7492 6.38125H2.73984L7.52109 1.51562C7.77422 1.2625 7.77422 0.86875 7.52109 0.615625C7.26797 0.3625 6.87422 0.3625 6.62109 0.615625L0.799219 6.52187C0.546094 6.775 0.546094 7.16875 0.799219 7.42188L6.62109 13.3281C6.73359 13.4406 6.90234 13.525 7.07109 13.525C7.23984 13.525 7.38047 13.4687 7.52109 13.3562C7.77422 13.1031 7.77422 12.7094 7.52109 12.4563L2.76797 7.64687H14.7492C15.0867 7.64687 15.368 7.36562 15.368 7.02812C15.368 6.6625 15.0867 6.38125 14.7492 6.38125Z"
                  fill=""
                />
              </svg>
              <span>返回首页</span>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MailSuccess;
