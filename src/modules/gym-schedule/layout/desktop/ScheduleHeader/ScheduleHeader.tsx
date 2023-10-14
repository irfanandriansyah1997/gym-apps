import ScheduleDateButton from "@/modules/gym-schedule/components/ScheduleDateButton";

import Container from "@/components/Container";
import Label from "@/components/Label";
import List from "@/components/List";

import { GYM_CATEGORY_WORDING } from "@/constant";
import type { GymCategoryEnum } from "@/model/misc";

import "./styles.scss";

interface ScheduleDesktopHeaderProps {
  onChangeSelectedCategory: (category: GymCategoryEnum) => void;
  scheduleTimestamps: number[];
  selectedCategory: GymCategoryEnum;
  selectedTimestamp: number;
}

const ScheduleDesktopHeader = (props: ScheduleDesktopHeaderProps) => {
  const {
    onChangeSelectedCategory,
    scheduleTimestamps,
    selectedCategory,
    selectedTimestamp,
  } = props;

  return (
    <Container className="schedule-desktop-header">
      <List className="schedule-desktop-header__list-category">
        {Object.keys(GYM_CATEGORY_WORDING).map((item) => {
          const isActive = selectedCategory === item;
          return (
            <List.Item key={item}>
              <Label
                onClick={(e) => {
                  e.preventDefault();
                  onChangeSelectedCategory(item as GymCategoryEnum);
                }}
                size="large"
                text={GYM_CATEGORY_WORDING[item as GymCategoryEnum]}
                active={isActive}
                activeColor="secondary"
              />
            </List.Item>
          );
        })}
      </List>

      <List
        className="schedule-desktop-header__day-schedule"
        gap={16}
        style={{
          gridTemplateColumns: scheduleTimestamps.reduce(
            (result) => [result, "1fr"].join(" "),
            ""
          ),
        }}
      >
        {scheduleTimestamps.map((item) => {
          const isActive = selectedTimestamp === item;

          return (
            <List.Item key={item}>
              <ScheduleDateButton
                timestamp={item}
                active={isActive}
                layout="desktop"
              />
            </List.Item>
          );
        })}
      </List>
    </Container>
  );
};

export default ScheduleDesktopHeader;
