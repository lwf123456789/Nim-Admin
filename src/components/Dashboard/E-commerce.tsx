"use client";
import React, { Suspense, lazy } from "react";
import CardDataStats from "../CardDataStats";
import { EyeIcon, SubscribeIcon, ProductIcon, UsersIcon } from "../Icons";
// 使用 React.lazy 进行代码分割
const ChartOne = lazy(() => import("../Charts/ChartOne"));
const ChartTwo = lazy(() => import("../Charts/ChartTwo"));
const ChartThree = lazy(() => import("../Charts/ChartThree"));
const ChatCard = lazy(() => import("../Chat/ChatCard"));
const TableOne = lazy(() => import("../Tables/TableOne"));
const MapOne = lazy(() => import("../Maps/MapOne"));

const statsData = [
  { title: "访客总数", total: "3.6K", rate: "0.43%", levelUp: true, Icon: EyeIcon },
  { title: "订阅总数", total: "268", rate: "4.35%", levelUp: true, Icon: SubscribeIcon },
  { title: "产品数量", total: "18", Icon: ProductIcon },
  { title: "用户量", total: "36.9K", rate: "0.06%", levelDown: true, Icon: UsersIcon },
];

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {statsData.map(({ title, total, rate, levelUp, levelDown, Icon }) => (
          <CardDataStats key={title} title={title} total={total} rate={rate} levelUp={levelUp} levelDown={levelDown}>
            <Icon />
          </CardDataStats>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Suspense fallback={<div>Loading...</div>}>
          <ChartOne />
          <ChartTwo />
          <ChartThree />
          <MapOne />
          <div className="col-span-12 xl:col-span-8">
            <TableOne />
          </div>
          <ChatCard />
        </Suspense>
      </div>
    </>
  );
};

export default ECommerce;
