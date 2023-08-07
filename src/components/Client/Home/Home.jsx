import React, { useEffect } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import { useData } from "../../../Context/DataProviders";

const Home = () => {
  const { Posts } = useData();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <Section1 />
      <Section2 />
      {Posts && (
        <>
          <Section3
            Data={Posts?.filter((product) => product.type === "mai-ton")}
          />
          <Section3
            Data={Posts?.filter(
              (product) => product.type === "vach-ngan-palen"
            )}
          />
          <Section3
            Data={Posts?.filter((product) => product.type === "tran-nhua-nano")}
          />
          <Section3
            Data={Posts?.filter((product) => product.type === "bao-gia")}
          />

          <Section3
            Data={Posts?.filter(
              (product) => product.type === "cong-trinh-thi-cong"
            )}
          />

          <Section3
            Data={Posts?.filter((product) => product.type === "tin-tuc")}
          />
        </>
      )}
    </div>
  );
};

export default Home;
