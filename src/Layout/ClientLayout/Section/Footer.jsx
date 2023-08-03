import { CiLocationOn, CiMail } from "react-icons/ci";
import { BiChevronDown, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FooterBranceItems, FooterContact } from "../../../Utils/temp";
import {
  FooterRoles,
  HeaderFooterItems,
  HeaderItems,
  IconMapping,
  SocialMedia,
  SocialMediaCustom,
} from "../../../Utils/item";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const { ContactData, SocialMedia, TradeMarkData } = useData();

  return (
    <div className="font-NunitoSans  h-auto w-full" id="Footer">
      <div className="flex justify-center d:items-start d:gap-5 text-[13px] py-10 d:flex-row p:flex-col p:gap-10 p:items-center ">
        <div className="flex flex-col d:w-[400px] p:w-auto p-2">
          <div className="flex items-center h-[54px] gap-5">
            <img
              src="https://wuling-ev.vn/Content/images/logo-TMT.svg"
              alt="logo"
            />
            <img src={TradeMarkData.websiteIco} alt="logo" className="h-full" />
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-start gap-1">
              <CiLocationOn className="w-10 h-6  text-blue-600" />
              <p>Trụ sở chính: {ContactData.address}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiPhoneCall className="text-blue-600" />
              <p>{ContactData.phone}</p>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <CiMail className="" />
              <p>{ContactData.gmail} </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[210px] gap-4 cursor-pointer">
          <h3 className="text-center font-bold border-b mx-2 uppercase">
            Từ khóa tìm kiếm
          </h3>
          {HeaderItems.slice(0, 4).map((items, idx) => (
            <div key={idx} className="group">
              <h3 className=" uppercase hover:text-blue-600 ">{items.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 uppercase ">
          <h3 className="text-center font-bold border-b mx-2">Chi nhánh</h3>
          <div className="flex gap-1 items-center">
            <CiLocationOn /> <p>Chi nhánh : </p>
          </div>
          {FooterBranceItems.map((items, idx) => (
            <div
              key={idx}
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <div className="flex gap-1 items-center">
                <p> Số {idx + 1}: </p>
              </div>
              <Link href={items.link}>{items.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-center font-bold border-b mx-2 uppercase">
              Kết nối với chúng tôi
            </h3>
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];
                return (
                  <div
                    key={idx}
                    className={`text-[15px] cursor-pointer border p-1 border-blue-600 text-blue-600 hover:scale-125 duration-300`}
                  >
                    {Icon && (
                      <a href={`https://${Point} `} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shadow-2xl">
            <iframe
              src={ContactData.location}
              width="200"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
