import { Breakpoint, Plock } from "react-plock";
import BaseTargetCard from "../components/BaseTargetCard";
import YearBar from "../components/YearBar";

const breakpoints: Breakpoint[] = [
  { size: 640, columns: 1 },
  { size: 1024, columns: 2 },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="pt-4 text-center text-3xl font-extrabold underline underline-double">Planista</div>
      <YearBar />

      <div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
        <Plock gap="1rem" breakpoints={breakpoints}>
          <div>
            <BaseTargetCard name="Day" target="day" />
          </div>

          <div>
            <BaseTargetCard name="Week" target="week" />
          </div>
        </Plock>
      </div>
    </div>
  );
}
