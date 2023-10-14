import { format } from "date-fns";

import { castingError } from "@/utils/error";
import { createHTTPRequest } from "@/utils/fetch-api";
import { DEFAULT_HEADERS_API, SCHEDULE_API_URL } from "@/constant";
import type { GenericAsyncResponse } from "@/types/fetch";

import { normalizeGymSchedule } from "./normalizer/gym-schedule";
import type { GymScheduleContractAPIType } from "./types/gym-schedule-contract";
import type {
  FetchGymScheduleAPIArgs,
  FetchGymScheduleResponseType,
} from "./types/gym-schedule-response";

export const fetchGymScheduleAPI = async (
  args: FetchGymScheduleAPIArgs
): Promise<GenericAsyncResponse<FetchGymScheduleResponseType>> => {
  try {
    const {
      category,
      dateRange: [from, to],
    } = args;

    const { error, result } =
      await createHTTPRequest<GymScheduleContractAPIType>({
        body: new URLSearchParams({
          dateFrom: format(from, "yyyy-MM-dd"),
          dateTo: format(to, "yyyy-MM-dd"),
          selectedCategory: category,
          selectedClub: "FIT HUB ARTERI PONDOK INDAH",
        }),
        headers: DEFAULT_HEADERS_API,
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API_URL}${SCHEDULE_API_URL}`,
      });

    if (error) throw error;

    return { result: { schedule: normalizeGymSchedule(result) } };
  } catch (e) {
    const error = castingError(e);

    return { error };
  }
};
