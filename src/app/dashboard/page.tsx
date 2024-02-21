import DashboardHome from "@/components/DashboardHome";
import SidebarNav from "@/components/SidebarNav";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-priBg flex text-white">
      <SidebarNav />

      <div className="p-6 h-full lg:h-screen w-full">
        <DashboardHome />
      </div>
    </div>
  );
};

export default page;
