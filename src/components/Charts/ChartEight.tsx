import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartEightState {
  series: number[];
}

const ChartEight: React.FC = () => {
  const [state, setState] = useState<ChartEightState>({
    series: [70, 20, 10],
  });

  // Update the state
  const updateState = () => {
    setState((prevState) => ({
      ...prevState,
      // Update the desired properties
    }));
  };
  updateState;

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#0FADCF", "#80CAEE", "#3C50E0"],
    labels: ["Desktop", "Tablet", "Mobile"],
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 250,
          },
        },
      },
    ],
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            销售人员设备
          </h4>
        </div>
      </div>
      <div className="mb-2">
        <div id="chartEight" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              移动端
            </span>
          </div>

          <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-xs font-medium text-white">
            10%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-secondary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              平板
            </span>
          </div>

          <span className="inline-block rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-white">
            20%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-meta-10"></span>
            <span className="font-medium text-black-2 dark:text-white">
              电脑
            </span>
          </div>

          <span className="inline-block rounded-md bg-meta-10 px-1.5 py-0.5 text-xs font-medium text-white">
            70%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartEight;
