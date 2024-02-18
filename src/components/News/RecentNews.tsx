import React from "react";
import Image from "next/image";
import { RECENT_NEWS } from "@/constants/NewsList";
import { CiCalendarDate } from "react-icons/ci";


const RecentNews = () => {
  return (
    <div className="p-5 bg-[#f6f2f2]">
      <div className="font-extrabold text-2xl py-5">Recent News</div>
      <div className="relative  overflow-hidden bg-cover bg-no-repeat rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5 w-full ">
        {RECENT_NEWS.map((data) => (
          <div className="rounded-md shadow-md" key={data.id}>
            <Image
              className="w-full rounded-t-md"
              alt="Logo"
              src={data.image}
              width={200}
              height={150}
            />
            <div className="flex flex-col gap-2 px-2 py-5 rounded-b-md bg-[#093132] h-[150px]">
              <p className="text-gray-200 text-xs md:text-sm overflow-hidden py-2">
                {data.subText.length > 100
                  ? `${data.subText.slice(0, 100)}...`
                  : data.subText}
              </p>
              <p className="flex items-center gap-2  text-green-300 text-xs md:text-sm font-light">
                <CiCalendarDate className="text-white" />
                {data.date}</p>
            </div>
          </div>
        ))}

        {/* <div className="rounded-md shadow-md  ">
          <Image
            className=""
            alt="Logo"
            src="/sharehub-logo.svg"
            width={200}
            height={150}
          />
          <div className="flex flex-col gap-2 px-2 py-5 rounded-b-md bg-[#093132]  ">
            <p className="text-gray-200 text-sm font-medium">
              Elan Musk was killed because of lots of girlfriend
            </p>
            <p className="text-gray-400 text-xs font-light font">
              5th Dec 2024
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md  ">
          <Image
            className=""
            alt="Logo"
            src="/sharehub-logo.svg"
            width={200}
            height={150}
          />
          <div className="flex flex-col gap-2 px-2 py-5 rounded-b-md bg-[#093132]  ">
            <p className="text-gray-200 text-sm font-medium">
              Elan Musk was killed because of lots of girlfriend
            </p>
            <p className="text-gray-400 text-xs font-light font">
              5th Dec 2024
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md  ">
          <Image
            className=""
            alt="Logo"
            src="/sharehub-logo.svg"
            width={200}
            height={150}
          />
          <div className="flex flex-col gap-2 px-2 py-5 rounded-b-md bg-[#093132]  ">
            <p className="text-gray-200 text-sm font-medium">
              Elan Musk was killed because of lots of girlfriend
            </p>
            <p className="text-gray-400 text-xs font-light font">
              5th Dec 2024
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-md  ">
          <Image
            className=""
            alt="Logo"
            src="/sharehub-logo.svg"
            width={200}
            height={150}
          />
          <div className="flex flex-col gap-2 px-2 py-5 rounded-b-md bg-[#093132]  ">
            <p className="text-gray-200 text-sm font-medium">
              Elan Musk was killed because of lots of girlfriend
            </p>
            <p className="text-gray-400 text-xs font-light font">
              5th Dec 2024
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RecentNews;
