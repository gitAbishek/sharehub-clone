import Investment from "@/components/Investments/Investment";
import RecentNews from "@/components/News/RecentNews";
import Indices from "@/components/stocks/Indices";
import SubIndices from "@/components/stocks/SubIndices";
import Top from "@/components/stocks/Top";
import TopGainers from "@/components/stocks/TopGainers";
import TopLosers from "@/components/stocks/TopLosers";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="flex flex-col  bg-[#f6f2f2] ">
        <div className="flex flex-col lg:flex-row ">
          <SubIndices show={true} />
          <Top />
          <Indices show={true} />
        </div>
        <div className="flex flex-col lg:flex-row ">
          <TopGainers />
          <TopLosers />
        </div>
        <Investment />
        <RecentNews />
      </div>
    </>
  );
};

export default Index;
