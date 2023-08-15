import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostItems } from "../../../Utils/temp";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment/moment";
import { useData } from "../../../Context/DataProviders";

const Collections = () => {
  const [Data, setData] = useState([]);
  const { id } = useParams();
  const { Posts } = useData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let sortType = [];
    if (Posts) {
      if (id === "tin-tuc") {
        sortType = Posts;
      } else {
        sortType = Posts?.filter((product) => product.type === id);
      }
    }
    if (sortType) {
      setData(sortType);
    }
  }, [Posts, id]);

  return (
    <div className="min-h-screen">
      {Data?.map((items) => {
        const DetailPostDate = moment
          .unix(items.createdAt.seconds)
          .format("MMMM DD, YYYY");
        return (
          <Link
            to={`${items.url ? `/post/${items.url}` : `/post/${items.id}`}`}
          >
            {console.log(items)}
            <div className="border shadow-md cursor-pointer hover:shadow-xl duration-300">
              <div className="flex gap-5 p-3">
                <div className="flex-[35%]">
                  <img
                    src={items.image}
                    alt="product image"
                    className="h-[190px] object-contain w-full"
                  />
                </div>
                <div className="flex-[65%] flex flex-col gap-1">
                  <h3 className="font-semibold d:text-[18px] p:text-[16px] hover:underline hover:text-blue-500 uppercase">
                    {items.title}
                  </h3>
                  <p className="truncate2 d:text-[16px] p:text-[14px] up">
                    {items.content[0]?.title}
                  </p>
                  <div className="flex p:gap-1 d:gap-5 mt-3 d:flex-row p:flex-col">
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
