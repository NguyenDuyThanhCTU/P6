import React, { useEffect } from "react";
import { useData } from "../../../Context/DataProviders";
import RelatedPosts from "../Item/RelatedPosts";

const Introduction = () => {
  const { TradeMarkData, ContactData } = useData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      name: "Thiết kế, thi công nhà xưởng và lắp đặt nhà thép, nhà tiền chế.",
    },
    {
      name: "Dịch vụ về cửa sắt.",
    },
    {
      name: "Dịch vụ về mái tôn các loại.",
    },
    {
      name: "Dịch vụ về lan can, ban công, cửa sổ, Inox.",
    },
    {
      name: "Dịch vụ về nhôm, kính.",
    },
  ];
  return (
    <>
      <div className="border">
        <div className="p-4 flex flex-col gap-5">
          <div className="font-LexendDeca">
            <h3 className="uppercase font-bold  text-center text-[26px] py-3">
              giới thiệu
            </h3>
            <div>
              <div className="flex flex-col gap-3  indent-5 font-light">
                <p className="  ">
                  <span className="italic text-red-500 font-bold">
                    {" "}
                    Cơ khí mái tôn An Nhiên
                  </span>{" "}
                  tham gia hoạt động ngành cơ khí và rất hãnh diện được đóng góp
                  sức mình vào sự nghiệp phát triển chung của ngành cơ khí Việt
                  Nam.
                </p>
                <p>
                  Qua nhiều năm hoạt động,{" "}
                  <span className="italic text-red-500 font-bold">
                    Cơ khí mái tôn An Nhiên
                  </span>{" "}
                  không ngừng vươn lên và đã khẳng định được vị trí của mình
                  trong ngành. Cho đến nay chúng tôi rất tự hào về chất lượng đã
                  đạt được ở các sản phẩm trên thị trường: Mái Tôn, Thi công Nhà
                  Xưởng – Nhà Thép Tiền Chế, Cửa Sắt, Cửa Cổng Sắt, Cửa Nhôm
                  Kính, Vách Nhôm Kính, Dịch vụ về inox, …..Chúng tôi đã nhận
                  cung cấp lắp đặt tại nhiều công trình nhà xưởng, chung cư, cao
                  ốc văn phòng, bệnh viện, trường học nhà ở.
                </p>
                <p>
                  {" "}
                  Cùng với đội ngũ nhân viên kỹ thuật tay nghề cao lại nhiệt
                  tình và năng động đảm bảo cho chất lượng công trình và sản
                  phẩm luôn chắc chắn bền đẹp với thời gian.{" "}
                  <span className="italic text-red-500 font-bold">
                    Cơ khí mái tôn An Nhiên
                  </span>{" "}
                  đã và đang được nhiều khách hàng tìm đến và lựa chọn sản phẩm.
                  Sự gia tăng số lượng khách hàng đông đồng nghĩa với sự phát
                  triển mạnh mẽ và không ngừng vươn lên của chúng tôi, không chỉ
                  những ở Hà Nội mà còn còn phát triển mạnh trên các tỉnh lân
                  cận.
                </p>
                <p>
                  Sự tin cậy của khách hàng vào sản phẩm đã giúp cho chúng tôi
                  ngày càng vững vàng trên con đường phát triển của mình. Uy tín
                  về chất lượng sản phẩm và dịch vụ luôn là mục tiêu đề ra hàng
                  đầu của{" "}
                  <span className="italic text-red-500 font-bold">
                    Cơ khí mái tôn An Nhiên
                  </span>
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-[18px]">
                  Các dịch vụ của chúng tôi bao gồm:
                </h4>
                <div className="mt-2 flex flex-col gap-1  font-light">
                  {services.map((items, idx) => (
                    <>
                      <div className="flex items-center gap-1 ml-4">
                        <div className="w-2 rounded-full h-[2px] bg-black"></div>
                        <p>{items.name}</p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-[18px]">
                  Quý khách có nhu cầu xin liên hệ:
                </h4>
                <div className="mt-2 flex flex-col gap-1  text-blue-400 font-bold">
                  <h3 className="uppercase"> {TradeMarkData.websiteName}</h3>
                  <p> Địa chỉ: {ContactData.address}</p>
                  <p>
                    Holine:{" "}
                    <span className="text-red-500">{ContactData.phone}</span>{" "}
                  </p>
                  <p> Email: {ContactData.email}</p>
                  <p> Website: www.vatlieuxaydungth.com</p>
                </div>
              </div>
              <div className="text-center italic text-[18px] mt-5 ">
                <p>
                  {" "}
                  Sự hài lòng của bạn chính là mục tiêu hàng đầu của chúng tôi!
                </p>
                <p> Rất mong được hợp tác với quý khách!</p>
              </div>
            </div>
          </div>
          <RelatedPosts />
        </div>
      </div>
    </>
  );
};

export default Introduction;
