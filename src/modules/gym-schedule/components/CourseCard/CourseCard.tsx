import type { FunctionComponentElement } from "react";
import { Children, cloneElement, useMemo } from "react";

import Icon from "@/components/Icon";
import List from "@/components/List";
import Typography from "@/components/Typography";

import { checkIsElementExistProps } from "@/utils/dom";

import CourseCardItem from "./CouseCardItem";
import type {
  CourseCardFnType,
  PrivateCourseCardItemProps as ItemProps,
} from "./types";

import "./styles.scss";

const CourseCard: CourseCardFnType = (props) => {
  const { children, layout = "mobile", showImage, title } = props;

  const injectedProps = useMemo<Partial<ItemProps>>(
    () => ({ layout, showImage }),
    [layout, showImage]
  );

  return (
    <section className="course-container">
      {title && (
        <Typography.h5 color="heading" margin="0 0 8px">
          <Icon icon="date_range" fontSize={18} />
          {title}
        </Typography.h5>
      )}

      <List
        className="course-list"
        orientation="vertical"
        gap={16}
        alignItems="center"
        data-option-layout={layout}
      >
        {Children.toArray(children).map((element) => {
          if (
            checkIsElementExistProps({
              element,
              propsKey: "__TYPE",
              propsValue: "course-card-item",
            })
          ) {
            return cloneElement(
              element as FunctionComponentElement<ItemProps>,
              injectedProps
            );
          }

          return null;
        })}
      </List>
    </section>
  );
};

CourseCard.Item = CourseCardItem;

export default CourseCard;
