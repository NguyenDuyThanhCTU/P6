import React, { useEffect, useState } from "react";
import RelatedPosts from "../Item/RelatedPosts";
import Contact from "../Item/Contact";

import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

const Mayton2 = () => {
  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, []);

  return (
    <div className="border font-Montserrat">
      <div className="p-4 flex flex-col gap-5">
        <div>
          <div className=" pb-5 border-b flex flex-col gap-4">
            <h3 className="text-title">
              DỊCH VỤ THI CÔNG LẮP ĐẶT MÁI TÔN TRỌN GÓI UY TÍN- CHẤT LƯỢNG TẠI
              HÀ NỘI
            </h3>
            <div className="flex gap-5">
              <div className="uppercase p-1 text-blue-500 border border-blue-500">
                Khác
              </div>
              <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
                <AiOutlineClockCircle />

                <p className=""></p>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineUser />
                <p className=""> wulingvn</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-content py-5">
                Cơ khí mái tôn Trung Hiếu chuyên thi công lắp đặt mái tôn, thay
                mới mái tôn cũ, sửa chữa mái tôn theo yêu cầu, cung cấp các loại
                mái tôn từ các thương hiệu nổi tiếng như: Tôn tôn Olympic, tôn
                Hoa Sen, tôn liên danh Việt Nhật…, đội ngũ thợ thi công lắp đặt
                mái tôn trọn gói chuyên nghiệp, tư vấn thiết kế lắp đặt mái tôn
                theo ý tưởng của khách hàng hay theo bản vẽ có sẵn với giá trọn
                gói cạnh tranh với thị trường lắp đặt mái tôn tại Hà Nội hiện
                nay.
              </p>
              {/* <p className="italic pb-2">
                SỬA CHỮA MÁI TÔN MỘT CÁCH KỊP THỜI KHI BỊ HƯ HỎNG
              </p> */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033208651_615e663229520d2a608a9f8695507d7b.jpg?alt=media&token=27fbe575-f97b-4ca1-b269-735fa3858aa8"
                alt="anh"
              />
            </div>

            <div>
              <h3 className="text-title-blue">
                Thi công mái tôn trọn gói – Cơ khí mái tôn An Nhiên. Đơn vị uy
                tín- đảm bảo đem lại sản phẩm mái tôn tốt nhất.
              </h3>
              <div className="flex-col flex gap-3 ml-5">
                <li>
                  Cam kết cung cấp các loại tôn chính hãng với quy cách độ dày
                  chính xác.
                </li>
                <li>
                  Khảo sát tư vấn báo giá hoàn toàn miễn phí 100% cho mọi khách
                  hàng có nhu cầu làm mái tôn.
                </li>
                <li>
                  Đội ngũ thợ thi công chuyên môn hóa là tổ đội chuyên thi công
                  cơ khí mái tôn của công ty.
                </li>
                <li>
                  Nói không với phát sinh báo giá chính xác có hợp đồng từng
                  hạng mục mái tôn rõ ràng chi tiết…
                </li>
              </div>
              <p className="py-5">
                Không cần ngần ngại gì thêm gọi ngay để có phương án rõ ràng tốt
                nhất cho mái tôn nhà mình.
              </p>
            </div>

            <div>
              <h3 className="text-title-blue">
                Báo giá thi công mái tôn giá rẻ
              </h3>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033208651_615e663229520d2a608a9f8695507d7b.jpg?alt=media&token=27fbe575-f97b-4ca1-b269-735fa3858aa8"
                alt="anh"
              />
            </div>
            <div>
              <h3 className="text-title-blue">
                Mái tôn là gì? Cấu tạo cơ bản về mái tôn mà bạn nên biết.
              </h3>
              <p className="text-title-blue">1. Máy tôn:</p>
              <p className="text-content py-5">
                Mái tôn hay còn được gọi là tôn lợp, tấm lợp được sử dụng cho
                các công trình xây dựng có công dụng che mưa, nắng, gió,… Trên
                thị trường mái tôn hiện nay có nhiều chủng loại, vì thế để dựa
                trên các tiêu chí như: mục đích sử dụng, chi phí, tính thẩm mỹ
                và độ bền mà khách hàng cần lựa chọn, cân nhắc kỹ trước khi thực
                hiện thi công lắp đặt mái tôn tại Hà Nội.{" "}
              </p>
              <p className="text-title-blue">2. Cấu tạo mái tôn:</p>
              <div className="flex-col flex gap-3 ml-5 mb-5">
                <p>
                  Hệ thống khung: Là phần chịu tải trọng lớn nhất. Tùy vào diện
                  tích công trình mà làm hệ thống khung, nhất là bây giờ, thời
                  tiết mưa gió bão ngày càng nhiều.
                </p>
                <p>
                  Hệ thống kèo và tôn lợp: Phụ thuộc diện tích cần lớp tôn và
                  nhu cầu dùng tôn phẳng, tôn sóng hay tôn giả ngói,… mà làm hệ
                  thống kèo và mái dầm phù hợp.
                </p>
                <p>
                  Hệ thống ốc vít: Sử dụng loại ốc vít chịu đựng tốt sự ăn mòn,
                  nên chọn ốc vít làm bằng inox và có mạ crome, roong cao su
                  phải khít để ngăn chặn thấm dột khi mùa mưa bão đến.
                </p>
                <p>
                  Thi công nâng cấp và bảo trì mái tôn: Khi đã thi công lắp đặt
                  xong mái tôn thì quét thêm một lớp sơn chống nóng, chống rỉ.
                </p>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033209541_d446ea5c20a167eb5a5f34ee4147d1f7.jpg?alt=media&token=3762ebee-813e-411c-8d63-330e0715fd18"
                alt=""
              />
              <h3 className="text-title-blue">
                Vì sao nên chọn lắp đặt mái tôn cho các công trình xây dựng tại
                Hà Nội?
              </h3>
              <div className="flex-col flex gap-3 ml-5 mb-5">
                <li>
                  Mái tôn nhẹ hơn mái ngói, mái bê tông gấp nhiều lần. Chịu được
                  thời tiết khắc nghiệt.
                </li>
                <li>
                  Lắp đặt dễ dàng và nhanh chóng, tiết kiệm xà gồ, vật tư, vật
                  liệu xây dựng.
                </li>
                <li>Độ bền cao, thẩm mỹ đẹp.</li>
                <li>
                  Thời gian thi công mái tôn nhanh, dễ dàng thay đổi thiết kế
                  cũng như cấu trúc của công trình.
                </li>
                <li>
                  Tăng cường chống cháy, chống nóng, chống ồn tốt, tăng cường độ
                  cứng cho mái, giảm lực tác dụng đến những công trình phía dưới
                  hay xung quanh.
                </li>
                <li>
                  Gíá thành thi công mái tôn rẻ hơn so với việc làm mái bê tông
                  truyền thống.
                </li>
              </div>
              <div>
                <h3 className="text-title-blue">
                  Lí do lựa chọn Thi công lắp đặt mái tôn trọn gói tại Hà Nội
                  của Cơ khí mái tôn Trung Hiếu?
                </h3>
                <div className="flex-col flex gap-3 ml-5 mb-5">
                  <li>
                    Đội ngũ thợ thi công lắp đặt lợp mái tôn trọn gói tại Hà Nội
                    với nhiều năm kinh nghiệm, đã làm việc nhiều công trình xây
                    dựng lớn nhỏ khác nhau, thi công mái tôn chuyên nghiệp, kỹ
                    thuật tay nghề cao, luôn thi công lắp đặt làm mái tôn cẩn
                    thận, tỉ mỉ, có trách nhiệm với nghề, luôn nhiệt tình, giải
                    đáp mọi thắc mắc cho khách hàng trong quá trình thi công.
                  </li>
                  <li>
                    Luôn thi công lắp đặt mái tôn nhanh chóng, chất lượng, đúng
                    với thời gian bàn giao trong hợp đồng, không chạy theo đúng
                    tiến độ thời gian mà bỏ qua kỷ thuật thi công mái tôn, những
                    tấm lợp tôn không đảm bảo.
                  </li>
                  <li>
                    Không thu bất cứ chi phí nào về vấn đề tư vấn, khảo sát hay
                    báo giá thi công lắp đặt mái tôn trọn gói tại Hà Nội.
                  </li>
                  <li>
                    Cung cấp các trang thiết bị, máy móc, vật tư chất lượng,
                    tiên tiến, hiện đại.
                  </li>
                </div>
                <div className="text-content">
                  <p>
                    Lựa chọn loại tôn lợp mái thích hợp theo yêu cầu của khách
                    hàng như về mẫu mã, màu sắc, sản phẩm mái tôn lợp chính hãng
                    với các thương hiệu nổi tiếng và được mọi người sử dụng phổ
                    biến hiện nay như: Tôn Hoa Sen, tôn Đông Á, tôn Olympic, tôn
                    lien doanh Việt Nhật…
                  </p>
                  <p>
                    Giá cả hợp lí, luôn cạnh tranh với thị trường hiện nay. Bảo
                    hành có trách nhiệm.
                  </p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033209541_d446ea5c20a167eb5a5f34ee4147d1f7.jpg?alt=media&token=3762ebee-813e-411c-8d63-330e0715fd18"
                    alt=""
                    className="mt-5"
                  />
                </div>
                <div>
                  <h3 className="text-title-blue">
                    {" "}
                    Các loại mái tôn phổ biến được thi công hiện nay.
                  </h3>
                  <p className="py-3">
                    Trên thị trường hiện nay, phổ biến những loại mái tôn như:
                  </p>
                  <div className="flex-col flex gap-3 ml-5 mb-5">
                    <p>1. Tôn lạnh</p>
                    <p>2. Tôn cách nhiệt</p>
                    <p>3. Tôn giả ngói</p>
                    <p>4. Tôn mạ kẽm</p>
                    <p>5. Tôn cán sóng</p>
                  </div>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033209541_d446ea5c20a167eb5a5f34ee4147d1f7.jpg?alt=media&token=3762ebee-813e-411c-8d63-330e0715fd18"
                  alt=""
                />
                <div>
                  <h3 className="text-title-blue">
                    Vui lòng gọi cho chúng tôi để được khảo sát tư vấn hoàn toàn
                    miễn phí 100%. Để có báo giá chính xác nhất.
                  </h3>
                  <div>
                    <h3 className="text-title-blue">Xin cám ơn!</h3>
                    <p className="text-content">
                      Cơ khí mái tôn Trung Hiếu – Đơn vị chuyên thi công lắp đặt
                      mái tôn trọn gói tại Hà Nội với giá hợp lý. Luôn tư vấn
                      nhiệt tình, giúp bạn chọn được loại mái tôn phù hợp nhất,
                      cùng với đó sẽ báo đơn giá nhân công lắp đặt mái tôn cạnh
                      tranh nhanh nhất trên thị trường tại Hà Nội hiện nay.
                      Chúng tôi cam kết chất lượng, uy tín, thời gian thi công
                      đúng tiến độ bàn giao trong hợp đồng, cung cấp đội ngũ thợ
                      thi công lắp đặt mái tôn lành nghề chuyên nghiệp – uy tín,
                      nhiều năm kinh nghiệm.
                    </p>
                    <p>
                      Hãy nhấc máy gọi ngay đến chúng tôi khi bạn đang có nhu
                      cầu lắp đặt mái tôn tại Hà Nội bạn nhé!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact />
        <RelatedPosts />
      </div>
    </div>
  );
};

export default Mayton2;
