import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NotificationsOne from "@/components/Notifications/NotificationsOne";
import NotificationsTwo from "@/components/Notifications/NotificationsTwo";
import NotificationsThree from "@/components/Notifications/NotificationsThree";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons: 'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const Notifications: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="通知框" />

      <div className="flex flex-col gap-7.5">
        <NotificationsOne title="成功" subTitle="你的消息发送成功！" />
        <NotificationsTwo title="失败" subTitle="系统错误,请重新提交！" />
        <NotificationsThree title="新版本已发布！" subTitle="您订阅的Nim Admin新版本已发布。" action="立即更新" />
      </div>
    </DefaultLayout>
  );
};

export default Notifications;
