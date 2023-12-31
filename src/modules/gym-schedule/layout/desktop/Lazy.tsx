import dynamic from "next/dynamic";

const GymScheduleDesktopLazy = dynamic(
  () =>
    import(
      /* webpackChunkName: "gym-schedule-desktop" */ "./GymScheduleDesktop"
    ),
  {
    ssr: false,
  }
);

export default GymScheduleDesktopLazy;
