"use client";

import ActivePatientsCard from "./ActivePatientsCard";
import ConsultationCard from "./ConsultationCard";
import GreetAndSearchBar from "./GreetAndSearchBar";
import MessagesTab from "./MessagesTab";
import PatientsVisited from "./PatientsVisited";
import StatisticsGraphCard from "./StatisticsGraphCard";
import TeamMeetingCard from "./TeamMeetingCard";
import UpcomingEventsCard from "./UpcomingEventsCard";

type Props = {};

const DashboardHome = (props: Props) => {
  return (
    <div className="bg-triBg rounded-3xl h-full w-full flex flex-col lg:flex-row px-10 py-3 md:space-x-10">
      <div className="flex flex-col md:w-[65%] space-y-4">
        <GreetAndSearchBar />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex-1 grid grid-rows-2 gap-4">
            <PatientsVisited />
            <UpcomingEventsCard />
          </div>
          <StatisticsGraphCard />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-1 flex-col">
            <p className="pb-2 text-2xl font-medium">Active Patients</p>

            <ActivePatientsCard />
          </div>

          <div>
          {/* <p className="pb-2 text-2xl font-medium">Upcoming Events</p> */}
            <div className="flex-1 grid grid-rows-2 gap-4">
              <TeamMeetingCard />
              <ConsultationCard />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex-1 w-full md:w-fit">
        <MessagesTab />
      </div>
    </div>
  );
};

export default DashboardHome;
