import React from "react";
import { SlOptions } from "react-icons/sl";
import { IconMapping } from "../../../../../Utils/item";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { useData } from "../../../../../Context/DataProviders";
import { FiEdit } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import { Popconfirm, message, notification } from "antd";
import { MdDeleteForever } from "react-icons/md";
import { delDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";

const ListPost = () => {
  const { setIsRefetch } = useStateProvider();
  const { Posts } = useData();

  const HandleDelete = (id) => {
    delDocument("posts  ", id).then(() => {
      notification["success"]({
        message: "Success",
        description: `Yêu cầu của bạn đã được thực hiện thành công !`,
      });
    });
    setIsRefetch("deleted");
  };

  return (
    <div className="flex-[65%]  border rounded-xl flex flex-col gap-10">
      <div className=" rounded-xl m-5 h-[400px] overflow-y-scroll">
        <div className="grid grid-cols-5 pb-5 border-b mr-2">
          <p>STT</p>
          <p>Tiêu đề</p>
          <p>hình ảnh</p>
          <p>Loại Post</p>
        </div>
        {Posts.map((data, idx) => {
          let Icon = IconMapping[data.state];

          return (
            <div key={data.id} className="grid  cols-6  py-4  items-center">
              <p>{idx + 1}</p>

              <p className="truncate ">{data.title}</p>

              <img
                src={data.image}
                alt="product"
                className="  w-14 h-14 rounded-lg object-cover"
              />
              <p>{data.nameType}</p>
              <div>
                {data.daysSinceCreation > 0 ? (
                  <div>
                    {" "}
                    <p className="text-[12px] w-[85px] truncate  py-1 border px-2 rounded-3xl text-orange-300 border-orange-300">
                      {data.daysSinceCreation} ngày trước
                    </p>
                  </div>
                ) : (
                  <>
                    {" "}
                    <p className="text-[12px] w-[65px] truncate  border px-2 py-1 rounded-3xl text-green-300 border-green-300">
                      Bây giờ
                    </p>
                  </>
                )}
              </div>

              <div className="group relative ml-5 ">
                <FiEdit className="text-red-600 hover:scale-125 duration-300 " />
                <div className="w-[120px] bg-white opacity-90 absolute -top-2 h-8 right-[62px] rounded-lg hidden group-hover:block ">
                  <div className="mx-3 flex  justify-between text-[24px] h-full items-center ">
                    <FcViewDetails className="hover:scale-125 duration-300" />
                    <FiEdit className="text-green-600 hover:scale-125 duration-300" />
                    <Popconfirm
                      title="Xóa sản phẩm"
                      description="Bạn muốn xóa sản phẩm này?"
                      onConfirm={() => {
                        HandleDelete(data.id);
                      }}
                      onCancel={() => {
                        message.error("Sản phẩm chưa được xóa!");
                      }}
                      okText="Yes"
                      okType="danger"
                      cancelText="No"
                    >
                      <MdDeleteForever className="text-red-600 hover:scale-125 duration-300" />
                    </Popconfirm>
                  </div>
                  <div className="absolute bg-none w-3 h-8 top-0 -left-2"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPost;
