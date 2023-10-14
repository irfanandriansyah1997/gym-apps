///////////////////////////////////////////////////////////////////////////
// API Section
///////////////////////////////////////////////////////////////////////////

import { GymCategoryEnum, TimeEnum } from "@/model/misc";

export const DEFAULT_HEADERS_API = {
  "Content-Type": "application/x-www-form-urlencoded",
};

export const SCHEDULE_API_URL = `/schedules/loadSchedulesPublic`;

///////////////////////////////////////////////////////////////////////////
// Color & Theme
///////////////////////////////////////////////////////////////////////////

export const COLOR_PALLETE = {
  background: "#FCFCFC",
  border: "#F1F1F1",
  heading: "#212121",
  primary: "#123048",
  secondary: "#00c4d2",
  text: "#6D7588",
  white: "#FFF",
} as const;

///////////////////////////////////////////////////////////////////////////
// Translated enum value
///////////////////////////////////////////////////////////////////////////

export const GYM_CATEGORY_WORDING = {
  [GymCategoryEnum.ALL]: "All",
  [GymCategoryEnum.CARDIO]: "Cardio",
  [GymCategoryEnum.MIND_BODY]: "Mind & Body",
  [GymCategoryEnum.STRENGTH]: "Strength",
};

export const TIME_CATEGORY_WORDING = {
  [TimeEnum.MORNING]: "Morning",
  [TimeEnum.EVENING]: "Evening",
};
