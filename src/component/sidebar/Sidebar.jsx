/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { LuHelpCircle } from "react-icons/lu";
import { AiOutlineBulb } from "react-icons/ai";
import { MdModelTraining } from "react-icons/md";
import { BillingIcon } from "../../assets/icons/Icons";
import { FieIcon } from "../../assets/icons/Icons";
import { MyClient } from "../../assets/icons/Icons";
import { Prospecting } from "../../assets/icons/Icons";
import { Stats } from "../../assets/icons/Icons";

const Sidebar = () => {
  return (
    <aside className='bg-[#434343] shadow-[5px_4px_4px_0px_#00000040]  row-span-full pt-7 pl-10 overflow-auto'>
      <div className='flex flex-col items-end gap-6'>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <CgAdd className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>NEW CLIENT</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <MyClient className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span> MY CLIENTS</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <Prospecting className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>PROSPECTING</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <BillingIcon className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>BELLING</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <FiSettings className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>SETTINGS</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <Stats className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span> STATS</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <FieIcon className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>FILES</span>
        </Link>
      </div>
      <div className='flex flex-col items-end gap-6 mt-10'>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <LuHelpCircle className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>HELP</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <AiOutlineBulb className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>KNOWLEDGE</span>
        </Link>
        <Link className='w-full flex items-center rounded-l-[10px] bg-white  py-4 gap-2'>
          <MdModelTraining className='text-white w-10 h-10 p-2 bg-[#6ABDE6] rounded-l-[10px] rounded-tr-[10px] -ml-3' />
          <span>TRAINING</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
