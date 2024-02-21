import {
  ArrowUpRightFromCircleIcon,
  FileTextIcon,
  HomeIcon,
  MessageCircleIcon,
  PieChartIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {};

const SidebarNav = (props: Props) => {
  return (
    <div className="h-screen hidden md:flex flex-col p-10 items-center justify-between border-r border-white/20">
      <div className="flex flex-col space-y-8 items-center">
        <div>
          <Image
            src="/blue-fire.svg"
            width={30}
            height={30}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center py-4 space-y-2 md:space-y-3 *:cursor-pointer *:rounded-2xl *:p-4 *:duration-200">
          {/* tabs here */}

          <Link
            href="/dashboard"
            className="bg-[#4b5c85] bg-opacity-50 "
          >
            <HomeIcon className="h-5 w-5" />
          </Link>

          <Link
            className="hover:bg-[#4b5c85] hover:bg-opacity-50 "
            href="/dashboard"
          >
            <FileTextIcon className="h-5 w-5" />
          </Link>

          <Link
            className="hover:bg-[#4b5c85] hover:bg-opacity-50 "
            href="/dashboard"
          >
            <PieChartIcon className="h-5 w-5" />
          </Link>

          <Link
            className="hover:bg-[#4b5c85] hover:bg-opacity-50 "
            href="/dashboard"
          >
            <MessageCircleIcon className="h-5 w-5" />
          </Link>

          <Link
            className="hover:bg-[#4b5c85] hover:bg-opacity-50 "
            href="/dashboard"
          >
            <SettingsIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-7">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ArrowUpRightFromCircleIcon className="h-5 w-5 rotate-45 cursor-pointer" />
      </div>
    </div>
  );
};

export default SidebarNav;
