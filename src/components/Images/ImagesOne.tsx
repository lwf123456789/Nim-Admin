import React, { useEffect } from "react";
import ImageResize from "@/js/image-resize";
import Image from "next/image";

const ImagesOne: React.FC = () => {
  useEffect(() => {
    ImageResize();
  });
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-10">
        <div className="relative">
          <div id="pane" className="overflow-hidden">
            <Image
              src={"https://cdn.pixabay.com/photo/2024/03/13/04/49/ai-generated-8630058_640.jpg"}
              width={500}
              height={120}
              alt="Cover"
            />
          </div>
          <div
            id="ghostpane"
            className="absolute left-0 top-0 duration-300 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImagesOne;
