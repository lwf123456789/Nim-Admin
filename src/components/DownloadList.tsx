import React from "react";

const DownloadList: React.FC = () => {
  const files = [
    {
      name: "市场分析报告.pdf",
      size: "1.2MB",
      date: "2025年5月18日",
    },
    {
      name: "用户调研结果.xlsx",
      size: "780KB",
      date: "2025年4月22日",
    },
    {
      name: "产品设计方案.ppt",
      size: "2.3MB",
      date: "2025年3月15日",
    },
    {
      name: "技术文档.docx",
      size: "1.5MB",
      date: "2025年2月10日",
    },
  ];


  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex justify-between gap-2.5 px-6 py-3 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start"
          >
            <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
              <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
                <svg
                  className="fill-current"
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                    fill=""
                  />
                </svg>
              </div>

              <p className="font-medium text-black dark:text-white">
                {file.name}
              </p>
            </div>

            <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
              <p className="font-medium text-black dark:text-white">
                文件大小：{file.size}
              </p>
            </div>

            <div className="hidden w-5/12 xl:block">
              <p className="font-medium text-black dark:text-white">
                上传日期：{file.date}
              </p>
            </div>

            <div className="text-right sm:w-3/12 xl:w-2/12">
              <button className="inline-flex rounded bg-primary px-3 py-1 font-medium text-white hover:bg-opacity-90 sm:px-6 sm:py-2.5">
                下载
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadList;
