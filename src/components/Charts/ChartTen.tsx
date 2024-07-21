import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

const Chart: React.FC = () => {
  const [state, setState] = useState<ChartState>({
    series: [
      {
        name: "媒体",
        data: [268, 385, 201, 298, 187, 195, 291],
      },
      {
        name: "照片",
        data: [345, 160, 291, 187, 195, 298, 201],
      },
      {
        name: "文档",
        data: [195, 260, 191, 258, 265, 160, 213],
      },
    ],
  });

  const options: ApexOptions = {
    colors: ["#3C50E0", "#13C296", "#F2994A"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 318,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 1,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontSize: "16px",
      fontWeight: 500,
      offsetY: -5,
      markers: {
        radius: 99,
        width: 16,
        height: 16,
      },
    },
    grid: {
      strokeDashArray: 7,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-between md:p-6 xl:p-7.5">
        <div>
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            活动图表
          </h2>
        </div>
        <div className="flex items-center">
          <p className="font-medium uppercase text-black dark:text-white">
            排序方式:
          </p>
          <div className="relative z-20 inline-block">
            <select
              name="sort"
              id="sort"
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
            >
              <option value="monthly" className="dark:bg-boxdark">
                月度
              </option>
              <option value="weekly" className="dark:bg-boxdark">
                每周
              </option>
            </select>
            <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                  fill="#64748B"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="px-7.5">
        <div id="chart" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={318}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
