"use client";

import { CustomBtnProps } from "@/types";

const CustomBtn = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomBtn;
