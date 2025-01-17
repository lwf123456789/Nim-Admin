import React from "react";

const ProgressOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-10">
        <div className="flex max-w-[470px] flex-col gap-7">
          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-10/12 rounded-full bg-primary"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-8/12 rounded-full bg-primary"></div>
          </div>

          <div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark">
            <div className="absolute left-0 h-full w-11/12 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOne;
