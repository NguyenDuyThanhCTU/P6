import React from "react";

const Content1 = ({ Data, idx }) => {
  return (
    <div>
      <h3 className="uppercase font-bold text-[25px]">
        {idx}. {Data.title}
      </h3>
      <div className="flex flex-col  gap-5  font-Montserrat py-5 ">
        <p className="text-note-bold">" {Data.content}"</p>

        <p className="text-content ">{Data.content1}</p>

        <div className="flex flex-col items-center flex-1 mt-2">
          <img src={Data.image} alt="post" className="h-full" />
          <span className="italic font-semibold text-gray-500">
            {Data.imageName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content1;
