import type { PropsWithChildren } from "react";

import type { GymCourseType } from "@/model/gym-schedule";
import type { LayoutType } from "@/types/layout";

export interface CourseCardItemProps extends GymCourseType {}

export interface PrivateCourseCardItemProps extends CourseCardItemProps {
  layout?: LayoutType;
  showImage?: boolean;
}

export type CourseCardProps = {
  layout?: LayoutType;
  showImage?: boolean;
  title?: string;
};

export type CourseCardFnType = ((
  props: PropsWithChildren<CourseCardProps>
) => JSX.Element) & {
  Item: (props: CourseCardItemProps) => JSX.Element;
};
