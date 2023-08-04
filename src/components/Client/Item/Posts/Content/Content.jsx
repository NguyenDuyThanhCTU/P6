import React from "react";

const Content = ({ Data, idx }) => {
  return (
    <div>
      <h3 className="uppercase font-bold text-[25px]">
        {idx}. {Data.title}
      </h3>
      <div className="d:flex  gap-5  font-Montserrat py-5 p:hidden ">
        <div className="flex-1">
          <p className="text-note-bold ">" {Data.content}"</p>

          <p className="text-content mt-2">{Data.content1}</p>
        </div>

        <div className="flex flex-col items-center flex-1">
          <img src={Data.image} alt="post" className="h-full" />
          <span className="italic font-semibold text-gray-500">
            {Data.imageName}
          </span>
        </div>
      </div>

      <div className="p:flex  flex-col gap-5  font-Montserrat py-5 d:hidden">
        <p className="text-note-bold ">" {Data.content}"</p>
        <div className="flex flex-col items-center flex-1">
          <img src={Data.image} alt="post" className="h-full" />
          <span className="italic font-semibold text-gray-500">
            {Data.imageName}
          </span>
        </div>
        <p className="text-content mt-2">{Data.content1}</p>
      </div>
    </div>
  );
};

export default Content;
