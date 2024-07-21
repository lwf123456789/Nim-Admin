import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const TermsConditions: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="隐私与条款" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-7.5 p-4 sm:p-6 xl:p-9">
          <div>
            <h3 className="mb-5 text-title-md2 font-bold text-black dark:text-white">
              服务条款
            </h3>

            <p className="font-medium">
              欢迎使用我们的服务。通过访问和使用我们的网站，即表示您同意遵守以下条款和条件。如果您不同意这些条款，请不要使用我们的服务。
            </p>

            <p className="mt-4.5 font-medium">
              我们保留随时修改这些条款的权利。任何变更将在发布后立即生效。请定期查看条款的更新。
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-title-sm2 font-bold leading-[30px] text-black dark:text-white">
              隐私政策
            </h4>

            <p className="font-medium">
              我们非常重视您的隐私，并承诺保护您的个人信息。我们的隐私政策解释了我们如何收集、使用和分享您的信息。
            </p>

            <p className="mt-4.5 font-medium">
              我们收集的信息包括您在注册账户、使用我们的服务、浏览我们的网站时提供的信息。这些信息可能包括您的姓名、电子邮件地址、电话号码等。
            </p>

            <p className="mt-4.5 font-medium">
              我们使用这些信息来提供、维护和改进我们的服务。我们不会未经您的同意向第三方出售或共享您的个人信息，除非法律要求或保护我们的权利。
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-title-sm2 font-bold leading-[30px] text-black dark:text-white">
              数据安全
            </h4>

            <p className="font-medium">
              我们采取合理的措施来保护您的个人信息免遭未经授权的访问、披露或破坏。然而，没有任何在线传输或存储方法是绝对安全的，因此我们不能保证其绝对安全。
            </p>

            <p className="mt-4.5 font-medium">
              如果我们发现您的个人信息遭到泄露或出现安全漏洞，我们将及时通知您并采取适当的补救措施。
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TermsConditions;
