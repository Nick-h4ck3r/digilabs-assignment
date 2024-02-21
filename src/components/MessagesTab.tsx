import { MicIcon, PhoneIcon, SendIcon } from "lucide-react";
import Chat from "./Chat";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

type Props = {};

const MessagesTab = (props: Props) => {
  return (
    <div className="bg-priBg flex flex-col h-full rounded-3xl shadow-md p-6 items-center space-y-6">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="rounded-full border-r-priAcc/20 border-priAcc p-2 border-[6px] -rotate-45">
          <Avatar className="size-20 rotate-45">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <Progress value={33} /> */}
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Aliam Colter</p>
          <p className="text-white/70 text-sm font-light">Physician</p>
        </div>
      </div>

      <div className="w-full flex rounded-3xl bg-secBg px-6 py-4 items-center justify-between text-sm">
        <p>Active Patients</p>
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
      </div>

      <div className="flex-1 rounded-3xl bg-secBg p-2 w-full overflow-y-scroll scrollbar-none">
        <div className="flex flex-col items-center space-y-3 h-full relative">
          <div className="flex items-center justify-between w-full px-2 pt-1 border-b border-white/20 pb-3 sticky top-0">
            <div className="flex items-center space-x-2">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="">
                <p className="text-sm font-medium">Alexa Max</p>
                <p className="text-xs text-white/70">Active 5 Min Ago</p>
              </div>
            </div>

            <div className="p-2 bg-quatBg rounded-full">
              <PhoneIcon className="fill-priAcc text-transparent size-4" />
            </div>
          </div>

          <div className="w-full flex-1 overflow-y-scroll scrollbar-none">
            <Chat />
          </div>

          <div className="flex items-center bg-quatBg w-full rounded-2xl pl-3 pr-1.5 py-1.5 sticky bottom-0">
            <MicIcon className="size-5" />

            <Input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent text-xs h-7 border-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent"
            />

            <div className="bg-priAcc p-2 rounded-lg">
              <SendIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesTab;
