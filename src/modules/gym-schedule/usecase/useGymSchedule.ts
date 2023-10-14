import { useCallback, useState } from "react";

import type { GymScheduleModulesFilterType } from "@/modules/gym-schedule/types";
import { fetchGymScheduleAPI } from "@/repository/gym-schedule/fetchGymScheduleAPI";

import { useAsyncState } from "@/hooks/useAsyncState";
import useMount from "@/hooks/useMount";

import type { GymSheduleDayType } from "@/model/gym-schedule";

interface GymScheduleUseCaseArgs {
  filter: GymScheduleModulesFilterType;
  schedule: GymSheduleDayType[];
}

export const useGymSchedule = (args: GymScheduleUseCaseArgs) => {
  const { filter, schedule } = args;
  const [formFilter, setFormFilter] =
    useState<GymScheduleModulesFilterType>(filter);
  const [{ error, loading, state }, setState] = useAsyncState<
    GymSheduleDayType[]
  >({
    initialLoading: schedule.length === 0,
    initialState: schedule,
  });

  const handleFetchScheduleAPI = useCallback(
    async (args: GymScheduleModulesFilterType) => {
      setState.setLoading(true);

      const { error, result } = await fetchGymScheduleAPI(args);

      if (result) setState.setSuccess(result.schedule);
      if (error) setState.setError(error);
    },
    [setState]
  );

  const handleChangeFormValue = useCallback(
    (args: Partial<GymScheduleModulesFilterType>) => {
      setFormFilter((prev) => ({ ...prev, ...args }));
      const tempFormFilter = {
        category: formFilter.category,
        dateRange: formFilter.dateRange,
        ...args,
      };

      setFormFilter(tempFormFilter);
      handleFetchScheduleAPI(tempFormFilter);
    },
    [formFilter.category, formFilter.dateRange, handleFetchScheduleAPI]
  );

  /**
   * INFO: This method will be invoked because hit API from SSR failed so we automaticaly hit schedule API on first load
   */
  useMount(async () => {
    if (schedule.length === 0) await handleFetchScheduleAPI(filter);
  });

  return {
    action: {
      changeFormValue: handleChangeFormValue,
    },
    state: {
      error,
      formFilter,
      loading,
      schedule: state,
    },
  };
};
