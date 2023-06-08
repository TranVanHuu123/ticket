import React from "react";
import TableListTocket from "../component/TableListTocket";
import Search from "../component/Search";

type Props = {};

const MainListTicket = (props: Props) => {
  return (
    <div className="max-w-[1567px] w-full px-6 py-6 mt-5 bg-white">
      <h1 className="text-[36px]">Danh sách vé</h1>
      <div className="flex justify-between w-full mt-8 mb-8">
        <Search></Search>
        <div className="flex gap-x-2">
          <button className="text-[#ff9138] px-[11px]  border border-[#ff9138] rounded-lg">
            Lọc vé
          </button>
          <button className="text-[#ff9138] px-[11px] border border-[#ff9138] rounded-lg">
            Xuất file (.csv)
          </button>
        </div>
      </div>
      <TableListTocket></TableListTocket>
    </div>
  );
};

export default MainListTicket;
