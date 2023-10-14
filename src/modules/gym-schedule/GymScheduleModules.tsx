"use client";

import { useCallback } from "react";

import type { GymCategoryEnum } from "@/model/misc";

import GymScheduleDesktop from "./layout/desktop";
import GymScheduleMobile from "./layout/mobile";
import { useGymSchedule } from "./usecase/useGymSchedule";
import type { GymScheduleModulesProps } from "./types";

const GymScheduleModules = (props: GymScheduleModulesProps) => {
  const { layout } = props;
  const {
    action: { changeFormValue },
    state: { error, formFilter, loading, schedule },
  } = useGymSchedule({ filter: props.filter, schedule: props.schedule });

  const handleOnChangeCategory = useCallback(
    (category: GymCategoryEnum) => {
      changeFormValue({
        category,
      });
    },
    [changeFormValue]
  );

  if (layout === "mobile") {
    return (
      <GymScheduleMobile
        filter={formFilter}
        loading={loading}
        schedule={schedule}
        error={error}
        onChangeCategory={handleOnChangeCategory}
      />
    );
  }

  return (
    <GymScheduleDesktop
      filter={formFilter}
      loading={loading}
      schedule={schedule}
      error={error}
      onChangeCategory={handleOnChangeCategory}
    />
  );
};

export default GymScheduleModules;
