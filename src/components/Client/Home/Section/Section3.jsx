import React from "react";
import { Link } from "react-router-dom";

const Section3 = ({ Data }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-center text-red-500 uppercase text-[24px] py-10">
        {Data[0]?.nameType}
      </h3>
      <div className="grid d:grid-cols-4  gap-5 pb-10 p:grid-cols-2 px-2 ">
        {Data.map((items) => (
          <Link to={`/post/${items.id}`}>
            <div className="flex flex-col items-center gap-3 cursor-pointer border hover:border-black hover:shadow-xl h-[300px]">
              <img
                src={items.image}
                alt=""
                className="h-[200px] object-cover w-full"
              />
              <span className="text-center p-1">{items.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section3;
