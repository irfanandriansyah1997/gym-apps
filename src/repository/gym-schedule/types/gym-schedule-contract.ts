import type { Maybe, NullAble } from "@/types/misc";

interface GymScheduleTime {
  backgroundImage?: NullAble<string>;
  classDifficulty?: NullAble<string>;
  classDuration?: NullAble<number>;
  className?: NullAble<string>;
  classType?: NullAble<string>;
  imageDetail?: NullAble<string>;
  instructor?: NullAble<string>;
  locationSchedule?: NullAble<string>;
  timeCategory?: NullAble<string>;
  timeSchedule?: NullAble<string>;
}

export interface GymScheduleContractAPIType {
  [key: string]: Maybe<NullAble<Maybe<NullAble<GymScheduleTime>>[]>>;
}
