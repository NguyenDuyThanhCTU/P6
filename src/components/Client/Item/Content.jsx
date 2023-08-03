import React from "react";

const Content = () => {
  const data = {
    title: " giới thiệu",
    maincontent:
      "Cơ khí mái tôn An Nhiên tham gia hoạt động ngành cơ khí và rất hãnh diện được đóng góp sức mình vào sự nghiệp phát triển chung của ngành cơ khí Việt Nam. Qua nhiều năm hoạt động, Cơ khí mái tôn An Nhiên không ngừng vươn lên và đã khẳng định được vị trí của mình trong ngành. Cho đến nay chúng tôi rất tự hào về chất lượng đã đạt được ở các sản phẩm  trên thị trường: Mái Tôn, Thi công Nhà Xưởng – Nhà Thép Tiền Chế,  Cửa Sắt, Cửa Cổng Sắt, Cửa Nhôm Kính, Vách Nhôm Kính, Dịch vụ về inox,  …..Chúng tôi đã nhận cung cấp lắp đặt tại nhiều công trình nhà xưởng, chung cư, cao ốc văn phòng, bệnh viện, trường học nhà ở.Cùng với đội ngũ nhân viên kỹ thuật tay nghề cao lại nhiệt tình và năng động đảm bảo cho chất lượng công trình và sản phẩm luôn chắc chắn bền đẹp với thời gian.Cơ khí mái tôn An Nhiên đã và đang được nhiều khách hàng tìm đến và lựa chọn sản phẩm. Sự gia tăng số lượng khách hàng đông đồng nghĩa với sự phát triển mạnh mẽ và không ngừng vươn lên của chúng tôi, không chỉ những ở Hà Nội mà còn còn phát triển mạnh trên các tỉnh lân cận.Sự tin cậy của khách hàng vào sản phẩm đã giúp cho chúng tôi ngày càng vững vàng trên con đường phát triển của mình. Uy tín về chất lượng sản phẩm và dịch vụ luôn là mục tiêu đề ra hàng đầu của Cơ khí mái tôn An Nhiên.",
  };

  const contentArray = data?.maincontent.split(".");
  const targetText = "Cơ khí mái tôn An Nhiên";
  return (
    <div className="font-LexendDeca">
      <h3 className="uppercase font-bold  text-center text-[26px]">
        {data.title}
      </h3>
      <div>
        <div>
          {contentArray?.map((item, index) => (
            <p key={index} className="mt-3 indent-5 font-light ">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
