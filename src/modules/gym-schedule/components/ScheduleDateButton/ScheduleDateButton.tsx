import format from "date-fns/format";
import type { MouseEventHandler } from "react";
import { useCallback, useMemo } from "react";

import Section from "@/components/Section";
import SingleSwitch from "@/components/SingleSwitch";
import Typography from "@/components/Typography";

import type { LayoutType } from "@/types/layout";

import "./styles.scss";

interface ScheduleDateButtonProps {
  active: boolean;
  layout: LayoutType;
  onClickScheduleDate?: (timestamp: number) => void;
  timestamp: number;
}

const ScheduleDateButton = (props: ScheduleDateButtonProps) => {
  const { active, layout, onClickScheduleDate, timestamp } = props;

  const { dayName, desktopDate, mobileDate } = useMemo(() => {
    const currentDate = new Date(timestamp);

    return {
      dayName: format(currentDate, "EEE"),
      desktopDate: format(currentDate, "dd MMM YYY"),
      mobileDate: format(currentDate, "dd"),
    };
  }, [timestamp]);

  const handleOnClickCard: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.preventDefault();

      onClickScheduleDate?.(timestamp);
    },
    [onClickScheduleDate, timestamp]
  );

  return (
    <div
      tabIndex={0}
      role="button"
      className="schedule-date-button"
      data-options-layout={layout}
      data-options-active={Boolean(active)}
      onClick={handleOnClickCard}
    >
      <SingleSwitch match={layout}>
        <Section name="mobile">
          <Typography modifier="body-2" color={active ? "white" : "primary"}>
            {mobileDate}
          </Typography>
          <Typography modifier="body-4" color={active ? "white" : "text"}>
            {dayName}
          </Typography>
        </Section>

        <Section name="desktop">
          <Typography modifier="body-2" color={active ? "white" : "primary"}>
            {dayName}
          </Typography>
          <Typography modifier="body-3" color={active ? "white" : "text"}>
            {desktopDate}
          </Typography>
        </Section>
      </SingleSwitch>
    </div>
  );
};

export default ScheduleDateButton;
