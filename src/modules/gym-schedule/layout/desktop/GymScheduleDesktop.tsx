"use client";
import { useMemo, useState } from "react";

import CourseCard from "@/modules/gym-schedule/components/CourseCard";
import type { GymSchedulePresentationProps } from "@/modules/gym-schedule/types";

import { getTimestampCurrentDay } from "@/utils/date";
import type { GymCourseType } from "@/model/gym-schedule";

import ScheduleDesktopHeader from "./ScheduleHeader";
import ScheduleDesktopList from "./ScheduleList";

const GymScheduleDesktop = (props: GymSchedulePresentationProps) => {
  const {
    filter: { category },
    onChangeCategory,
    schedule,
  } = props;
  const [selectedTimestamp] = useState<number>(() => getTimestampCurrentDay());

  const { evening, morning, scheduleTimestamps } = useMemo(() => {
    return schedule.reduce<{
      evening: Array<{ course: GymCourseType[]; timestamp: number }>;
      morning: Array<{ course: GymCourseType[]; timestamp: number }>;
      scheduleTimestamps: number[];
    }>(
      (result, scheduleTime) => {
        result.evening.push({
          course: scheduleTime.class.evening,
          timestamp: scheduleTime.timestamp,
        });
        result.morning.push({
          course: scheduleTime.class.morning,
          timestamp: scheduleTime.timestamp,
        });
        result.scheduleTimestamps.push(scheduleTime.timestamp);

        return result;
      },
      { evening: [], morning: [], scheduleTimestamps: [] }
    );
  }, [schedule]);

  return (
    <div>
      <ScheduleDesktopHeader
        scheduleTimestamps={scheduleTimestamps}
        selectedCategory={category}
        selectedTimestamp={selectedTimestamp}
        onChangeSelectedCategory={onChangeCategory}
      />
      <ScheduleDesktopList column={schedule.length} title="Morning Schedule">
        {morning.map((day, index) => {
          const isActive = day.timestamp === selectedTimestamp;

          return (
            <ScheduleDesktopList.Item
              key={`morning-${index}`}
              isActive={isActive}
            >
              <CourseCard layout="desktop" showImage={isActive}>
                {day.course.map((course) => {
                  const formattedKey = `${course.gymName}-${index}`;
                  return <CourseCard.Item key={formattedKey} {...course} />;
                })}
              </CourseCard>
            </ScheduleDesktopList.Item>
          );
        })}
      </ScheduleDesktopList>

      <ScheduleDesktopList column={schedule.length} title="Evening Schedule">
        {evening.map((day, index) => {
          const isActive = day.timestamp === selectedTimestamp;

          return (
            <ScheduleDesktopList.Item
              key={`evening-${index}`}
              isActive={isActive}
            >
              <CourseCard layout="desktop" showImage={isActive}>
                {day.course.map((course) => {
                  const formattedKey = `${course.gymName}-${index}`;
                  return <CourseCard.Item key={formattedKey} {...course} />;
                })}
              </CourseCard>
            </ScheduleDesktopList.Item>
          );
        })}
      </ScheduleDesktopList>
    </div>
  );
};

export default GymScheduleDesktop;
