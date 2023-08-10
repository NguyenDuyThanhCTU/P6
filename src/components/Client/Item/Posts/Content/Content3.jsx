import React from "react";

const Content3 = ({ Data, idx }) => {
  console.log(Data);
  const contentArray = Data?.content[1].split(".");
  const content0Array = Data?.content[0].split("\n");
  console.log(content0Array);
  const length = contentArray.length;
  return (
    <div>
      <h3 className="uppercase font-semibold text-[25px] mt-5">{Data.title}</h3>
      <div className="d:flex  gap-5  font-Montserrat py-5 flex-col">
        <div className="flex gap-2">
          <div className="text-list  flex-1">
            <p className={`${Data.image ? "text-content" : "text-content1"}`}>
              {" "}
              {Data.content[0].split(";")}
            </p>

            {contentArray?.slice(0, length - 1).map((item, index) => (
              <div className="px-2 mt-2">
                <li key={index} className=" ">
                  {item}
                </li>
              </div>
            ))}
          </div>
          {Data.image && (
            <>
              {" "}
              <div className="flex flex-col items-center flex-1 p:mt-5 d:mt-0">
                <img
                  src={Data.image}
                  alt="post"
                  className="h-full object-contain"
                />
                <span className="italic font-semibold text-gray-500">
                  {Data.imageName}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content3;
