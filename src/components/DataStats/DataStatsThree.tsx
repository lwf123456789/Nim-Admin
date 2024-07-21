import React from "react";

const DataStatsThree: React.FC = () => {
  return (
    <div>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            CRM客户关系
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                197
              </h3>
              <p className="font-medium">新客户数量</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                      fill="white"
                    />
                  </svg>
                  <span>+2.5%</span>
                </span>

                <span className="text-sm font-medium">上个月</span>
              </span>
            </div>

            <div>
              <svg className="h-17.5 w-17.5 -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (60 / 100) * 30 * 2 * Math.PI
                  }
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                12
              </h3>
              <p className="font-medium">待办任务</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-red p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0157 5.24683C12.7532 5.24683 12.5344 5.46558 12.5344 5.72808V8.1562L9.40631 6.07808C8.94693 5.77183 8.37818 5.77183 7.91881 6.07808L5.0313 8.00308C4.92193 8.09058 4.7688 8.09058 4.63755 8.00308L1.24693 5.74995C1.02818 5.59683 0.721929 5.66245 0.568804 5.8812C0.415679 6.09995 0.481304 6.4062 0.700054 6.55933L4.09068 8.81245C4.55005 9.1187 5.1188 9.1187 5.57818 8.81245L8.46568 6.88745C8.57506 6.79995 8.72818 6.79995 8.85943 6.88745L11.6594 8.7687H9.4938C9.23131 8.7687 9.01256 8.98745 9.01256 9.24995C9.01256 9.51245 9.23131 9.7312 9.4938 9.7312H13.0157C13.2782 9.7312 13.4969 9.51245 13.4969 9.24995V5.72808C13.5188 5.46558 13.2782 5.24683 13.0157 5.24683Z"
                      fill="white"
                    />
                  </svg>
                  <span>+1.5%</span>
                </span>

                <span className="text-sm font-medium">上周</span>
              </span>
            </div>

            <div x-data="{percent : 30}">
              <svg className="h-17.5 w-17.5 -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (30 / 100) * 30 * 2 * Math.PI
                  }
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                512
              </h3>
              <p className="font-medium">客户满意度</p>
              <span className="mt-2 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                      fill="white"
                    />
                  </svg>
                  <span>+0.5%</span>
                </span>

                <span className="text-sm font-medium">上周</span>
              </span>
            </div>

            <div>
              <svg className="h-17.5 w-17.5 -rotate-90 transform">
                <circle
                  className="text-stroke dark:text-strokedark"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (70 / 100) * 30 * 2 * Math.PI
                  }
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="35"
                  cy="35"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStatsThree;
