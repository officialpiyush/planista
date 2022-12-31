import BaseTargetCard from "../components/BaseTargetCard";
import YearBar from "../components/YearBar";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <YearBar />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <BaseTargetCard name="Day" target="day" />
          </div>

          <div>
            <BaseTargetCard name="Week" target="week" />
          </div>
        </div>
      </div>
    </div>
  );
}
