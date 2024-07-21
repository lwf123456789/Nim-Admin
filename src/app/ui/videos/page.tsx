import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import VideosItem from "@/components/VideosItem";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};

const Videos: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Videos" />

      <div className="flex flex-col gap-7.5">
        <VideosItem title="正常比例" embeds videoUrl="https://www.bilibili.com/video/BV1dt4y1f7S6/?spm_id_from=333.337.search-card.all.click" />
        <VideosItem title="4:3" aspectFour videoUrl="https://www.bilibili.com/video/BV1ow4m1a7yL/?spm_id_from=333.1007.tianma.1-1-1.click" />
        <VideosItem title="21:9" aspectTwentyOne videoUrl="https://www.bilibili.com/video/BV15w4m1Y72a/?spm_id_from=333.1073.high_energy.content.click" />
        <VideosItem title="1:1" aspectOne videoUrl="https://www.bilibili.com/video/BV1pz421q7GK/?spm_id_from=333.1007.tianma.2-1-4.click" />
      </div>
    </DefaultLayout>
  );
};

export default Videos;
