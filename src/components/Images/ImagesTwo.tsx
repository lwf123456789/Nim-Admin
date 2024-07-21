import React from "react";
import Image from "next/image";

const ImagesTwo: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-4 sm:p-6 xl:p-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          <div>
            <Image
              width={431}
              height={385}
              src={"https://cdn.pixabay.com/photo/2023/04/15/21/13/ai-generated-7928612_640.jpg"}
              alt="Cover"
            />
          </div>
          <div>
            <Image
              width={431}
              height={385}
              src={"https://cdn.pixabay.com/photo/2023/04/15/21/13/ai-generated-7928612_640.jpg"}
              alt="Cover"
            />
          </div>
          <div>
            <Image
              width={431}
              height={385}
              src={"https://cdn.pixabay.com/photo/2023/04/15/21/13/ai-generated-7928612_640.jpg"}
              alt="Cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesTwo;
