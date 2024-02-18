import Navbar from "@/navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import Search from "@/components/customComponents/Search";
import { useForm, FormProvider } from "react-hook-form";
import { useContextStore } from "@/context/context.consumer";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Header from "@/header/Header";
import Footer from "@/footer/Footer";

const Index = () => {
  const [search, setSearch] = useState<String>();
  const { isOpen, setIsOpen } = useContextStore();
  const methods = useForm();


  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };


  const onSubmit = async () => {
    console.log(search, "Search");
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="h-[23vh]">
      </div>
      <Footer />
    </>
  );
};

export default Index;
