import React from "react";
import Link from "next/link";
import CheckMark from "../CheckMarks/CheckMark";
import CloseMark from "../CloseMarks/CloseMark";

const PricingTableTwo: React.FC = () => {
  return (
    <div className="relative z-10 overflow-hidden rounded-sm border border-stroke bg-white p-11 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="w-full overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/4 min-w-[200px] px-5"></th>
              <th className="w-1/4 min-w-[200px] px-10">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    入门版
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      ¥9.9
                    </span>
                    <span className="font-medium">每月</span>
                  </h4>
                  <p className="mb-6 text-base font-medium">
                    适合个人开发者和自由职业者。
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    立即购买
                  </Link>
                </div>
              </th>
              <th className="w-1/4 min-w-[200px] px-10">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    专业版
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      ¥68
                    </span>
                    <span className="font-medium">每月</span>
                  </h4>
                  <p className="mb-6 font-medium">
                    适合小型企业和团队使用。
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-[#13C296] p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    立即购买
                  </Link>
                </div>
              </th>
              <th className="w-1/4 min-w-[200px] px-10">
                <div className="mb-10 text-left">
                  <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                    企业版
                  </span>
                  <h4 className="mb-4">
                    <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                      ¥168
                    </span>
                    <span className="font-medium">每月</span>
                  </h4>
                  <p className="mb-6 font-medium">
                    适合大企业和组织使用。
                  </p>
                  <Link
                    href="#"
                    className="block w-full rounded-md bg-orange-400 p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                  >
                    立即购买
                  </Link>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="font-medium text-black dark:text-white">
                  主要功能
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  入门版
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  专业版
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <h5 className="text-center font-medium text-black dark:text-white">
                  企业版
                </h5>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">开发团队</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">1 位开发者</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 位开发者</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">20 位开发者</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">项目数量</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">5 个项目</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">10 个项目</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">不限项目</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">邮件支持</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">6 个月</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">12 个月</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="text-center font-medium">24 个月</p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">所有专业组件</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
            </tr>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="font-medium">设计源文件</p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CloseMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-strokedark">
                <p className="flex justify-center text-center">
                  <CheckMark />
                </p>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <div>
      </div>
    </div>
  );
};

export default PricingTableTwo;
