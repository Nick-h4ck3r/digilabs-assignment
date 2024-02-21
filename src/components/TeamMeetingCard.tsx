import {
  AlarmClockIcon,
  BellIcon,
  ClockIcon,
  MoveRightIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const TeamMeetingCard = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col rounded-3xl overflow-hidden bg-secBg p-6 space-y-3 justify-between">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Team Meeting</span>
          <div className="text-sm text-gray-400 flex items-center space-x-1.5">
            <AlarmClockIcon className="inline-flex size-4" />
            <span> 08:00-09:00 am</span>
          </div>
        </div>

        <div className="p-3 bg-quatBg rounded-2xl">
          <BellIcon className="fill-priAcc text-transparent size-7" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#F5F5F5] text-black border border-black font-semibold text-xs">
              8+
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="bg-priAcc px-2.5 py-1.5 rounded-xl">
            <MoveRightIcon className="size-6 md:size-7 text-black stroke-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMeetingCard;
