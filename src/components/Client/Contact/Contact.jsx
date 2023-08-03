import React, { useEffect } from "react";

import Input from "./Item/Input";
import { useData } from "../../../Context/DataProviders";
import { IconMapping, SocialMediaCustom } from "../../../Utils/item";

const Contact = () => {
  const { ContactData } = useData();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div>
        <iframe
          src={ContactData.location}
          className="w-screen h-[50vh]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-5 py-5 mx-2 ">
        <h3 className="uppercase text-maincontent text-[40px] font-semibold">
          Liên hệ để được tư vấn
        </h3>
        <div className="flex justify-center d:gap-32 d:flex-row p:flex-col p:gap-2">
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Hotline
            </p>
            <p> {ContactData.phone}</p>
          </div>
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Fax
            </p>
            <p className=" text-center"> </p>
          </div>

          <div className="flex flex-col items-center">
            <h3>Kết nối với chúng tôi</h3>
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];

                return (
                  <div
                    key={idx}
                    className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300 border-black hover:border-white`}
                  >
                    {Icon && (
                      <a href={`https:// `} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] w-full">
        <div className=" py-10 ">
          <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center py-3">
            Liên hệ nhanh
          </h3>
          <div className="p-2 flex  justify-center gap-5 p:flex-col d:flex-row">
            <div>
              <img
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/363366496_108988015620377_6601218343672575096_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uN3V3J5PyLkAX8cqmSy&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDn5x5KftlL8O3qJVFUqeE_ZV5F3jdn8kjp7Dl4kMPmAQ&oe=64CF3DAD"
                alt="img"
                className="w-[600px]"
              />
            </div>
            <div>
              <div>
                <div className="flex flex-col gap-3 my-3">
                  <p>
                    <strong>Văn phòng:</strong> {""}
                    {ContactData.address}
                  </p>

                  <p>
                    <strong>Hotline:</strong> {ContactData.phone}
                  </p>
                  <p>
                    <strong>Website: </strong> www.vatlieuxaydungth.com
                  </p>
                  <p>Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất</p>
                </div>
                <div className="flex flex-col gap-3 mb-5">
                  <Input placeholder="Họ Tên(*)" />
                  <Input placeholder="Email(*)" />
                  <Input placeholder="Điện thoại(*)" />
                  <textarea
                    placeholder="Ý kiến khách hàng"
                    className="outline-none border rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <span className="uppercase py-2 px-6 bg-maincontent text-white cursor-pointer hover:bg-main bg-green-500">
                    gửi đi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
