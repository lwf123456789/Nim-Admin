import React, { useState, useRef, useEffect } from "react";

const PopoversBottom: React.FC = () => {
  const [popoversOpen, setPopoversOpen] = useState(false);

  const trigger = useRef<any>(null);
  const popovers = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!popovers.current) return;
      if (
        !popoversOpen ||
        popovers.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setPopoversOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!popoversOpen || keyCode !== 27) return;
      setPopoversOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
      <div className="mt-10 text-center sm:mb-60">
        <div className="relative inline-block">
          <button
            ref={trigger}
            onClick={() => setPopoversOpen(!popoversOpen)}
            className="inline-flex rounded-md bg-primary px-5 py-2.5 font-medium text-white"
          >
            底部弹出
          </button>
          <div
            ref={popovers}
            onFocus={() => setPopoversOpen(true)}
            onBlur={() => setPopoversOpen(false)}
            className={`absolute left-1/2 top-full z-20 mt-3 w-max max-w-[311px] -translate-x-1/2 rounded bg-white drop-shadow-5 dark:bg-meta-4 ${popoversOpen === true ? "block" : "hidden"
              }`}
          >
            <span className="absolute -top-1.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-white dark:bg-meta-4"></span>
            <div className="border-b border-stroke p-3 dark:border-strokedark">
              <h4 className="text-center text-title-sm font-semibold text-black dark:text-white">
                提示标题
              </h4>
            </div>
            <div className="px-5 py-4.5 text-center">
              <p className="font-medium">
                您的代码已成功编译。请查看输出结果并进行进一步测试。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoversBottom;
