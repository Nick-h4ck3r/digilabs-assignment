"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { BellDotIcon, SearchIcon } from "lucide-react";

type Props = {};

const GreetAndSearchBar = (props: Props) => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between w-full pb-3 space-y-4 md:space-y-0">
      <div>
        <p className="text-2xl">Hello</p>
        <p className="text-4xl font-bold">Dr. Colter! </p>
      </div>

      <div className="flex items-center md:w-2/3 space-x-2">
        <div className="flex items-center space-x-1 bg-quatBg px-4 py-1 rounded-2xl transition ease-in-out duration-1000 w-full">
          {search === "" && (
            <SearchIcon className="text-gray-400 duration-200" />
          )}

          <Input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="bg-transparent border-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent"
          />
        </div>

        <div className="bg-priAcc p-3 rounded-lg">
          <BellDotIcon className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default GreetAndSearchBar;
