import { MoveRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const UpcomingEventsCard = (props: Props) => {
  return (
    <div className="flex-1 flex justify-between items-start rounded-3xl overflow-hidden bg-secBg p-5">
      <div className="flex flex-col items-start justify-between space-y-2">
        <div className="bg-priAcc px-2 py-1 rounded-xl">
          <MoveRightIcon className="size-4 md:size-5 text-black stroke-[3]" />
        </div>
        <div className="flex flex-col space-y-0">
          <span className="text-xl font-semibold">Aliza Shah</span>
          <span className="text-xs text-gray-400">08:00-09:00 am</span>
        </div>
      </div>

      <div className="flex-col flex justify-between items-start space-y-5">
        <p className="text-xl">Upcoming Events</p>

        <p className="text-xs text-gray-400 bg-quatBg p-1.5 px-3 rounded-xl">
          Visited 7 days ago
        </p>
      </div>

      <div className="rounded-full border-r-priAcc/20 border-priAcc p-2 border-[4px] -rotate-45">
        <Avatar className="size-12 rotate-45">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
