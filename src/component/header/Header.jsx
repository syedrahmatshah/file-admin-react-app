/** @format */

import React from "react";
import HeaderRectangle from "../../assets/images/HeaderRectangle.png";
import { BsWechat } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { PiEnvelopeSimpleFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className='w-full flex justify-between bg-[#F3F2F8] shadow-[0px_4px_4px_0px_#00000040] rounded-[15px]  ml-1 mt-1'>
      <h1 className='font-balsamiqSans font-bold text-[40px] text-[#434343] py-2 pl-6 '>
        ACCOUNT NAME
      </h1>
      <div
        style={{
          backgroundImage: `url(${HeaderRectangle})`,
          backgroundSize: "cover",
          width: "330px",
          borderRadius: "15px",
          position: "relative",
        }}>
        <div className='flex justify-between pl-20 pr-6 pt-2 w-full'>
          <span className='shadow-[4px_4px_4px_0px_#00000040] bg-[#F3F2F8] p-4 rounded-full'>
            <BsWechat className='w-7 h-7' />
          </span>
          <span className='shadow-[4px_4px_4px_0px_#00000040] bg-[#F3F2F8] p-4 rounded-full'>
            <PiEnvelopeSimpleFill className='w-7 h-7' />
          </span>
          <span className='shadow-[4px_4px_4px_0px_#00000040] bg-[#F3F2F8] p-4 rounded-full'>
            <LuUser2 className='w-7 h-7' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
