import type { GymSheduleDayType } from "@/model/gym-schedule";
import type { GymCategoryEnum } from "@/model/misc";

export interface FetchGymScheduleAPIArgs {
  category: GymCategoryEnum;
  dateRange: [Date, Date];
}

export interface FetchGymScheduleResponseType {
  schedule: GymSheduleDayType[];
}
