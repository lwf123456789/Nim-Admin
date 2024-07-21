import { ApexOptions } from "apexcharts";
import React, { useState, useMemo,useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },  
    toolbar: {
      show: false,
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
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
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
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
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
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const dayData = [
    {
      name: "总收入",
      data: [10, 13, 8, 6, 10, 12, 11, 8, 6, 10, 8, 12],
    },
    {
      name: "总销量",
      data: [12, 15, 12, 10, 14, 14, 13, 12, 10, 12, 10, 14],
    },
  ];

  const monthData = [
    {
      name: "总收入",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
    },
    {
      name: "总销量",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
    },
  ];

  const yearData = [
    {
      name: "总收入",
      data: [46, 55, 42, 40, 70, 63, 58, 78, 82, 65, 78, 75],
    },
    {
      name: "总销量",
      data: [60, 78, 56, 43, 83, 73, 63, 86, 95, 78, 83, 80],
    },
  ];

  const [state, setState] = useState<ChartOneState>({
    series: yearData,
  });

  const [selectedFilter, setSelectedFilter] = useState<"day" | "month" | "year">("year");

  const handleFilterChange = (filter: "day" | "month" | "year") => {
    setSelectedFilter(filter);
    switch (filter) {
      case "day":
        setState({ series: dayData });
        break;
      case "month":
        setState({ series: monthData });
        break;
      case "year":
        setState({ series: yearData });
        break;
    }
  };

  // 定时切换
  // useEffect(() => {
  //   const filters: ("day" | "month" | "year")[] = ["day", "month", "year"];
  //   let currentFilterIndex = filters.indexOf(selectedFilter);
  //   const intervalId = setInterval(() => {
  //     currentFilterIndex = (currentFilterIndex + 1) % filters.length;
  //     handleFilterChange(filters[currentFilterIndex]);
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, [selectedFilter]);

  const chartOptions = useMemo(() => options, []);

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;


  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">总收入</p>
              {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">总销量</p>
              {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              onClick={() => handleFilterChange("day")}
              className={`rounded px-3 py-1 text-xs font-medium ${selectedFilter === "day" ? "bg-primary dark:bg-primary text-white" : "text-black"
                } hover:bg-primary hover:text-white dark:bg-boxdark dark:hover:bg-primary dark:text-white`}
            >
              日
            </button>
            <button
              onClick={() => handleFilterChange("month")}
              className={`rounded px-3 py-1 text-xs font-medium ${selectedFilter === "month" ? "bg-primary dark:bg-primary text-white" : "text-black"
                } hover:bg-primary hover:text-white dark:bg-boxdark dark:hover:bg-primary dark:text-white`}
            >
              月
            </button>
            <button
              onClick={() => handleFilterChange("year")}
              className={`rounded px-3 py-1 text-xs font-medium ${selectedFilter === "year" ? "bg-primary dark:bg-primary text-white" : "text-black"
                } hover:bg-primary hover:text-white dark:bg-boxdark dark:hover:bg-primary dark:text-white`}
            >
              年
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
