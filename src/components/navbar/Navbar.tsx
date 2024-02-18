import React, { useState } from "react";
import CustomMenu from "@/components/customComponents/Menu";
import Link from "next/link";
import { useContextStore } from "@/context/context.consumer";
import MobileCustomMenu from "@/components/customComponents/MobileCustomMenu";
import Image from "next/image";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContextStore();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full p-0 md:p-5  flex justify-end bg-none md:bg-[#093133]">
        <ul className="w-full hidden md:flex justify-between text-white uppercase text-xs font-medium">
          <Link href="/">Home</Link>
          <CustomMenu
            title="News"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <CustomMenu
            title="Nepse"
            list={[
              { id: 1, listName: "Live Nepse", link: "/" },
              { id: 2, listName: "Stock Price", link: "/" },
              { id: 3, listName: "Market Indices", link: "/" },
            ]}
          />

          <CustomMenu
            title="Investment"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <CustomMenu
            title="Economy"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <CustomMenu
            title="Analysis"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <CustomMenu
            title="Market Tools"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />
          <Link href="/">About Us</Link>
        </ul>
      </div>

      <div
        className={`flex flex-col fixed px-5  ${
          !isOpen ? "-translate-x-full" : "translate-x-0"
        } pt-10 bg-black md:flex lg:flex top-0 left-0  xl:hidden 2xl:hidden text-black justify-between w-5/6  h-screen overflow-y-scroll opacity-100 z-40 transition-all ease-in`}
      >
        <Image
          className="h-20 w-full  "
          alt="Logo"
          src="/sharehub-logo.svg"
          width={200}
          height={150}
        />
        <div className="flex flex-col justify-start text-sm  gap-8 py-20  text-gray-100 px-3">
          <Link href="/" onClick={handleClick}>
            Home
          </Link>

          <MobileCustomMenu
            title="News"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <MobileCustomMenu
            title="Nepse"
            list={[
              { id: 1, listName: "Live Nepse", link: "/" },
              { id: 2, listName: "Stock Price", link: "/" },
              { id: 3, listName: "Market Indices", link: "/" },
            ]}
          />

          <MobileCustomMenu
            title="Investment"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <MobileCustomMenu
            title="Economy"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <MobileCustomMenu
            title="Analysis"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <MobileCustomMenu
            title="Market Tools"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />
          <MobileCustomMenu
            title="Training"
            list={[
              { id: 1, listName: "Arthakendra", link: "/" },
              { id: 2, listName: "Announcement", link: "/" },
            ]}
          />

          <Link href="/" onClick={handleClick}>
            About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
