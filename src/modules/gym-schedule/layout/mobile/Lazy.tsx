import dynamic from "next/dynamic";

const GymScheduleMobileLazy = dynamic(() => import("./GymScheduleMobile"));

export default GymScheduleMobileLazy;
