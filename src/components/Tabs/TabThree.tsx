import React, { useState } from "react";
import Link from "next/link";

const TabThree: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "text-primary border-primary";
  const inactiveClasses = "border-transparent";

  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 1 ? activeClasses : inactiveClasses
            }`}
          onClick={() => setOpenTab(1)}
        >
          标签一
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 2 ? activeClasses : inactiveClasses
            }`}
          onClick={() => setOpenTab(2)}
        >
          标签二
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 3 ? activeClasses : inactiveClasses
            }`}
          onClick={() => setOpenTab(3)}
        >
          标签三
        </Link>
        <Link
          href="#"
          className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base ${openTab === 4 ? activeClasses : inactiveClasses
            }`}
          onClick={() => setOpenTab(4)}
        >
          标签四
        </Link>
      </div>

      <div>
        <div className={`leading-relaxed ${openTab === 1 ? "block" : "hidden"}`}>
          欢迎使用我们的开发者工具！我们提供了一系列强大的功能来帮助您更高效地编写代码和管理项目。
        </div>
        <div className={`leading-relaxed ${openTab === 2 ? "block" : "hidden"}`}>
          学习如何集成第三方API以增强您的应用程序功能。我们的指南涵盖了从身份验证到数据处理的各种集成场景。
        </div>
        <div className={`leading-relaxed ${openTab === 3 ? "block" : "hidden"}`}>
          探索高级编程技术和最佳实践，提升您的开发技能。我们提供了丰富的教程和示例代码，帮助您掌握复杂的开发概念。
          <br />
          <br />
          无论是前端开发还是后端开发，我们的资源都能满足您的需求。确保您定期检查更新，获取最新的技术动态和工具升级。
        </div>
        <div className={`leading-relaxed ${openTab === 4 ? "block" : "hidden"}`}>
          加入我们的开发者社区，与其他开发者交流经验和技巧。参与讨论，分享您的项目，获取宝贵的反馈和建议。
        </div>
      </div>
    </div>
  );
};

export default TabThree;
