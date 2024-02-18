import { useContextStore } from "@/context/context.consumer";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Search from "@/components/customComponents/Search";

const Header = () => {
  const [search, setSearch] = useState<String>();
  const { isOpen, setIsOpen } = useContextStore();
  const methods = useForm();

  const handleClick = () => {
    setIsOpen(true);
    console.log("hello", isOpen);
  };

  console.log("hello", isOpen);


  const handleClickClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async () => {
    console.log(search, "Search");
  };
  return (
    <div className="flex  justify-between items-center py-5 px-5  md:px-10 ">
      <div className="flex gap-10 justify-center items-center">
        <Image
          className="h-20 w-20 hidden md:flex "
          alt="Logo"
          src="/sharehub-logo.svg"
          width={200}
          height={150}
        />

        <div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Search setSearch={setSearch} />
            </form>
          </FormProvider>
        </div>
      </div>

      <Image
        className="hidden lg:flex h-ful"
        alt="Logo"
        src="/sharehub-ads.png"
        width={200}
        height={150}
      />

      <div className="hidden md:flex gap-5">
        <button className="bg-[#093133] text-gray-200 text-sm px-8 py-2 border-none rounded-md hover:bg-[#065e4f] hover:text-white">
          Login
        </button>

        <button className="bg-[#093133] text-gray-200 text-sm px-8 py-2 border-none rounded-md hover:bg-[#065e4f] hover:text-white">
          SignIn
        </button>
      </div>

      {isOpen ? (
        <RxCross1
          className="text-[#093132]  flex  md:hidden    items-center text-3xl font-extrabold "
          onClick={handleClickClose}
        />
      ) : (
        <FiMenu
          onClick={handleClick}
          className="text-[#093132] text-5xl flex md:hidden hover:cursor-pointer font-extrabold"
        />
      )}
    </div>
  );
};

export default Header;
