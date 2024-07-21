import React from "react";

const StorageChart: React.FC = () => {
  const totalStorage = 512;
  const usedStorage = 150;
  const usedPercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="relative rounded-sm border border-stroke bg-white py-8 pl-7.5 pr-12 shadow-default dark:border-strokedark dark:bg-boxdark xl:py-11 2xl:pl-12 2xl:pr-16">
      <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-9">
        <div className="relative flex items-center justify-center">
          <svg className="h-33 w-33 -rotate-90 transform">
            <circle
              className="text-stroke dark:text-strokedark"
              strokeWidth="16"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="66"
              cy="66"
            />
            <circle
              className="text-primary"
              strokeWidth="16"
              strokeDasharray={58 * 2 * Math.PI}
              strokeDashoffset={
                58 * 2 * Math.PI - (usedPercentage / 100) * 58 * 2 * Math.PI
              }
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="66"
              cy="66"
            />
          </svg>
          <span className="absolute text-xl font-bold text-black dark:text-white">
            {Math.round(usedPercentage)}%
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white">
            剩余存储空间
          </h3>
          <p className="mt-3.5 font-medium">
            <span className="text-black dark:text-white">{usedStorage}</span>
            <span className="text-sm"> GB</span> /
            <span className="text-black dark:text-white">{totalStorage}</span>
            <span className="text-sm"> GB</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorageChart;
