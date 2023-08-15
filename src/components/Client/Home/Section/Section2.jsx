import React from "react";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="py-10 font-LexendDeca">
      <div className="">
        <h3 className="uppercase text-red-500  text-[24px] text-center font-bold">
          Về chúng tôi
        </h3>
        <div className="flex mt-4 gap-10 d:max-w-[1200px] d:mx-auto d:flex-row p:flex-col p:max-w-full p:mx-2">
          <div className="flex flex-col gap-5 flex-1 items-center font-NunitoSans ">
            <p>
              <strong> Cơ khí Trung Hiếu </strong>Chuyên thiết kế - thi công lợp
              mái tôn, mái tôn chống ồn, Thi công Nhà Xưởng – Nhà Thép Tiền Chế,
              Cửa Sắt, Cửa Cổng Sắt, Cửa Nhôm Kính, Vách Nhôm Kính, Dịch vụ về
              inox,...
            </p>
            <p>
              Bằng sự nỗ lực không ngừng nghỉ chúng tôi đã từng bước khẳng định
              được vị thế thương hiệu của mình trên thị trường và xây dựng được
              niềm tin đối với khách hàng.
            </p>
            <p>
              Với nhiều năm kinh nghiệm trong nghề, cùng đội ngũ kỹ sư và công
              nhân chất lượng cao. Chúng tôi luôn cam kết sẽ cho quý khách một
              sự lựa chọn thích hợp nhất về kích thước, các mẫu mã đẹp, giá cả
              cạnh tranh với thị trường.
            </p>
            <Link to="/post/9IQtWurWlbLdvVSKK2sB">
              <div className="text border-b-2 hover:scale-110 duration-300 cursor-pointer font-bold">
                Xem tiếp
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://cokhiannhien.vn/wp-content/uploads/2021/04/slide-4.jpg"
              alt="introduction"
              className="h-[350px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
