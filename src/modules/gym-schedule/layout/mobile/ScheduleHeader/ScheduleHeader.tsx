import ScheduleDateButton from "@/modules/gym-schedule/components/ScheduleDateButton";

import Label from "@/components/Label";
import List from "@/components/List";

import { GYM_CATEGORY_WORDING } from "@/constant";
import type { GymCategoryEnum } from "@/model/misc";

import "./styles.scss";

interface ScheduleMobileHeaderProps {
  onChangeSelectedCategory: (category: GymCategoryEnum) => void;
  onChangeSelectedTimestamp: (timestamp: number) => void;
  scheduleTimestamps: number[];
  selectedCategory: GymCategoryEnum;
  selectedTimestamp: number;
}

const ScheduleMobileHeader = (props: ScheduleMobileHeaderProps) => {
  const {
    onChangeSelectedCategory,
    onChangeSelectedTimestamp,
    scheduleTimestamps,
    selectedCategory,
    selectedTimestamp,
  } = props;

  return (
    <section className="schedule-mobile-header">
      <List className="schedule-mobile-header__list-category">
        {Object.keys(GYM_CATEGORY_WORDING).map((item) => {
          const isActive = selectedCategory === item;
          return (
            <List.Item key={item}>
              <Label
                onClick={(e) => {
                  e.preventDefault();
                  onChangeSelectedCategory(item as GymCategoryEnum);
                }}
                text={GYM_CATEGORY_WORDING[item as GymCategoryEnum]}
                active={isActive}
                activeColor="secondary"
              />
            </List.Item>
          );
        })}
      </List>

      <List className="schedule-mobile-header__day-schedule">
        {scheduleTimestamps.map((item) => {
          const isActive = selectedTimestamp === item;

          return (
            <List.Item key={item}>
              <ScheduleDateButton
                timestamp={item}
                active={isActive}
                layout="mobile"
                onClickScheduleDate={onChangeSelectedTimestamp}
              />
            </List.Item>
          );
        })}
      </List>
    </section>
  );
};

export default ScheduleMobileHeader;
