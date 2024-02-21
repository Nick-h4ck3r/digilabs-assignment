import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const StatisticsGraphCard = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col rounded-3xl overflow-hidden bg-secBg relative p-8 pb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <p className="text-3xl font-semibold">Statistics</p>
          <p className="text-gray-400 text-sm">November 2023</p>
        </div>

        <div>
          <Select defaultValue="weekly">
            <SelectTrigger className="md:w-32 border-priAcc rounded-2xl capitalize px-4 focus-visible:ring-transparent focus-visible:ring-offset-transparent">
              <SelectValue placeholder="month" />
            </SelectTrigger>
            <SelectContent className="*:capitalize border-priAcc rounded-2xl bg-secBg text-white">
              <SelectItem
                value="weekly"
                className="hover:bg-priAcc/20 rounded-xl duration-200"
              >
                weekly
              </SelectItem>
              <SelectItem
                value="monthly"
                className="hover:bg-priAcc/20 rounded-xl duration-200"
              >
                monthly
              </SelectItem>
              <SelectItem
                value="yearly"
                className="hover:bg-priAcc/20 rounded-xl duration-200"
              >
                yearly
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full flex-1 relative p-28 md:p-0">
        <Image
          src={"/stats.svg"}
          fill
          alt=""
        />
      </div>
    </div>
  );
};

export default StatisticsGraphCard;
