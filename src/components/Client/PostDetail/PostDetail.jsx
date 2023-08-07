import React, { useEffect, useState } from "react";
import RelatedPosts from "../Item/RelatedPosts";
import Contact from "../Item/Contact";
import { useParams } from "react-router-dom";

import Introduction from "../Item/Posts/Introduction";
import Service from "../Item/Posts/Service";
import Beginning from "../Item/Posts/Beginning";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import moment from "moment/moment";
import Content from "../Item/Posts/Content/Content";
import Content1 from "../Item/Posts/Content/Content1";
import Content2 from "../Item/Posts/Content/Content2";
import Content3 from "../Item/Posts/Content/Content3";
import { useData } from "../../../Context/DataProviders";

const PostDetail = () => {
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
      sortType = Posts?.filter((product) => product.id === id);
    }
    if (sortType) {
      setData(sortType[0]);
    }
  }, [Posts]);

  let DetailPostDate = "";
  if (Data?.createdAt) {
    DetailPostDate = moment
      .unix(Data?.createdAt.seconds)
      .format("MMMM DD, YYYY");
  }

  return (
    <div className="border font-Montserrat">
      <div className="p-4 flex flex-col gap-5">
        <div>
          <div className=" pb-5 border-b flex flex-col gap-4">
            <h3 className="text-title">{Data?.title}</h3>
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
          <div className="flex flex-col gap-5">
            {Data && (
              <>
                {" "}
                {Data?.content?.map((items, idx) => (
                  <>
                    {items.type === "Beginning-1" ? (
                      <Beginning Data={items} />
                    ) : items.type === "service" ? (
                      <Service />
                    ) : items.type === "Content-1" ? (
                      <Content Data={items} idx={idx} />
                    ) : items.type === "Content-2" ? (
                      <Content1 Data={items} idx={idx} />
                    ) : items.type === "Content-3" ? (
                      <Content2 Data={items} idx={idx} />
                    ) : items.type === "Content-4" ? (
                      <Content3 Data={items} idx={idx} />
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
