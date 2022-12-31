import dayjs from "dayjs";

export default function YearBar() {
  const now = dayjs();
  const endOfYear = now.endOf("year");
  const daysElapsed = now.diff(now.startOf("year"), "day");
  const daysRemainingForYearEnd = endOfYear.diff(now, "day");

  return (
    <div className="flex flex-col gap-1 relative">
      <progress className="w-full h-8 mt-2 bg-pastel-light border border-black" value={daysElapsed * 8} max="365" />
      <div className="flex justify-end">
        {daysRemainingForYearEnd}
        {" "}
        Remaining
      </div>
    </div>
  );
}
