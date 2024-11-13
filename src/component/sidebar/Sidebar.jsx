/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "../constant/Constant";
import LOGO from "../../assets/images/LOGO.png";

const Sidebar = () => {
  return (
    <aside className='bg-[#434343] shadow-[5px_4px_4px_0px_#00000040] row-span-full pt-7 pl-9 overflow-auto scrollbar-hidden'>
      <div className='flex flex-col gap-6'>
        <div className='pb-4'>
          <img
            src={LOGO}
            alt='Logo'
          />
        </div>
        {sidebarItems.map(({ to, icon: Icon, label }, index) => (
          <React.Fragment key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "w-full flex items-center rounded-l-[10px] bg-white py-4 gap-4 backdrop-filter-[10px]"
                  : "flex items-center text-white gap-3 pr-4 py-2"
              }>
              {({ isActive }) => (
                <>
                  <Icon
                    className={
                      isActive
                        ? " text-white w-12 h-11 p-2 bg-[#6ABDE6] shadow-[4px_4px_4px_0px_#00000040] rounded-l-[10px] rounded-tr-[10px] -ml-4 "
                        : " text-[#434343]"
                    }
                  />

                  <span className={isActive ? "text-[#434343]" : "text-white"}>
                    {label}
                  </span>
                </>
              )}
            </NavLink>
            {index === 6 && (
              <div className='border-b-2 border-[#6ABDE6] w-40 mt-10 mb-1'></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
