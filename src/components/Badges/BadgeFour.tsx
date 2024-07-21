import React from "react";

const BadgeFour: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4.5">
          <button className="inline-flex rounded-full border border-primary px-3 py-1 text-sm font-medium text-primary hover:opacity-80">
            Primary
          </button>
          <button className="inline-flex rounded-full border border-[#13C296] px-3 py-1 text-sm font-medium text-[#13C296] hover:opacity-80">
            Secondary
          </button>
          <button className="inline-flex rounded-full border border-[#212B36] px-3 py-1 text-sm font-medium text-[#212B36] hover:opacity-80 dark:border-white dark:text-white">
            Dark
          </button>
          <button className="inline-flex rounded-full border border-[#637381] px-3 py-1 text-sm font-medium text-[#637381] hover:opacity-80">
            Gray
          </button>
          <button className="inline-flex rounded-full border border-[#EFEFEF] px-3 py-1 text-sm font-medium text-[#212B36] hover:opacity-80 dark:text-white">
            Light
          </button>
          <button className="inline-flex rounded-full border border-[#F9C107] px-3 py-1 text-sm font-medium text-[#F9C107] hover:opacity-80">
            Warning
          </button>
          <button className="inline-flex rounded-full border border-[#DC3545] px-3 py-1 text-sm font-medium text-[#DC3545] hover:opacity-80">
            Danger
          </button>
          <button className="inline-flex rounded-full border border-[#3CA745] px-3 py-1 text-sm font-medium text-[#3CA745] hover:opacity-80">
            Success
          </button>
          <button className="inline-flex rounded-full border border-[#3BA2B8] px-3 py-1 text-sm font-medium text-[#3BA2B8] hover:opacity-80">
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BadgeFour;
