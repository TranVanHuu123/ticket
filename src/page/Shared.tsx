import React from "react";
import Header from "../module/Header";
import MenuLeft from "../module/MenuLeft";
import { Outlet } from "react-router";

const Shared = () => {
  return (
    <div className="mt-[17px] ml-[33px] mr-[33px]">
      <div className="flex">
        <div className="basis-1/6">
          <MenuLeft></MenuLeft>
        </div>
        <div className="basis-full">
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
