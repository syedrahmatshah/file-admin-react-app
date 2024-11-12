/** @format */

import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='grid grid-cols-[13rem_1fr] grid-rows-[auto_1fr] h-screen overflow-hidden'>
      <Header />
      <Sidebar />
      <main className='h-full overflow-auto scrollbar-hidden'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
