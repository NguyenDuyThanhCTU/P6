import React from "react";
import { useData } from "../../../Context/DataProviders";

const Contact = () => {
  const { TradeMarkData, ContactData } = useData();
  return (
    <div className="py-5">
      <div>
        <h3 className="text-green-500 uppercase font-semibold">
          BÁO GIÁ THI CÔNG MÁI TÔN GIÁ RẺ TẠI HÀ NỘI
        </h3>
        <h3 className="text-purple-500 uppercase font-semibold ">
          BÁO GIÁ THI CÔNG MÁNG XỐI INOX
        </h3>
      </div>

      <div className="mt-4 font-Montserrat text-red-500 font-semibold">
        <h4 className="text-[18px]">Quý khách có nhu cầu xin liên hệ:</h4>
        <div className="mt-2 flex flex-col gap-1   ">
          <h3 className="uppercase text-[22px]">
            {" "}
            {TradeMarkData.websiteName}
          </h3>
          <p> Địa chỉ: {ContactData.address}</p>
          <p>
            Holine: <span className="text-red-500">{ContactData.phone}</span>{" "}
          </p>
          <p> Email: {ContactData.email}</p>
          <p> Website: www.vatlieuxaydungth.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
