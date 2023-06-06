import React from "react";
import Menu from "../page/Menu";

type Props = {};

const MenuLeft = (props: Props) => {
  return (
    <div>
      <div className="w-[133px] h-[58px]">
        <img
          className="object-cover w-full h-full"
          srcSet="./insight.png 2x"
          alt="img"
        />
      </div>
      <Menu></Menu>
    </div>
  );
};

export default MenuLeft;
