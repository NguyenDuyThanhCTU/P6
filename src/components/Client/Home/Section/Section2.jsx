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
              <strong> Cơ khí mái tôn Trung Hiếu </strong>chuyên thi công, sửa
              chữa mái tôn, máng xối inox 304 đúng chất lượng bảo hành cho quy
              khách trong vấn đề mưa gió, cũng như chất lượng của máng đúng
              chuẩn hàng inox304, thoải mái mới thanh toán.
            </p>
            <p>
              Quý khách đến với chúng tôi cứ yên tâm một điều về trình độ, kỹ
              thuật và nhân lực… để tạo niềm tin với khách hàng sẽ không ứng
              tiền trước, trừ khi công trình đã làm khoảng 70% khối lượng công
              việc, còn bao nhiêu nữa xong công trình chúng tôi sẽ để lại qua
              mưa gió thoải mái quý khách kiểm tra thoải mái chúng tôi mới thanh
              toán hết tiền. Quý khách đã đến với chúng cứ yên tâm về công việc
              cũng như an toàn lao động, nếu có vấn đề gì về lao động{" "}
              <strong>Cơ khí mái tôn Trung Hiếu</strong> sẽ chịu hoàn toàn trách
              nhiệm trước pháp luật và cũng như bên gia chủ.
            </p>
            <Link to="/lien-he">
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
