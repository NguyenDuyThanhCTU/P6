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
    <div className="font-NunitoSans  h-auto w-full bg-[#b5967f] text-white">
      <div className="d:d:max-w-[1200px] d:mx-auto p:max-w-full p:mx-2 grid p:grid-cols-1 d:grid-cols-4 justify-center d:items-start d:gap-5 text-[13px] py-10 d:flex-row p:flex-col p:gap-10 p:items-center ">
        <div className="flex flex-col  items-center ">
          <h3 className="text-center font-bold border-b 2 uppercase pb-2 text-[16px]">
            {TradeMarkData.websiteName}
          </h3>

          <div className="mt-2 flex flex-col gap-2  items-start">
            <div className="flex items-start gap-1">
              <CiLocationOn className="text-[16px]  text-black" />
              <p>Trụ sở chính: {ContactData.address}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiPhoneCall className="text-black text-[16px]" />
              <p>Điện thoại: {ContactData.phone}</p>
            </div>
            <div className="flex items-center gap-1 text-black">
              <CiMail className="text-[16px]" />
              <p>Email: {ContactData.gmail} </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center  gap-4 cursor-pointer">
          <h3 className="text-center font-bold border-b uppercase pb-2 text-[16px]">
            Từ khóa tìm kiếm
          </h3>
          <div className="flex flex-col items-start gap-4">
            {HeaderItems.slice(0, 4).map((items, idx) => (
              <Link to={items.link}>
                <div key={idx} className="group">
                  <h3 className=" uppercase hover:text-black ">{items.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 uppercase ">
          <h3 className="text-center font-bold border-b pb-2 text-[16px] ">
            Chi nhánh
          </h3>

          <div className="flex flex-col items-start gap-4">
            {FooterBranceItems.map((items, idx) => (
              <div
                key={idx}
                className="hover:text-black flex items-center gap-2"
              >
                <div className="flex gap-1 items-center">
                  <CiLocationOn />
                </div>
                <Link href={items.link}>{items.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 justify-center items-center ">
            <h3 className="text-center font-bold border-b mx-2 uppercase pb-2 text-[16px]">
              Kết nối với chúng tôi
            </h3>
            <div className="flex  gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];
                return (
                  <div
                    key={idx}
                    className={`text-[15px] cursor-pointer border p-1 border-white text-white hover:scale-125 duration-300`}
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
    </div>
  );
};

export default Footer;
