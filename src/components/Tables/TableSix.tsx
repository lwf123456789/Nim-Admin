import React from "react";
import DropdownFour from "@/components/Dropdowns/DropdownFour";

interface TableData {
  name: string;
  position: string;
  email: string;
  role: string;
}

const data: TableData[] = [
  {
    name: "王伟",
    position: "互联网技术专家",
    email: "wangwei@example.com",
    role: "负责人",
  },
  {
    name: "李娜",
    position: "前端开发工程师",
    email: "lina@example.com",
    role: "成员",
  },
  {
    name: "张强",
    position: "区域技术主管",
    email: "zhangqiang@example.com",
    role: "版主",
  },
  {
    name: "陈晓东",
    position: "应用工程师",
    email: "chenxd@example.com",
    role: "管理员",
  },
];

const TableSix: React.FC = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="min-w-[1170px]">
        {/* 表头开始 */}
        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-3">
            <h5 className="font-medium text-white">姓名</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">职位</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">邮箱</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">角色</h5>
          </div>
          <div className="col-span-1">
            <h5 className="text-right font-medium text-white">编辑</h5>
          </div>
        </div>
        {/* 表头结束 */}

        {/* 表体开始 */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{item.name}</p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.position}
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.email}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">{item.role}</p>
              </div>
              <div className="relative col-span-1">
                <DropdownFour
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= data.length - 2
                        ? "bottom-full mb-1"
                        : ""
                  }
                />
              </div>
            </div>
          ))}
        </div>
        {/* 表体结束 */}
      </div>
    </div>
  );
};

export default TableSix;
