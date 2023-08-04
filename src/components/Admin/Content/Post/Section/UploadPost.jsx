import React, { useState } from "react";
import { HeaderItems } from "../../../../../Utils/item";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Input from "../../../Item/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { notification } from "antd";
import { useData } from "../../../../../Context/DataProviders";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { addDocument } from "../../../../../Config/Services/Firebase/FireStoreDB";

const UploadPost = () => {
  const [postType, setPostType] = useState("gioi-thieu");
  const [postName, setPostName] = useState("Giới thiệu");
  const [Step, setStep] = useState(0);
  const [Title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(false);

  const { setPostData } = useData();
  const { setIsUploadProduct, setIsRefetch } = useStateProvider();

  const uploadImage = async (e, type) => {
    let selectImage = e.target.files[0];
    const filetypes = ["image/jpeg", "image/jpg", "image/png"];

    if (filetypes.includes(selectImage.type)) {
      const storage = getStorage();
      const storageRef = ref(storage, `img/logo`);

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

  const HandleDiscard = () => {
    setImageUrl("");
    setPostType("gioi-thieu");
    setPostName("Giới thiệu");
    setTitle("");
    setStep(0);
  };

  const handleTitleChange = (e) => {
    const selectedName = e.target.value;
    setPostName(selectedName);
    const selectedItem = HeaderItems.find((item) => item.name === selectedName);
    if (selectedItem) {
      setPostType(selectedItem.type);
    }
  };

  const HandleContinue = () => {
    if (!Title || !imageUrl) {
      notification["error"]({
        message: "Lỗi !",
        description: `
      Vui lòng nhập thông tin trước khi THÊM NỘI DUNG !`,
      });
    } else {
      const data = {
        title: Title,
        image: imageUrl,
        type: postType,
        nameType: postName,
      };
      addDocument("posts", data).then((data) => {
        notification["success"]({
          message: "Thành công!",
          description: `
        Thông tin đã được CẬP NHẬT !`,
        });
        setPostData(data);
        setIsUploadProduct("add-post");
        setIsRefetch("add Post");
        HandleDiscard();
      });
    }
  };

  return (
    <div className="flex-[35%] bg-white">
      <div className="flex flex-col  gap-4 p-4 items-center">
        <div className="flex justify-between pb-4 border-b w-full">
          <div className="py-3 px-10 bg-gray-300  font-bold uppercase text-black">
            {Step === 2 ? "Thông tin bài viết" : "Loại bài viết"}
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
        <div className="h-[250px] text-black w-full">
          {Step === 0 || Step === 1 ? (
            <div>
              <div className="flex flex-col gap-2">
                <label className="text-md font-medium ">Mục bài viết:</label>

                <select
                  className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                  onChange={handleTitleChange}
                  onClick={() => setStep(1)}
                >
                  {HeaderItems.slice(1, 6).map((item, idx) => (
                    <option
                      key={idx}
                      className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            Step === 2 && (
              <div>
                <Input
                  text="Tiêu đề bài viết"
                  Value={Title}
                  setValue={setTitle}
                />
                <div className="flex gap-5  items-end ">
                  <Input
                    text="Liên kết hình ảnh"
                    Value={imageUrl}
                    setValue={setImageUrl}
                  />

                  <div>
                    <label>
                      <div className="cursor-pointer">
                        <div className="flex gap-1 items-center p-2 px-4 bg-red-500 hover:bg-red-600 border text-white rounded-full">
                          <p>Tải lên</p>
                          <AiOutlineCloudUpload className="text-[24px] " />
                        </div>

                        <input
                          type="file"
                          className="w-0 h-0"
                          onChange={(e) => uploadImage(e)}
                        />
                      </div>
                    </label>
                    {error && (
                      <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                        Vui lòng chọn đúng định dạng
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex gap-5">
          {Step === 1 || Step === 0 ? (
            <>
              {" "}
              <div
                className="px-10 py-3 rounded-xl border-2 border-blue-400 text-blue-400 hover:text-blue-700 hover:border-blue-700 duration-300 cursor-pointer"
                onClick={HandleDiscard}
              >
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
                    onClick={() => HandleContinue()}
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
  );
};

export default UploadPost;
