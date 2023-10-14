import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import startOfDay from "date-fns/startOfDay";
import startOfWeek from "date-fns/startOfWeek";

export const getDateCurrentWeek = (): [Date, Date] => {
  const start = startOfWeek(new Date());
  const end = endOfWeek(new Date());

  return [start, end];
};

export const getDateListWithinWeek = (
  formula: string = "yyyyMMdd"
): string[] => {
  return Array.from(Array(7).keys()).map((idx) => {
    const firstDay = startOfWeek(new Date());
    firstDay.setDate(firstDay.getDate() - firstDay.getDay() + idx);

    return format(firstDay, formula);
  });
};

export const getTimestampCurrentDay = (): number =>
  startOfDay(new Date()).getTime();
