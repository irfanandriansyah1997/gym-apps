import dynamic from "next/dynamic";

const GymScheduleDesktopLazy = dynamic(
  () => import(/* webpackChunkName: "gym-schedule" */ "./GymScheduleModules"),
  {
    ssr: false,
  }
);

export default GymScheduleDesktopLazy;
