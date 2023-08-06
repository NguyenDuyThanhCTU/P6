import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

import { Empty, notification } from "antd";

import { useStateProvider } from "../../../../../Context/StateProvider";
import { addDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../../../Context/DataProviders";
import { PostLayoutItems } from "../../../../../Utils/item";
import { BiCaretRight } from "react-icons/bi";
import Input from "../../Item/Input";

const AddProduct = ({ type }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState(false);
  const { PostData } = useData();
  const { setIsUploadProduct, setIsRefetch } = useStateProvider();
  const [Step, setStep] = useState(0);
  //
  const [selectType, setSelectType] = useState("Mở đầu");
  const [ListType, setListType] = useState("");
  const [selectedType, setSelectedType] = useState("");
  ///
  useEffect(() => {
    const listType = PostLayoutItems.filter((item) => item.name === selectType);
    if (listType) {
      setListType(listType[0]);
    }
  }, [selectType, PostLayoutItems]);

  //
  const handleDiscard = () => {
    setImageUrl();
    setTitle("");
    setContent("");
  };

  const HandleSubmit = () => {
    if (!Title || !Content) {
      notification["error"]({
        message: "Tải lên không thành công!",
        description: `Vui lòng bổ sung đầy đủ thông tin !`,
      });
    } else {
      const data = {
        image: imageUrl,
        content: Content,
        title: Title,
        type: type,
      };

      addDocument("posts", data).then(() => {
        notification["success"]({
          message: "Tải lên thành công!",
          description: `Sản phẩm của bạn đã được tải lên !`,
        });
        if ((type = "Other")) {
          setIsRefetch("Add Other Post");
        } else {
          setIsRefetch("Add Company Post");
        }

        handleDiscard();
      });
    }
  };

  const uploadImage = async (e) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      let storageRef = ref(storage, `${selectImage.name}`);
      if (type === "Other") {
        storageRef = ref(storage, `Posts/Other/${selectImage.name}`);
      } else if (type === "Company") {
        storageRef = ref(storage, `Posts/Company/${selectImage.name}`);
      }

      uploadBytes(storageRef, selectImage)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");

          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
            });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      setError(true);
    }
  };

  const HandleUploadContent = () => {
    data = {};
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full 
       h-full
      z-50 absolute rounded-md duration-300`}
    >
      <div className="w-[1500px] h-[700px] absolute bg-white bottom-[15%] left-[12%]  font-LexendDeca cursor-pointer rounded-sm flex flex-col justify-center">
        <p className="text-2xl font-bold text-center text-[30px] mb-5">
          Thêm nội dung vào bài viết của bạn
        </p>
        <div className="flex">
          <div className="justify-center   w-[1200px] mx-auto flex items-center gap-20">
            <div className="flex-[20%]">
              <div className="">
                <p className="text-md text-gray-400 mt-1">
                  Danh sách nội dung đã thêm
                </p>
              </div>
              <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-5 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100"></div>

              {error && (
                <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                  Vui lòng chọn đúng định dạng
                </p>
              )}
            </div>
            <div className="flex items-center gap-10 flex-[80%] h-full">
              <div className="flex flex-col  gap-4 p-4 items-center w-full h-full justify-between">
                <div className="flex justify-between pb-4 border-b w-full">
                  <div className="py-3 px-10 bg-gray-300  font-bold uppercase text-black w-[400px] text-center">
                    {Step === 2
                      ? "Thêm nội dung bài viết"
                      : "Chọn cách trình bày"}
                  </div>
                  <div className="flex items-center gap-4 mr-4">
                    <div
                      className={`w-3 h-3 rounded-full duration-300  ${
                        Step === 1 || Step === 0
                          ? "bg-blue-400 scale-110"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`w-3 h-3 rounded-full   ${
                        Step === 2 ? "bg-blue-400 scale-110" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="h-full text-black w-full flex">
                  {Step === 2 ? (
                    <div className="overflow-y-scroll h-[325px] w-full  grid grid-cols-3 gap-5 ">
                      {selectedType === "Beginning-1" ? (
                        <>
                          <div>
                            <Input
                              text={`Thêm tiêu đề`}
                              Value={Title}
                              setValue={setTitle}
                            />
                            <Input
                              text={`Thêm nội dung`}
                              Value={Content}
                              setValue={setContent}
                            />
                            <Input
                              text={`Thêm tên ảnh`}
                              Value={imageName}
                              setValue={setImageName}
                            />
                          </div>
                          <div>
                            <Input
                              text={`Liên kết ảnh`}
                              Value={imageUrl}
                              setValue={setImageUrl}
                            />
                            <span>Hoặc</span>
                            <div className="flex gap-1 items-center py-3 justify-center mt-3 bg-red-500 hover:bg-red-600 border text-white rounded-full">
                              <p>Tải lên</p>
                              <AiOutlineCloudUpload className="text-[24px] " />
                            </div>
                          </div>
                          <div className="h-full w-[230px] border flex items-center justify-center">
                            <div className=" p-2 ">
                              {imageUrl ? (
                                <>
                                  {" "}
                                  <img
                                    src={imageUrl}
                                    alt=""
                                    className="w-full h-auto object-contain"
                                  />
                                </>
                              ) : (
                                <>
                                  <Empty />
                                </>
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="flex-[25%] border flex flex-col justify-center ">
                        {PostLayoutItems.map((items, idx) => (
                          <>
                            <div
                              className={`flex items-center gap-3 justify-between py-4 px-6 text-[20px]  duration-300 group ${
                                items.name === selectType
                                  ? "text-blue-500 font-bold text-[22px]"
                                  : "hover:text-blue-500"
                              }`}
                              onClick={() => {
                                setSelectType(items.name);
                              }}
                            >
                              <span>{items.name}</span>
                              <BiCaretRight
                                className={` ${
                                  items.name === selectType
                                    ? "rotate-0"
                                    : "group-hover:rotate-0"
                                } rotate-90  duration-300`}
                              />
                            </div>
                          </>
                        ))}
                      </div>
                      <div className="flex-[75%]">
                        {ListType && (
                          <div className=" grid grid-cols-2 px-3 gap-4  overflow-y-scroll h-[325px] ">
                            {" "}
                            {ListType?.type.map((items, idx) => (
                              <>
                                <div
                                  className={`${
                                    selectedType === items.name
                                      ? "shadow-xl border-black"
                                      : "hover:border-black hover:shadow-xl"
                                  } border    max-h-[200px] flex flex-col items-center gap-2`}
                                  onClick={() => setSelectedType(items.name)}
                                >
                                  <img
                                    src={items.image}
                                    alt="option"
                                    className="h-[145px] object-contain"
                                  />
                                  <span>{items.name}</span>
                                </div>
                              </>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex gap-5">
                  {Step === 1 || Step === 0 ? (
                    <>
                      {" "}
                      <div className="px-10 py-3 rounded-xl border-2 border-blue-400 text-blue-400 hover:text-blue-700 hover:border-blue-700 duration-300 cursor-pointer">
                        Loại bỏ
                      </div>
                      <div
                        className="px-10 py-3 rounded-xl border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-700 duration-300 hover:border-blue-700 cursor-pointer"
                        onClick={() => setStep(2)}
                      >
                        Tiếp tục
                      </div>
                    </>
                  ) : (
                    Step === 2 && (
                      <>
                        <div
                          className="px-10 py-3 rounded-xl border-2 border-blue-400 text-blue-400 hover:text-blue-700 hover:border-blue-700 duration-300 cursor-pointer"
                          onClick={() => setStep(1)}
                        >
                          Quay lại
                        </div>
                        {imageUrl ? (
                          <div
                            className="px-10 py-3 rounded-xl border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-700 duration-300 hover:border-blue-700 cursor-pointer"
                            onClick={() => HandleUploadContent()}
                          >
                            Thêm nội dung
                          </div>
                        ) : (
                          <div
                            className="px-10 py-3 rounded-xl border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-700 duration-300 hover:border-blue-700 cursor-pointer"
                            onClick={() => {
                              notification["warning"]({
                                message: "Warning",
                                description: `
                  Hình ảnh đang tải lên, vui lòng đợi trong giây lát !`,
                              });
                            }}
                          >
                            Thêm nội dung
                          </div>
                        )}
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setIsUploadProduct("");
          }}
        />
      </div>
    </div>
  );
};

export default AddProduct;
