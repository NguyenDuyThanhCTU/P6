import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostItems } from "../../../Utils/temp";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment/moment";

const Collections = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const sortType = PostItems.filter((product) => product.type === id);
    if (sortType) {
      setData(sortType);
    }
  }, [id]);

  return (
    <div className="min-h-screen">
      {Data?.map((items) => {
        const DetailPostDate = moment
          .unix(items.createdAt.seconds)
          .format("MMMM DD, YYYY");
        return (
          <Link to={`/post/${items.id}`}>
            <div className="border shadow-md cursor-pointer hover:shadow-xl duration-300">
              <div className="flex gap-5 p-3">
                <div className="flex-[35%]">
                  <img
                    src={items.image}
                    alt="product image"
                    className="h-[190px] object-cover w-full"
                  />
                </div>
                <div className="flex-[65%] flex flex-col gap-1">
                  <h3 className="font-semibold text-[18px] hover:underline hover:text-blue-500">
                    {items.title}
                  </h3>
                  <p>{items.content}</p>
                  <div className="flex gap-5 mt-3">
                    <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                      <AiOutlineClockCircle />
                      <p className="">{DetailPostDate}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <AiOutlineUser />
                      <p className=""> vatlieuxaydungTh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Collections;
