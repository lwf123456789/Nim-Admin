import Breadcrumb from "../Breadcrumbs/Breadcrumb";

interface Day {
  full: string;
  short: string;
}

const daysOfWeek:Day[] = [
  { full: "周一", short: "一" },
  { full: "周二", short: "二" },
  { full: "周三", short: "三" },
  { full: "周四", short: "四" },
  { full: "周五", short: "五" },
  { full: "周六", short: "六" },
  { full: "周日", short: "日" },
];

const dates: number[][] = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31],
];
const Calendar = () => {
  const renderDayHeaders = (): JSX.Element[] =>
    daysOfWeek.map((day, index) => (
      <th
        key={index}
        className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
      >
        <span className="hidden lg:block">{day.full}</span>
        <span className="block lg:hidden">{day.short}</span>
      </th>
    ));

    const renderCells = (week: number[]): JSX.Element[] =>
    week.map((date, index) => (
      <td
        key={index}
        className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"
      >
        <span className="font-medium text-black dark:text-white">{date}</span>
        {date === 1 && (
          <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
            <span className="group-hover:text-primary md:hidden">全栈开发</span>
            <div className="event invisible absolute left-2 z-99 mb-1 flex w-[480%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[480%] md:opacity-100">
              <span className="event-name text-sm font-semibold text-black dark:text-white">
                全栈开发
              </span>
              <span className="time text-sm font-medium text-black dark:text-white">
                1-5号
              </span>
            </div>
          </div>
        )}
          {date === 9 && (
          <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
            <span className="group-hover:text-primary md:hidden">项目测试</span>
            <div className="event invisible absolute left-2 z-99 mb-1 flex w-[480%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[480%] md:opacity-100">
              <span className="event-name text-sm font-semibold text-black dark:text-white">
                项目测试
              </span>
              <span className="time text-sm font-medium text-black dark:text-white">
                9-13号
              </span>
            </div>
          </div>
        )}
         {date === 17 && (
          <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
            <span className="group-hover:text-primary md:hidden">打包项目</span>
            <div className="event invisible absolute left-2 z-99 mb-1 flex w-[480%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[480%] md:opacity-100">
              <span className="event-name text-sm font-semibold text-black dark:text-white">
                服务器部署，打包项目
              </span>
              <span className="time text-sm font-medium text-black dark:text-white">
                17-21号
              </span>
            </div>
          </div>
        )}
        {date === 25 && (
          <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
            <span className="group-hover:text-primary md:hidden">项目上线</span>
            <div className="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
              <span className="event-name text-sm font-semibold text-black dark:text-white">
                项目上线
              </span>
              <span className="time text-sm font-medium text-black dark:text-white">
                25-27号
              </span>
            </div>
          </div>
        )}
      </td>
    ));

  const renderRows = () =>
    dates.map((week, index) => (
      <tr key={index} className="grid grid-cols-7">
        {renderCells(week)}
      </tr>
    ));

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="日程表" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {renderDayHeaders()}
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
