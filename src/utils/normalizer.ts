import { GymCategoryEnum, GymDifficultyEnum, TimeEnum } from "@/model/misc";
import type { LayoutType } from "@/types/layout";
import type { Maybe } from "@/types/misc";

export const normalizeGymCategory = (
  unformattedValue: unknown
): Maybe<GymCategoryEnum> => {
  if (typeof unformattedValue === "string") {
    switch (unformattedValue) {
      case GymCategoryEnum.ALL:
      case GymCategoryEnum.CARDIO:
      case GymCategoryEnum.MIND_BODY:
      case GymCategoryEnum.STRENGTH:
        return unformattedValue;
    }
  }

  return undefined;
};

export const normalizeGymDifficulty = (
  unformattedValue: unknown
): GymDifficultyEnum => {
  if (typeof unformattedValue === "string") {
    switch (unformattedValue) {
      case GymDifficultyEnum.EASY:
      case GymDifficultyEnum.HARD:
      case GymDifficultyEnum.MEDIUM:
        return unformattedValue;
    }
  }

  return GymDifficultyEnum.NONE;
};

export const normalizeTime = (unformattedValue: unknown): Maybe<TimeEnum> => {
  if (typeof unformattedValue === "string") {
    switch (unformattedValue) {
      case TimeEnum.EVENING:
      case TimeEnum.MORNING:
        return unformattedValue;
    }
  }

  return undefined;
};

export const normalizeLayout = (unformattedValue: unknown): LayoutType => {
  if (typeof unformattedValue === "string") {
    switch (unformattedValue) {
      case "desktop":
      case "mobile":
        return unformattedValue;
    }
  }

  return "desktop";
};
