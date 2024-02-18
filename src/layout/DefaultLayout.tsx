import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Header from "@/components/header/Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/sharehub-logo.svg" type="image/svg" />
        <title className="text-black">DarkMatter</title>
      </Head>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;



