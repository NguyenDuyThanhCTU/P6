import React from "react";

const Beginning = ({ Data }) => {
  return (
    <div className="flex flex-col gap-5  font-Montserrat py-5">
      {Data.title && <p className="text-note">"{Data.title}"</p>}
      <div className="flex flex-col items-center">
        {Data.image && <img src={Data.image} alt="post" />}
        <span className="italic font-semibold text-gray-500">
          {Data.imageName}
        </span>
      </div>
      <p className="text-content">{Data.content}</p>
    </div>
  );
};

export default Beginning;
