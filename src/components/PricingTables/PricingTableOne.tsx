import React from "react";

const PricingTableOne: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      {/* <!-- Pricing Item --> */}
      <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
        <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
          入门版
        </span>
        <h3>
          <span className="text-xl font-medium text-black dark:text-white">
            ¥
          </span>
          <span className="text-title-xxl2 font-bold text-black dark:text-white">
            9.9
          </span>
          <span className="font-medium"> 每月</span>
        </h3>

        <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
          包含功能
        </h4>

        <ul className="flex flex-col gap-3.5">
          <li className="font-medium">基础组件库</li>
          <li className="font-medium">无限制项目使用</li>
          <li className="font-medium">个人和商业用途</li>
          <li className="font-medium">社区支持</li>
          <li className="font-medium">每月更新</li>
        </ul>

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          立即购买
        </button>
      </div>

      {/* <!-- Pricing Item --> */}
      <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
        <span className="absolute -right-1 top-3.5">
          <svg
            width={109}
            height={34}
            viewBox="0 0 109 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0L106 0C107.657 0 109 1.34315 109 3V30L24 30L24 0Z"
              fill="#3C50E0"
            />
            <foreignObject x={24} y={0} width={81} height={30}>
              <div>
                <div className="mt-1 text-center font-satoshi text-sm font-medium text-white">
                  热销推荐
                </div>
              </div>
            </foreignObject>
            <path d="M0 0H24V30H0L19 15L0 0Z" fill="#3C50E0" />
            <path d="M105 34L109 30H105V34Z" fill="#2539C8" />
          </svg>
        </span>
        <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
          专业版
        </span>
        <h3>
          <span className="text-xl font-medium text-black dark:text-white">
            ¥
          </span>
          <span className="text-title-xxl2 font-bold text-black dark:text-white">
            68.00
          </span>
          <span className="font-medium"> 每月</span>
        </h3>

        <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
          包含功能
        </h4>

        <ul className="flex flex-col gap-3.5">
          <li className="font-medium">所有基础组件</li>
          <li className="font-medium">高级组件库</li>
          <li className="font-medium">优先支持</li>
          <li className="font-medium">每周更新</li>
          <li className="font-medium">一年免费更新</li>
        </ul>

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          立即购买
        </button>
      </div>

      {/* <!-- Pricing Item --> */}
      <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
        <span className="mb-2.5 block text-title-sm2 font-bold text-black dark:text-white">
          企业版
        </span>
        <h3>
          <span className="text-xl font-medium text-black dark:text-white">
            ¥
          </span>
          <span className="text-title-xxl2 font-bold text-black dark:text-white">
            268.00
          </span>
          <span className="font-medium"> 每月</span>
        </h3>

        <h4 className="mb-5 mt-7.5 text-lg font-medium text-black dark:text-white">
          包含功能
        </h4>

        <ul className="flex flex-col gap-3.5">
          <li className="font-medium">所有高级组件</li>
          <li className="font-medium">企业级支持</li>
          <li className="font-medium">定制开发服务</li>
          <li className="font-medium">专属技术顾问</li>
          <li className="font-medium">实时更新</li>
        </ul>

        <button className="mt-9 flex rounded-md border border-primary px-9 py-3 font-medium text-primary hover:bg-primary hover:text-white">
          立即购买
        </button>
      </div>
    </div>
  );
};

export default PricingTableOne;
