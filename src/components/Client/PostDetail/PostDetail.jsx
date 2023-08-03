import React, { useEffect, useState } from "react";
import RelatedPosts from "../Item/RelatedPosts";
import Contact from "../Item/Contact";
import { useParams } from "react-router-dom";
import { PostItems } from "../../../Utils/temp";
import Introduction from "../Item/Posts/Introduction";
import Service from "../Item/Posts/Service";
import Beginning from "../Item/Posts/Beginning";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment/moment";
import Content from "../Item/Posts/Content/Content";

const PostDetail = () => {
  const [Data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const sortType = PostItems.filter((product) => product.id === id);
    if (sortType) {
      setData(sortType[0]);
    }
  }, [id]);

  // const DetailPostDate = moment
  //   .unix(Data?.createdAt.seconds)
  //   .format("MMMM DD, YYYY");
  const DetailPostDate = "25-12-2001";

  return (
    <div className="border font-Montserrat">
      <div className="p-4 flex flex-col gap-5">
        <div>
          <div className=" pb-5 border-b flex flex-col gap-4">
            <h3 className="text-[#333333] text-[32px] font-light">
              {Data.title}
            </h3>
            <div className="flex gap-5">
              <div className="uppercase p-1 text-blue-500 border border-blue-500">
                Khác
              </div>
              <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                <AiOutlineClockCircle />

                <p className="">{DetailPostDate}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineUser />
                <p className=""> wulingvn</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {Data && (
              <>
                {" "}
                {Data.content1?.map((items, idx) => (
                  <>
                    {items.type === "beginning" ? (
                      <Beginning Data={items} />
                    ) : items.type === "service" ? (
                      <Service />
                    ) : items.type === "content0" ? (
                      <Content Data={items} idx={idx} />
                    ) : null}
                  </>
                ))}
              </>
            )}
          </div>
        </div>

        <Contact />
        <RelatedPosts />
      </div>
    </div>
  );
};

export default PostDetail;
