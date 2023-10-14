import dynamic from "next/dynamic";

const GymScheduleMobileLazy = dynamic(
  () =>
    import(/* webpackChunkName: "gym-schedule-mobile" */ "./GymScheduleMobile"),
  {
    ssr: false,
  }
);

export default GymScheduleMobileLazy;
