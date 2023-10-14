import Image from "next/image";

import Icon from "@/components/Icon";
import Label from "@/components/Label";
import List from "@/components/List";
import Typography from "@/components/Typography";

import { GYM_CATEGORY_WORDING, TIME_CATEGORY_WORDING } from "@/constant";
import { TimeEnum } from "@/model/misc";

import type { CourseCardItemProps, PrivateCourseCardItemProps } from "./types";

const PrivateCourseCardItem = (props: PrivateCourseCardItemProps) => {
  const {
    backgroundImage,
    duration,
    gymCategory,
    gymLocation,
    gymName,
    instructor,
    layout = "mobile",
    showImage,
    timeCategory,
    timeSchedule,
  } = props;

  return (
    <List.Item className="course-card" data-option-layout={layout}>
      {showImage && (
        <Image
          fill
          src={backgroundImage}
          alt={gymName}
          objectFit="cover"
          unoptimized
          loading="lazy"
        />
      )}

      <section>
        <div className="course-card__title-section">
          <div>
            <Typography.h5
              color="heading"
              modifier="body-3"
              fontWeight={600}
              margin="0 0 4px"
            >
              {GYM_CATEGORY_WORDING[gymCategory]}
            </Typography.h5>
            <Typography.paragraph
              color="heading"
              modifier="body-5"
              fontWeight={500}
              margin="0 0 8px"
            >
              {instructor}
            </Typography.paragraph>
            {layout === "desktop" && (
              <Typography.paragraph
                color="text"
                modifier="body-5"
                margin="0 0 16px"
              >
                {gymLocation}
              </Typography.paragraph>
            )}
          </div>
          <Label
            text={gymName}
            active
            style={{ marginBottom: layout === "desktop" ? 16 : 0 }}
          />
        </div>

        {layout === "mobile" && (
          <Typography.paragraph
            color="text"
            modifier="body-5"
            margin="0 0 16px"
          >
            {gymLocation}
          </Typography.paragraph>
        )}

        <List
          alignItems={layout === "mobile" ? "center" : "flex-start"}
          gap={8}
          orientation={layout === "mobile" ? "horizontal" : "vertical"}
        >
          <List.Item alignItems="center">
            <Icon
              color="text"
              fontSize={18}
              icon={
                timeCategory === TimeEnum.EVENING
                  ? "partly_cloudy_night"
                  : "light_mode"
              }
            />
            <Typography.paragraph color="text" modifier="body-5">
              {TIME_CATEGORY_WORDING[timeCategory]} • {timeSchedule}
            </Typography.paragraph>
          </List.Item>
          <List.Item alignItems="center">
            <Icon color="text" icon={"timer"} fontSize={18} />
            <Typography.paragraph color="text" modifier="body-5">
              {duration} Minutes
            </Typography.paragraph>
          </List.Item>
        </List>
      </section>
    </List.Item>
  );
};

const CourseCardItem = (props: CourseCardItemProps) => {
  const {
    backgroundImage,
    duration,
    gymCategory,
    gymDifficulty,
    gymLocation,
    gymName,
    instructor,
    timeCategory,
    timeSchedule,
    ...rest
  } = props;

  return (
    <PrivateCourseCardItem
      {...rest}
      backgroundImage={backgroundImage}
      duration={duration}
      gymCategory={gymCategory}
      gymDifficulty={gymDifficulty}
      gymLocation={gymLocation}
      gymName={gymName}
      instructor={instructor}
      timeCategory={timeCategory}
      timeSchedule={timeSchedule}
    />
  );
};

CourseCardItem.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  __TYPE: "course-card-item",
};

export default CourseCardItem;
