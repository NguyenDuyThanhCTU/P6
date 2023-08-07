import React from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";
import { HeaderItems } from "../../Utils/item";
import { Link, useLocation } from "react-router-dom";

const ContentLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />
      <Header />
      {location.pathname === "/" || location.pathname === "/lien-he" ? (
        <div className=" ">{children}</div>
      ) : (
        <div className="max-w-[1230px] mx-auto flex gap-5 d:mt-20 p:mt-2 d:flex-row p:flex-col px-2">
          <div className="border flex-[20%] h-[270px] shadow-xl">
            <div className="p-2 font-LexendDeca">
              <h3 className="text-center w-full py-3 bg-gray-300 font-bold uppercase text-[#b5967f] ">
                Chuyên mục
              </h3>
              <div>
                {HeaderItems.slice(1, 6).map((items, idx) => (
                  <Link to={items.link}>
                    <div
                      className={`${
                        idx === 4 ? "border-none" : " border-b"
                      } py-2 border-b hover:underline hover:text-blue-500`}
                    >
                      {items.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-[80%] ">{children}</div>
        </div>
      )}

      <Footer />
      <div className="relative z-50">
        <Hotline />
        <OnTop />
      </div>

      <Copyright />
    </>
  );
};

export default ContentLayout;
