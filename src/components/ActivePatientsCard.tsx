import { AlarmClockIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const ActivePatientsCard = (props: Props) => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-4 items-center justify-between rounded-3xl overflow-hidden bg-secBg relative p-5 text-gray-400">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className="flex items-center space-x-2"
        >
          <p>{i + 8}:00 am</p>
          <div className="leading-10 font-light relative">
            <span>- -- - -- - -- - -- - -- - -- - -- - -- - -- - --</span>

            <div className="bg-white pl-3 pr-5 py-2.5 rounded-3xl absolute top-0 left-[20%] flex flex-1 items-center justify-between space-x-1.5">
              <Avatar className="size-10 border-2 border-blue-900">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-between">
                <p className="capitalize text-black font-semibold -my-2">
                  mark jaxon
                </p>
                <div className="text-xs text-gray-400 flex items-center">
                  <AlarmClockIcon className="inline-flex size-4" />
                  <span> 08:00-09:00 am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivePatientsCard;
