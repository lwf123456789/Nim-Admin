import React from "react";
import DropdownDefault from "./Dropdowns/DropdownDefault";
import Image from "next/image";

type FeedbackData = {
  avatar: string;
  name: string;
  feedback: string;
  time: number;
};

const feedbackData: FeedbackData[] = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10770/10770873.png",
    name: "李华",
    feedback: `这是一个开发者社区，专注于分享和交流编程技巧和最佳实践。`,
    time: 1,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10061/10061694.png",
    name: "王伟",
    feedback: `这里有各种各样的技术文章和教程，非常适合初学者和经验丰富的开发者。`,
    time: 2,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/1995/1995515.png",
    name: "赵敏",
    feedback: `社区定期举办编程比赛和黑客松，帮助开发者提升技能并获得奖励。`,
    time: 3,
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="flex items-start justify-between border-b border-stroke px-6 py-5 dark:border-strokedark">
        <div>
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            消息时间线
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-7">
          {feedbackData.map((feedback, key) => (
            <div className="relative z-1 flex gap-5.5" key={key}>
              <div className="h-16 w-full max-w-16 rounded-full border-[3px] border-stroke dark:border-strokedark">
                <Image
                  width={56}
                  height={56}
                  src={feedback.avatar}
                  alt="User"
                />
              </div>

              <div>
                <p className="text-black dark:text-white">
                  <span className="font-medium">{feedback.name}</span>
                </p>
                <span className="mt-1 block text-sm">
                  {" "}
                  {feedback.time} 小时前
                </span>
                <p className="mt-2.5 text-black dark:text-white">
                  {feedback.feedback}
                </p>
              </div>

              {key === 0 && (
                <span className="absolute left-8 -z-1 block h-[300%] w-[1px] border-l border-dashed border-strokedark dark:border-stroke"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
