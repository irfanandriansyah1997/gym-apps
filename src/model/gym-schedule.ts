import type { GymCategoryEnum, GymDifficultyEnum, TimeEnum } from "./misc";

export interface GymCourseType {
  backgroundImage: string;
  duration: number;
  gymCategory: GymCategoryEnum;
  gymDifficulty: GymDifficultyEnum;
  gymLocation: string;
  gymName: string;
  instructor: string;
  timeCategory: TimeEnum;
  timeSchedule: string;
}

export interface GymClassType {
  evening: GymCourseType[];
  morning: GymCourseType[];
}

export interface GymSheduleDayType {
  class: GymClassType;
  date: Date;
  timestamp: number;
}
