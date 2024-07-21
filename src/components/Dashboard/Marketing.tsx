"use client";
import React, { Suspense, lazy } from "react";

// 使用 React.lazy 进行代码分割
const DataStatsTwo = lazy(() => import("../DataStats/DataStatsTwo"));
const ExternalLink = lazy(() => import("../ExternalLink"));
const ChartSix = lazy(() => import("../Charts/ChartSix"));
const FeaturedCampaigns = lazy(() => import("../FeaturedCampaigns"));
const Feedback = lazy(() => import("../Feedback"));

const Marketing: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <DataStatsTwo />
      </Suspense>
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-7">
          <Suspense fallback={<div>Loading...</div>}>
            <ChartSix />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ExternalLink />
          <FeaturedCampaigns />
          <Feedback />
        </Suspense>
      </div>
    </>
  );
};

export default React.memo(Marketing);
