import type { GymSheduleDayType } from "@/model/gym-schedule";
import type { GymCategoryEnum } from "@/model/misc";
import type { LayoutType } from "@/types/layout";

///////////////////////////////////////////////////////////////////////////
// Gym Schedule Props Entry Point
///////////////////////////////////////////////////////////////////////////

export interface GymScheduleModulesFilterType {
  category: GymCategoryEnum;
  dateRange: [Date, Date];
}

export interface GymScheduleModulesProps {
  filter: GymScheduleModulesFilterType;
  layout: LayoutType;
  schedule: GymSheduleDayType[];
}

///////////////////////////////////////////////////////////////////////////
// Gym Schedule Props Presentation
///////////////////////////////////////////////////////////////////////////

export interface GymSchedulePresentationProps {
  error?: Error;
  filter: GymScheduleModulesFilterType;
  loading: boolean;
  onChangeCategory: (category: GymCategoryEnum) => void;
  schedule: GymSheduleDayType[];
}
