import dynamic from "next/dynamic";

const GymScheduleDesktopLazy = dynamic(() => import("./GymScheduleDesktop"));

export default GymScheduleDesktopLazy;
