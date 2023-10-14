import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import startOfDay from "date-fns/startOfDay";
import startOfWeek from "date-fns/startOfWeek";

export const getCurrentDate = () =>
  new Date(new Date().toLocaleString("en", { timeZone: "Asia/Jakarta" }));

export const getDateCurrentWeek = (): [Date, Date] => {
  const start = startOfWeek(getCurrentDate());
  const end = endOfWeek(getCurrentDate());

  return [start, end];
};

export const getDateListWithinWeek = (
  formula: string = "yyyyMMdd"
): string[] => {
  return Array.from(Array(7).keys()).map((idx) => {
    const firstDay = startOfWeek(getCurrentDate());
    firstDay.setDate(firstDay.getDate() - firstDay.getDay() + idx);

    return format(firstDay, formula);
  });
};

export const getTimestampCurrentDay = (): number =>
  startOfDay(getCurrentDate()).getTime();
