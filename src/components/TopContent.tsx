import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";

const TopContent: React.FC = () => {
  return (
    <div className="mb-4 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:mb-6 md:p-6 xl:p-7.5 2xl:mb-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            热门网站
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-10 py-2">
          <div className="col-span-6">
            <p className="text-sm">URL</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">使用者</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">热度</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[30%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
          <a href="https://www.google.com" className="text-sm">https://www.google.com</a>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">21M</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">80M</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[30%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <a href="https://www.chatgpt.com" className="text-sm">https://chatgpt.com</a>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">15M</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">100M</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[30%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <a href="https://kimi.moonshot.cn" className="text-sm">https://kimi.moonshot.cn</a>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">1M</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">60M</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[30%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <a href="https://www.baidu.com" className="text-sm">https://www.baidu.com</a>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">8M</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">10M</p>
          </div>
        </div>
        <div className="relative z-1 grid grid-cols-10 py-2">
          <span className="absolute left-0 top-0 -z-1 h-full w-[30%] rounded bg-gray dark:bg-meta-4"></span>
          <div className="col-span-6 pl-3.5">
            <a href="https://www.douyin.com" className="text-sm">https://www.douyin.com</a>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">10M</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">15M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
