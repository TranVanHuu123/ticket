import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="">
      <div className="relative flex items-center">
        <input
          //   onChange={(e) => setFilter(e.target.value)}
          placeholder="Nhập từ khóa"
          autoComplete="off"
          className="pl-2 w-[470px] h-[48px] rounded-lg border-[1px] border-solid border-gray"
        ></input>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute left-[432px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
