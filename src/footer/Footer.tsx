import React from "react";
import SocialMedia from "@/socialMedia/SocialMedia";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="px-0 md:px-5 relative bg-[#093132] ">
        <div className="bl-container relative w-full ">
          <div className=" flex justify-between py-8 md:py-16 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 ">
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-stretch gap-10 w-full ">
              <div className="flex  flex-col justify-center items-center md:justify-start md:items-start gap-3 w-full md:max-w-sm">
                <div className="text-white text-md pb-4 ">
                  <div className="w-full  ">
                    <Image
                      className="h-[80px]  md:h-[60px] w-auto md:[294px]"
                      alt="Logo"
                      src="/sharehub-logo.svg"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>

                <p className="font-bold text-white">Softshala Pvt.Ltd</p>
                {/* <div className="border-[0.1px]  border-white w-[180px] mb-5 "></div> */}

                <div className="hidden items-center  md:flex ">
                  <div className="flex flex-col gap-1 text-white ">
                    <p className="text-white text-sm">softshala@info.com</p>
                    <p className="text-sm">Tinkune-07, kathmandu</p>
                  </div>
                </div>

                <SocialMedia />
              </div>
            </div>

            <div className="w-full hidden md:flex   flex-col items-start md:items-center ">
              <div className="text-white  text-sm font-light flex flex-col gap-1 ">
                <p className="text-white font-semibold tracking-wider pb-5  text-md md:text-lg">
                  Product
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Live Market </Link>{" "}
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Market Depth</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Floorsheet</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Top Gainers</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Top Loosers</Link>
                </p>
              </div>
            </div>

            <div className="w-full hidden   flex-col items-end md:items-center  md:flex ">
              <div className="text-white  text-sm font-light flex flex-col gap-1">
                <p className="text-white font-semibold tracking-wider pb-5  text-xl md:text-lg">
                  Market
                </p>

                <p className="pb-4 text-md">
                  <Link href="/">IPO/FPO</Link>{" "}
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Right Share</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Debentures</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/">Mutual Funds</Link>
                </p>
              </div>
            </div>

            <div className="w-full hidden   flex-col items-end md:items-center  md:flex ">
              <div className="text-white  text-sm font-light flex flex-col gap-1">
                <p className="text-white font-semibold tracking-wider pb-5  text-xl md:text-lg">
                  Info
                </p>

                <p className="pb-4 text-md">
                  <Link href="/about">Write for us</Link>{" "}
                </p>
                <p className="pb-4 text-md">
                  <Link href="/games">Broker list</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/services">Merchant Bankers</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/careers">Existing Issues</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/careers">OnGoing Auctions</Link>
                </p>
                <p className="pb-4 text-md">
                  <Link href="/careers">Upcoming Issues</Link>
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center w-full  md:hidden pt-5 ">
              <div className="w-full flex   flex-col items-center">
                <div className="text-white  text-sm font-light flex flex-col gap-3 ">
                  <p className="text-white font-semibold tracking-wider pb-5  text-lg">
                    Product
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Live Market </Link>{" "}
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Market Depth</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Floorsheet</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Top Gainers</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Top Loosers</Link>
                  </p>
                </div>
              </div>

              <div className="w-full flex   flex-col items-center mb-11 ">
                <div className="text-white  text-sm font-light flex flex-col gap-3">
                  <p className="text-white font-semibold tracking-wider pb-5  text-lg">
                    Market
                  </p>

                  <p className="pb-4 text-md">
                    <Link href="/">IPO/FPO</Link>{" "}
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Right Share</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Debentures</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Mutual Funds</Link>
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col items-center pt-12">
                <div className="text-white  text-sm font-light flex flex-col gap-3">
                  <p className="text-white font-semibold tracking-wider pb-5  text-lg">
                    Info
                  </p>

                  <p className="pb-4 text-md">
                    <Link href="/">Write for us</Link>{" "}
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Broker list</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Merchant Bankers</Link>
                  </p>

                  <p className="pb-4 text-md">
                    <Link href="/">Existing Issues</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">OnGoing Auctions</Link>
                  </p>
                  <p className="pb-4 text-md">
                    <Link href="/">Upcoming Issues</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
