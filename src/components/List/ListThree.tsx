import React from "react";
import Image from "next/image";
import DropdownFive from "@/components/Dropdowns/DropdownFive";

interface ListItem {
  image: string;
  name: string;
  position: string;
}

const listItems: ListItem[] = [
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    name: "JR",
    position: "后端开发工程师",
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    name: "Lin",
    position: "前端开发工程师",
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    name: "GuoGuo",
    position: "UI 设计师",
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    name: "Frank",
    position: "高级架构师",
  },
];

const ListThree: React.FC = () => {
  return (
    <div className="w-full max-w-[360px] rounded-md border border-stroke py-2.5 dark:border-strokedark">
      <div className="flex flex-col">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4.5 hover:bg-[#F9FAFB] dark:hover:bg-meta-4"
          >
            <div className="flex items-center">
              <div className="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                <Image
                  width={50}
                  height={50}
                  src={item.image}
                  alt="user"
                  className="rounded-full object-cover object-center"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-black dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm">{item.position}</p>
              </div>
            </div>

            <div>
              <DropdownFive />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListThree;
