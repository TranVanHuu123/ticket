import React from "react";
import Header from "../module/Header";
import MenuLeft from "../module/MenuLeft";
import { Outlet } from "react-router";

const Shared = () => {
  return (
    <div className="mt-[17px] ml-[33px] mr-[33px]">
      <div className="flex gap-x-9">
        <div>
          <MenuLeft></MenuLeft>
        </div>
        <div className="w-[1567px]">
          <Header></Header>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shared;
