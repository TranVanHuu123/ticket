import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="mt-[59px]">
      <NavLink className="flex items-center py-4 pl-[60px] gap-x-[15px]" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Trang chủ
      </NavLink>
      <a className="flex items-center py-4 pl-[60px] gap-x-[15px]" href="/">
        <img srcSet="./u_ticket2.png 2x" alt="img" />
        Quản lý vé
      </a>
      <a className="flex items-center py-4 pl-[60px] gap-x-[15px]" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Đối soát vé
      </a>
      <a className="flex items-center py-4 pl-[60px] gap-x-[15px]" href="/">
        <img srcSet="./u_invoice.png 2x" alt="img" />
        Cài đặt
      </a>
    </div>
  );
};

export default Menu;
