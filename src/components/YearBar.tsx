import dayjs from "dayjs";

export default function YearBar() {
  const now = dayjs();
  const endOfYear = now.endOf("year");
  const daysElapsed = now.diff(now.startOf("year"), "day");
  const daysRemainingForYearEnd = endOfYear.diff(now, "day");

  return (
    <div className="flex flex-col flex-col-reverse gap-1 relative">
      <progress className="w-full h-8 bg-pastel-light border border-black" value={daysElapsed * 8} max="365" />
      <div className="flex gap-1.5 justify-end items-end">
        <span className="font-extrabold block text-lg">
          {daysRemainingForYearEnd}
        </span>
        <span className="block">days</span>
        <span className="block">remaining</span>
      </div>
    </div>
  );
}
