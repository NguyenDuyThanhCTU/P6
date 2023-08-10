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

const Mayton1 = () => {
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
            <h3 className="text-title">SỬA CHỮA MÁI TÔN TẠI HÀ NỘI</h3>
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
          <div>
            <div>
              <p className="text-content py-5">
                Hiện nay, mái tôn được sử dụng phổ biến từ nhà dân cho đến các
                nhà máy, nhà xưởng trên khắp cả nước. Nhờ ưu điểm chi phí lắp
                đặt rẻ, dễ dàng thi công và phù hợp với khí hậu của Việt Nam.
                Tuy nhiên, bởi được từ vật liệu kim loại cho nên dễ bị ảnh hưởng
                bởi các yếu tố tự nhiên của thời tiết nóng ẩm. Tất nhiên, các
                mái tôn hiện nay thường được nhà sản xuất phủ một lớp sơn chống
                gỉ hoặc chống nóng, tuy nhiên thì độ bền, tính hiệu quả của lớp
                bảo vệ này không cao. Mái tôn sau một thời gian sử dụng sẽ bị
                gỉ, hỏng và mất đi chức năng chính của nó là che mưa che nắng
                cho công trình.
              </p>
              <p className="italic pb-2">
                SỬA CHỮA MÁI TÔN MỘT CÁCH KỊP THỜI KHI BỊ HƯ HỎNG
              </p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033208651_615e663229520d2a608a9f8695507d7b.jpg?alt=media&token=27fbe575-f97b-4ca1-b269-735fa3858aa8"
                alt="anh"
              />
            </div>
            <div>
              <p className="py-5 text-[28px] uppercase text-note-bold">
                <strong>Những sự cố hư hỏng phổ biến của mái tôn</strong>
              </p>
              <div className="flex-col flex gap-3 ml-5">
                <li>Mái tôn nhà bạn đang bị dột</li>
                <li>Mái tôn nhà bạn hỏng chưa thay được</li>
                <li>Mái tôn nhà bạn lâu ngày bị ăn mòn mưa …..</li>
                <li>
                  Mái tôn bị thủng do ăn mòn, hoặc do tác động vật lý của thiên
                  nhiên và con người.
                </li>
                <li>Các chỗ gẫy và chầy xước mái tôn,…</li>
                <li>
                  Sủa Mái tôn bị thiệt hại bởi báo gió làm cong vênh, rách mái,…
                </li>
                <li>
                  Mái tôn bị hư hỏng từ những mũ đinh: do cao su tại mũi đinh bị
                  lão hóa, mục…. do lực hút của gió mũ đinh bị bật lên dẫn đến
                  tình trạng hởn goăng.
                </li>
                <li>
                  Hư hỏng từ những nối tôn: phần cuối mái do độ dốc nhỏ, khả
                  năng thoat nước kém dẫn đến tình trạng bị ứ đọng nước làm tràn
                  vào vị trí cuối mái tôn.
                </li>
                <li>
                  Mái tôn bị biến dạng do tác động từ bên ngoài gây hiện tượng
                  trũng mái đọng nướcDột mái tôn: Dột từ những mũ đinh lâu ngày
                  do bị oxi hóa ăn mòn sẽ bị thủng gây hiện tượng dột khi có mưa
                  lớn. Dột từ mối nối, chỗ tiếp xúc giữa 2 miếng tôn.
                </li>
              </div>
            </div>
            <div className="mt-5">
              <p className="py-5 text-content">
                Nắm bắt được nhu cầu sửa chữa mái tôn hiện nay, Cơ khí mái tôn
                An nhiên cho ra đời dịch vụ chuyên nhận sửa chữa mái tôn, thấm
                dột và rất nhiều những hạng mục khác, đáp ứng tốt và kịp thời
                nhu cầu của khách hàng. Đến với chúng tôi khách hàng không chỉ
                được sửa mái tôn nhanh chóng, mà còn được thi công với giá thành
                thấp, giúp tiết kiệm chi phí cho gia đình.
              </p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cokhitrunghieu-c1c3e.appspot.com/o/Posts%2Fz4566033209541_d446ea5c20a167eb5a5f34ee4147d1f7.jpg?alt=media&token=3762ebee-813e-411c-8d63-330e0715fd18"
                alt="anh"
              />
            </div>
            <div>
              <h3 className="py-5 text-[28px] uppercase text-note-bold">
                <strong>
                  CÁC HẠNG MỤC SỬA CHỮA MÁI TÔN CỦA CHÚNG TÔI BAO GỒM:
                </strong>
              </h3>
              <div className="flex-col flex gap-3 ml-5">
                <li>
                  Xử lý hiện tượng hư hỏng mái tôn và có cách khắc phục phù hợp.
                </li>
                <li>
                  Lợp mái tôn cho nhà mới xây, hoặc lớp mái tôn cho nhà muốn
                  thay thế.
                </li>
                <li>
                  Lợp mái tôn với những nguyên vật liệu chắc chắn có nhiều ưu
                  điểm vượt trội.Sửa chữa mái tôn chuyên nghiệp, khoa học, tránh
                  gây ảnh hưởng lâu dài. Sửa chữa mái tôn tại nhà, trường học,
                  nhà hàng, khách sạn, công ty, văn phòng, cơ sở kinh doanh, nhà
                  xưởng, quán xá.
                </li>
                <li>
                  Nhận thiết kế, lắp đặt mái tôn theo yêu cầu của khách hàng.
                </li>
                <li>
                  Chuyên nhận sửa chữa mái tôn tất cả các trường hợp hư hỏng.
                </li>
                <li>
                  Nhận bảo trì mái tôn cho gia đình, các cơ sở công trình sử
                  dụng mái tôn.
                </li>
                <li>
                  Chúng tôi nhận báo giá cho công trình chuyên sửa chữa mái tôn
                  giá rẻ, nhanh chóng, tiện lợi.
                </li>
                <li>
                  Nhận tư vấn, hỗ trợ khách hàng gặp vấn đề hư hỏng mái tôn
                  nhiệt tình và hiệu quả nhất.
                </li>
              </div>
              <p className="py-5">
                Nếu có nhu cầu, quý khách hãy liên hệ với công ty chúng tôi để
                nhận được thông tinh cụ thể và chi tiết nhất.
              </p>
            </div>
          </div>
        </div>

        <Contact />
        <RelatedPosts />
      </div>
    </div>
  );
};

export default Mayton1;
