import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

type Props = {};

const Chat = (props: Props) => {
  return (
    // <ScrollArea className="border h-2/3">
      <div className="space-y-2">
        {/* received message */}
        <div className="flex items-end space-x-2 w-3/4">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col space-y-2 *:bg-[#F1F1F1] *:text-black *:py-2 *:px-3 *:text-xs *:rounded-lg *:w-fit items-start">
            <p className="">Hi, Doctor.</p>
            <p className="">I got knee jerk. What should i do right now?</p>
          </div>
        </div>

        {/* sent message */}
        <div className="w-full flex justify-end">
          <div className="flex items-end space-x-2 w-3/4 justify-end">
            <div className="flex flex-col space-y-2 *:bg-[#BDD8F0] *:text-black *:py-2 *:px-3 *:text-xs *:rounded-lg *:w-fit items-end">
              <div className="">Hi, Doctor.</div>
              <div className="">
                I got knee jerk. What should i do right now?
              </div>
            </div>

            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* received message */}
        <div className="flex items-end space-x-2 w-3/4">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col space-y-2 *:bg-[#F1F1F1] *:text-black *:py-2 *:px-3 *:text-xs *:rounded-lg *:w-fit items-start">
            <p className="">Hi, Doctor.</p>
            <p className="">I got knee jerk. What should i do right now?</p>
          </div>
        </div>

        {/* sent message */}
        <div className="w-full flex justify-end">
          <div className="flex items-end space-x-2 w-3/4 justify-end">
            <div className="flex flex-col space-y-2 *:bg-[#BDD8F0] *:text-black *:py-2 *:px-3 *:text-xs *:rounded-lg *:w-fit items-end">
              <div className="">Hi, Doctor.</div>
              <div className="">
                I got knee jerk. What should i do right now?
              </div>
            </div>

            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    // </ScrollArea>
  );
};

export default Chat;
