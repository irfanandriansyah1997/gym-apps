"use client";
import { useState } from "react";
import { useMemo } from "react";

import CourseCard from "@/modules/gym-schedule/components/CourseCard";
import type { GymSchedulePresentationProps } from "@/modules/gym-schedule/types";

import { getTimestampCurrentDay } from "@/utils/date";
import type { GymSheduleDayType } from "@/model/gym-schedule";

import ScheduleMobileHeader from "./ScheduleHeader";

// TODO: need to create proper loading & error layout

const GymScheduleMobile = (props: GymSchedulePresentationProps) => {
  const {
    filter: { category },
    onChangeCategory,
    schedule,
  } = props;
  const [selectedTimestamp, setSelectedTimestamp] = useState<number>(() =>
    getTimestampCurrentDay()
  );

  const { filteredSchedule, scheduleTimestamps } = useMemo(() => {
    return schedule.reduce<{
      filteredSchedule?: GymSheduleDayType;
      scheduleTimestamps: number[];
    }>(
      (result, day) => {
        result.scheduleTimestamps.push(day.timestamp);

        if (!result.filteredSchedule && selectedTimestamp === day.timestamp) {
          result.filteredSchedule = day;
        }

        return result;
      },
      { filteredSchedule: undefined, scheduleTimestamps: [] }
    );
  }, [schedule, selectedTimestamp]);

  return (
    <section>
      <ScheduleMobileHeader
        scheduleTimestamps={scheduleTimestamps}
        selectedCategory={category}
        selectedTimestamp={selectedTimestamp}
        onChangeSelectedTimestamp={setSelectedTimestamp}
        onChangeSelectedCategory={onChangeCategory}
      />

      {typeof filteredSchedule !== "undefined" && (
        <>
          {filteredSchedule.class.morning.length > 0 && (
            <CourseCard title="Morning Schedule" showImage>
              {filteredSchedule.class.morning.map((course, index) => {
                const formattedKey = `${course.gymName}-${index}`;

                return <CourseCard.Item key={formattedKey} {...course} />;
              })}
            </CourseCard>
          )}

          {filteredSchedule.class.evening.length > 0 && (
            <CourseCard title="Evening Schedule" showImage>
              {filteredSchedule.class.evening.map((course, index) => {
                const formattedKey = `${course.gymName}-${index}`;

                return <CourseCard.Item key={formattedKey} {...course} />;
              })}
            </CourseCard>
          )}
        </>
      )}
    </section>
  );
};

export default GymScheduleMobile;
