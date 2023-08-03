import React from "react";

const Beginning = ({ Data }) => {
  return (
    <div className="flex flex-col gap-5  font-Montserrat py-5">
      <p className="indent-5  text-[#2c2c2c] text-[26px] font-light">
        {Data.title}
      </p>
      <div className="flex flex-col items-center">
        <img src={Data.image} alt="post" />
        <span className="italic font-semibold text-gray-500">
          {Data.imageName}
        </span>
      </div>
      <p className="indent-5 text-[20px] font-NunitoSans">{Data.content}</p>
    </div>
  );
};

export default Beginning;
