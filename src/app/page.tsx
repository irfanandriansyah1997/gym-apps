import Head from "next/head";

import GymScheduleModules from "@/modules/gym-schedule";
import { fetchGymScheduleAPI } from "@/repository/gym-schedule/fetchGymScheduleAPI";

import { getDateCurrentWeek } from "@/utils/date";
import { normalizeLayout } from "@/utils/normalizer";
import { GymCategoryEnum } from "@/model/misc";
import type { LayoutType } from "@/types/layout";
import type { PageProps } from "@/types/page";

const currentWeekDateRange = getDateCurrentWeek();

const HomepageRouting = async (props: PageProps) => {
  const { searchParams = {} } = props;
  const viewport: LayoutType = normalizeLayout(searchParams?.viewport);
  const { result: { schedule = [] } = {} } = await fetchGymScheduleAPI({
    category: GymCategoryEnum.ALL,
    dateRange: currentWeekDateRange,
  });

  return (
    <div>
      <Head>
        <title>Gym Schedule</title>
      </Head>
      <GymScheduleModules
        layout={viewport}
        schedule={schedule}
        filter={{
          category: GymCategoryEnum.ALL,
          dateRange: currentWeekDateRange,
        }}
      />
    </div>
  );
};

export default HomepageRouting;
