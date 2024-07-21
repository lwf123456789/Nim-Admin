// components/DataStatsTwo.tsx
import React from "react";
import { SalesIcon, CustomersIcon, OrdersIcon, UpArrowIcon, DownArrowIcon } from "../Icons";

const statsData = [
  {
    title: "总销售额",
    total: "568.6W",
    rate: "+2.5%",
    rateClass: "text-meta-3",
    rateIcon: UpArrowIcon,
    rateText: "较上周",
    icon: SalesIcon,
    iconFill: "#3C50E0",
  },
  {
    title: "新客户数量",
    total: "12K",
    rate: "-1.5%",
    rateClass: "text-red",
    rateIcon: DownArrowIcon,
    rateText: "较上周",
    icon: CustomersIcon,
    iconFill: "#10B981",
  },
  {
    title: "订单数量",
    total: "116K",
    rate: "+2.6%",
    rateClass: "text-meta-3",
    rateIcon: UpArrowIcon,
    rateText: "较上周",
    icon: OrdersIcon,
    iconFill: "#F0950C",
  },
];

const DataStatsTwo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
      {statsData.map(({ title, total, rate, rateClass, rateIcon: RateIcon, rateText, icon: Icon, iconFill }) => (
        <div key={title} className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
          <Icon />
          <h4 className="mb-2 mt-5 font-medium">{title}</h4>
          <h3 className="mb-2 text-title-md font-bold text-black dark:text-white">{total}</h3>
          <p className="flex items-center gap-1 text-sm font-medium">
            <RateIcon />
            <span className={rateClass}>{rate}</span>
            <span>{rateText}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(DataStatsTwo);
