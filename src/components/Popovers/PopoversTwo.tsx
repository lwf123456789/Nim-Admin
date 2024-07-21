import React, { useState, useRef, useEffect } from "react";

const PopoversTwo: React.FC = () => {
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
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-5 xl:p-7.5">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 xl:w-1/4">
            <div className="mb-60 mt-10">
              <div className="relative inline-block">
                <button
                  ref={trigger}
                  onClick={() => setPopoversOpen(!popoversOpen)}
                  className="inline-flex rounded-md bg-primary px-5 py-2.5 font-medium text-white"
                >
                  弹窗标题
                </button>
                <div
                  ref={popovers}
                  onFocus={() => setPopoversOpen(true)}
                  onBlur={() => setPopoversOpen(false)}
                  className={`absolute left-full top-0 z-20 ml-3 w-max max-w-[533px] rounded-md bg-white p-4 font-medium drop-shadow-5 dark:bg-meta-4 sm:p-5 xl:p-7.5 ${popoversOpen === true ? "block" : "hidden"
                    }`}
                >
                  <span className="absolute -left-1 top-4 -z-10 h-2 w-2 rotate-45 rounded-r-sm bg-white dark:bg-meta-4"></span>
                  <h4 className="mb-4 text-title-md font-bold text-black dark:text-white">
                    确定要添加此项吗？
                  </h4>
                  <p className="font-medium">
                    您是否要将此功能添加到您的项目中？这将为您的应用程序提供更多的灵活性和功能。
                  </p>
                  <p className="mt-4 font-medium">
                    确保您已经测试并验证了所有相关的模块和依赖项。
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <button className="inline-block rounded bg-primary px-7.5 py-1 font-medium text-white hover:bg-opacity-90">
                      是
                    </button>
                    <button className="inline-block rounded bg-body px-7.5 py-1 font-medium text-white hover:bg-opacity-90">
                      否
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoversTwo;
