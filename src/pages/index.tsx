import Investment from "@/components/Investments/Investment";
import RecentNews from "@/components/News/RecentNews";
import React from "react";


const Index = () => {
  return (
    <>
    <div className="flex flex-col  bg-[#f6f2f2] ">
      <Investment />
      <RecentNews />
    </div>
    </>
  );
};

export default Index;
