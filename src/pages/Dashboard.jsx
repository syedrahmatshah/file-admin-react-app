/** @format */

import React from "react";
import Button from "../component/ui/Button";

const Dashboard = () => {
  return (
    <main
      className='h-auto mt-3 ml-2 rounded-[15px] bg-[#F3F2F8] shadow-[4px_4px_4px_0px_#00000040]'
      title='Account Name'>
      <div className='p-5 space-y-4'>
        <Button
          title='ACCOUNT STATS'
          className='rounded-tl-[10px] rounded-br-[10px] py-2 pl-4 flex self-start w-56 shadow-[-5px_4px_4px_0px_#00000040]  underline'
        />
        <div className='rounded-tl-[10px] rounded-br-[10px] shadow-[-6px_6px_4px_0px_#00000040] bg-white h-64'></div>
      </div>
      <div className='p-5 space-y-4'>
        <Button
          title='PROSPECTS'
          className='rounded-tl-[10px] rounded-br-[10px] py-2 pl-4 flex self-start w-56 shadow-[-5px_4px_4px_0px_#00000040]  underline'
        />
        <div className='rounded-tl-[10px] rounded-br-[10px] shadow-[-6px_6px_4px_0px_#00000040] bg-white h-64'></div>
      </div>
    </main>
  );
};

export default Dashboard;
