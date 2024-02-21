import { MoreHorizontalIcon, TrendingUpIcon } from "lucide-react";

type Props = {};

const ConsultationCard = (props: Props) => {
  return (
    <div className="flex-1 flex items-center justify-between rounded-3xl overflow-hidden bg-secBg p-5">

      <div className="flex flex-col items-start justify-between h-full">
        <div>
          <p className="text-base text-gray-400 font-light">Consultation</p>
          <p className="text-2xl font-semibold">82/100</p>
        </div>

        <p className="text-xs flex items-center space-x-1.5 bg-quatBg py-2 px-4 rounded-xl">
          <span>82%</span>
          <TrendingUpIcon className="size-4" />
        </p>
      </div>

      <div className="rounded-full border-r-white border-priAcc p-2 border-[12px] -rotate-45 size-24" />

      <MoreHorizontalIcon className="self-start" />
    </div>
  );
};

export default ConsultationCard;
