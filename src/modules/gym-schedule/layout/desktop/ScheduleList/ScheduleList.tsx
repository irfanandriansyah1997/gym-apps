import type { PropsWithChildren } from "react";

import Container from "@/components/Container";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";

import "./styles.scss";

interface ScheduleDesktopListItemProps {
  isActive: boolean;
}

const ScheduleDesktopListItem = (
  props: PropsWithChildren<ScheduleDesktopListItemProps>
) => {
  const { children, isActive } = props;

  return (
    <section
      className="schedule-desktop-list__day-list-item"
      data-option-active={isActive}
    >
      {children}
    </section>
  );
};

interface ScheduleDesktopListProps {
  column: number;
  title: string;
}

const ScheduleDesktopList = (
  props: PropsWithChildren<ScheduleDesktopListProps>
) => {
  const { children, column, title } = props;

  return (
    <Container className="schedule-desktop-list">
      <Typography.h1 modifier="body-1" color="heading" margin="0 0 8px">
        <Icon icon="date_range" fontSize={32} />
        {title}
      </Typography.h1>
      <div
        className="schedule-desktop-list__day-list"
        style={{
          gridTemplateColumns: new Array(column)
            .fill(null)
            .reduce((result) => [result, "1fr"].join(" "), ""),
        }}
      >
        {children}
      </div>
    </Container>
  );
};

ScheduleDesktopList.Item = ScheduleDesktopListItem;

export default ScheduleDesktopList;
