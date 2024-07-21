import React from "react";

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

const users: User[] = [
  {
    name: "王伟",
    title: "互联网技术专家",
    email: "wangwei@example.com",
    role: "负责人",
  },
  {
    name: "李娜",
    title: "前端开发工程师",
    email: "lina@example.com",
    role: "成员",
  },
  {
    name: "张强",
    title: "区域技术主管",
    email: "zhangqiang@example.com",
    role: "版主",
  },
  {
    name: "陈晓东",
    title: "应用工程师",
    email: "chenxd@example.com",
    role: "管理员",
  },
  {
    name: "赵敏",
    title: "首席实施官",
    email: "zhaomin@example.com",
    role: "成员",
  },
];


const TableFive: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1170px]">
          {/* 表头开始 */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                姓名
              </h5>
            </div>

            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                职位
              </h5>
            </div>

            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                邮箱
              </h5>
            </div>

            <div className="col-span-2">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                角色
              </h5>
            </div>
          </div>
          {/* 表头结束 */}

          {/* 表体开始 */}
          <div className="bg-white dark:bg-boxdark">
            {users.map((user, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
              >
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.name}
                  </p>
                </div>

                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.title}
                  </p>
                </div>

                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.email}
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.role}
                  </p>
                </div>

                <div className="col-span-1">
                  <button className="float-right text-primary">编辑</button>
                </div>
              </div>
            ))}
          </div>
          {/* 表体结束 */}
        </div>
      </div>
    </div>
  );
};

export default TableFive;
