import parse from "date-fns/parse";

import type { GymScheduleContractAPIType } from "@/repository/gym-schedule/types/gym-schedule-contract";

import { getDateListWithinWeek } from "@/utils/date";
import {
  normalizeGymCategory,
  normalizeGymDifficulty,
  normalizeTime,
} from "@/utils/normalizer";
import { capitalizeFirstLetter } from "@/utils/string";
import type {
  GymClassType,
  GymCourseType,
  GymSheduleDayType,
} from "@/model/gym-schedule";
import { TimeEnum } from "@/model/misc";
import type { Maybe } from "@/types/misc";

const { EVENING, MORNING } = TimeEnum;

export const normalizeGymCourse = (
  args: NonNullable<GymScheduleContractAPIType[0]>[0]
): Maybe<GymCourseType> => {
  if (args) {
    const {
      backgroundImage,
      classDifficulty,
      classDuration,
      className,
      classType,
      instructor,
      locationSchedule,
      timeCategory,
      timeSchedule,
    } = args;

    const formattedGymCategory = normalizeGymCategory(classType);
    const formattedTimeCategory = normalizeTime(timeCategory);

    if (
      instructor &&
      timeSchedule &&
      locationSchedule &&
      formattedTimeCategory &&
      formattedGymCategory &&
      className &&
      backgroundImage
    ) {
      return {
        backgroundImage: backgroundImage,
        duration: classDuration || 0,
        gymCategory: formattedGymCategory,
        gymDifficulty: normalizeGymDifficulty(classDifficulty),
        gymLocation: capitalizeFirstLetter(locationSchedule),
        gymName: capitalizeFirstLetter(className),
        instructor: instructor || "-",
        timeCategory: formattedTimeCategory,
        timeSchedule,
      };
    }
  }

  return undefined;
};

export const normalizeGymScheduleDay = (
  args: NonNullable<GymScheduleContractAPIType[0]>
): GymClassType => {
  return args.reduce<GymClassType>(
    (result, currentItem) => {
      const formattedCourse = normalizeGymCourse(currentItem);

      if (formattedCourse) {
        if (formattedCourse.timeCategory === MORNING) {
          result.morning.push(formattedCourse);
        }

        if (formattedCourse.timeCategory === EVENING) {
          result.evening.push(formattedCourse);
        }
      }

      return result;
    },
    { evening: [], morning: [] }
  );
};

export const normalizeGymSchedule = (
  args: Maybe<GymScheduleContractAPIType> = {}
): GymSheduleDayType[] => {
  return getDateListWithinWeek().reduce<GymSheduleDayType[]>(
    (result, currentKey) => {
      const rawScheduleDay = args[currentKey];

      const formattedGymSchedule = normalizeGymScheduleDay(
        rawScheduleDay || []
      );

      if (formattedGymSchedule) {
        const formattedDate = new Date(
          parse(currentKey, "yyyyMMdd", new Date()).toDateString()
        );
        result.push({
          class: formattedGymSchedule,
          date: formattedDate,
          timestamp: formattedDate.getTime(),
        });
      }

      return result;
    },
    []
  );
};
