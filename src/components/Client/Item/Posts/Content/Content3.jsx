import React from "react";

const Content3 = ({ Data, idx }) => {
  const contentArray = Data?.content[0].split(".");
  return (
    <div>
      <h3 className="uppercase font-bold text-[25px]">
        {idx}. {Data.title}
      </h3>
      <div className="d:flex  gap-5  font-Montserrat py-5 d:flex-row p:flex-col">
        <div className="flex-1">
          <p className="text-note-bold">" {Data.content[0]}"</p>
          <div className="text-list mt-5">
            {contentArray?.map((item, index) => (
              <div>
                <p key={index} className=" ">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center flex-1 p:mt-5 d:mt-0">
          <img src={Data.image} alt="post" className="h-full object-contain" />
          <span className="italic font-semibold text-gray-500">
            {Data.imageName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content3;
