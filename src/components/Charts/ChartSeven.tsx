import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartSevenState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartSeven: React.FC = () => {
  const [state, setState] = useState<ChartSevenState>({
    series: [
      {
        name: "Received Amount",
        data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
      },
      {
        name: "Due Amount",
        data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
      },
    ],
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
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#C7D2E2"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        // enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
      // width: ['3.5', '3.5'],
    },

    markers: {
      size: 0,
    },
    // labels: {
    //   show: false,
    //   position: 'top',
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function (e) {
            return "";
            e;
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            客户关系管理预览
          </h4>
        </div>
      </div>
      <div>
        <div id="chartSeven" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <div className="flex flex-col text-center xsm:flex-row">
        <div className="border-stroke py-2 dark:border-strokedark xsm:w-1/2 xsm:border-r">
          <p className="font-medium">本月销售收入</p>
          <h4 className="mt-1 text-title-sm font-bold text-black dark:text-white">
            ￥45,070.00
          </h4>
        </div>
        <div className="py-2 xsm:w-1/2">
          <p className="font-medium">应收款项</p>
          <h4 className="mt-1 text-title-sm font-bold text-black dark:text-white">
            ￥32,400.00
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartSeven;
