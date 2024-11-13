/** @format */

import React from "react";

const Button = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#6ABDE6] text-white ${className}`}>
      {title}
    </button>
  );
};

export default Button;
