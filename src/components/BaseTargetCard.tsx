import dayjs from "dayjs";
import { useEffect, useState } from "react";
import prettyMs from "pretty-ms";
import CheckBox from "./CheckBox";
import AddInput from "./AddInput";

interface BaseTargetCardProps {
  name: string;
  target: "day" | "week" | "month" | "year";
}

export default function BaseTargetCard({ name, target }: BaseTargetCardProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const millisecondsInTarget = {
    day: 86400000,
    week: 604800000,
    month: 2628000000,
    year: 31536000000,
  };

  const updateTime = () => {
    const now = dayjs();
    const endOfDay = now.endOf(target);
    const millisecondsRemaining = endOfDay.diff(now, "milliseconds");

    setTimeRemaining(millisecondsRemaining);
  };

  useEffect(() => {
    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-2 border-black bg-pastel-red">
      <div className="border-b-2 border-black py-1 px-2">
        <span className="text-xl">{name}</span>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <progress className="w-full" value={millisecondsInTarget[target] - timeRemaining} max={millisecondsInTarget[target]} />
          <div className="flex justify-end">
            <div>
              { prettyMs(timeRemaining, { secondsDecimalDigits: 0 })}
            </div>
          </div>
          <div />
        </div>

        <AddInput />

        <div className="-space-y-1">
          <CheckBox task="Some Random Task" checked={false} />
          <CheckBox task="Some Random Task Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat maiores quia, necessitatibus quisquam rerum praesentium harum quo molestiae nesciunt!" checked={false} />
          <CheckBox task="Some Random Task" checked={false} />
          <CheckBox task="Some Random Task" checked={false} />

          {name === "Week" ? (
            <>

              <CheckBox task="Some Random Task" checked={false} />
              <CheckBox task="Some Random Task" checked={false} />
              <CheckBox task="Some Random Task" checked={false} />
              <CheckBox task="Some Random Task" checked={false} />
            </>
          ) : ""}
        </div>
      </div>

    </div>
  );
}
