/* eslint-disable @next/next/no-page-custom-font */
import React, { FC } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Agung-Dev</title>
        <meta
          name="description"
          content="Agung Firmansyah peronal page where he can publish himself to the internet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {/* {children} */}
      <div className="h-fit">
        <div className="h-screen bg-red-600"></div>
        <div className="h-screen bg-blue-600"></div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
