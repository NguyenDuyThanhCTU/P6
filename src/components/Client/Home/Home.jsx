import React, { useEffect } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
