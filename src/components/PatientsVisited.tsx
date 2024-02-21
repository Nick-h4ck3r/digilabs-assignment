import Image from "next/image";
import React from "react";

type Props = {};

const PatientsVisited = (props: Props) => {
  return (
    <div className="flex-1 flex rounded-3xl overflow-hidden">
      <div className="w-3/5 bg-secBg pl-8 py-0 flex items-center space-x-4">
        <span className="text-3xl font-semibold">42</span>

        <div>
          <p className="text-xl">Patients Visited</p>
          <p className="text-gray-400 text-sm">This month</p>
        </div>
      </div>
      <div className="w-2/5 bg-quatBg flex items-center justify-center">
        <Image
          src={"/patients-visited.svg"}
          width={50}
          height={50}
          alt=""
        />
      </div>
    </div>
  );
};

export default PatientsVisited;
