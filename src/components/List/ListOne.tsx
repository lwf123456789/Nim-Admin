import React from "react";

interface ListItem {
  text: string;
}

const listItems: ListItem[] = [
  { text: "了解前端开发的新趋势" },
  { text: "熟悉常用的后端框架" },
  { text: "掌握数据库设计的最佳实践" },
  { text: "学习使用现代化的开发工具" },
  { text: "提升代码质量和性能优化" },
];


const ListOne: React.FC = () => {
  return (
    <div className="min-w-[370px] max-w-max rounded-md border border-stroke py-1 dark:border-strokedark">
      <ul className="flex flex-col">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 border-b border-stroke px-5 py-3 last:border-b-0 dark:border-strokedark"
          >
            <span className="flex h-6.5 w-full max-w-6.5 items-center justify-center rounded-full bg-primary text-white">
              {index + 1}
            </span>
            <span> {item.text} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOne;
