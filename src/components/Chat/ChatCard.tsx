import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  // 3-在线 6-最近 1-下线
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10770/10770873.png",
    name: "李华",
    text: "你今天怎么样？",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10770/10770873.png",
    name: "王强",
    text: "期待你的回复！",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10061/10061694.png",
    name: "张伟",
    text: "有什么新消息？",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/1995/1995515.png",
    name: "刘洋",
    text: "太好了！",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/10061/10061876.png",
    name: "赵静",
    text: "下午有空吗？",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/128/6214/6214046.png",
    name: "孙敏",
    text: "一起吃个饭吧？",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];


const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        聊天对象列表
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${
                  chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                } `}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
