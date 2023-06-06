import React from "react";
import Search from "../component/Search";
import Avatar from "../component/Avatar";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <Search></Search>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;
