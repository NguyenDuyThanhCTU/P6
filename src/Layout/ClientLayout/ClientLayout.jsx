import React from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();

  return (
    <div className="">
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />

      <Header />
      <div className=" ">{children}</div>
      <Footer />
      <div className="relative z-50">
        <Hotline />
        <OnTop />
      </div>

      <Copyright />
    </div>
  );
};

export default ClientLayout;
