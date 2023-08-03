import React from "react";

const Content = ({ Data, idx }) => {
  return (
    <div>
      <h3 className="uppercase font-bold text-[25px]">
        {idx}. {Data.title}
      </h3>
      <div className="flex  gap-5  font-Montserrat py-5 ">
        <div className="flex-1">
          <p className="indent-5  text-[#2c2c2c] text-[26px] font-light">
            {Data.content}
          </p>

          <p className="indent-5 text-[20px] font-NunitoSans">
            {Data.content1}
          </p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <img src={Data.image} alt="post" className="h-full" />
          <span className="italic font-semibold text-gray-500">
            {Data.imageName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
