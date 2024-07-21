"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartThree from "@/components/Charts/ChartThree";
import ChartFour from "@/components/Charts/ChartFour";
import ChartSeven from "@/components/Charts/ChartSeven";
import ChartEight from "@/components/Charts/ChartEight";
import ChartSix from "@/components/Charts/ChartSix";
import ChartNine from "@/components/Charts/ChartNine";
import ChartTwelve from "@/components/Charts/ChartTwelve";
const BasicChart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="图标模板" />


      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSeven />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartEight />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartSix />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartNine />
        </div>
        <div className="col-span-12 xl:col-span-7">
        <ChartOne />

        </div>
        <div className="col-span-12 xl:col-span-5">
          <ChartThree />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <ChartTwelve />
        </div>
        <div className="col-span-12 xl:col-span-5">
        <ChartTwo />
          </div>
      </div>
    </>
  );
};

export default BasicChart;
