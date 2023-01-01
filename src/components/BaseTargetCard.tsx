import dayjs from "dayjs";
import { useEffect, useState } from "react";
import prettyMs from "pretty-ms";
import CheckBox from "./CheckBox";
import AddInput from "./AddInput";
import { insertTask } from "../utils/realm";

interface BaseTargetCardProps {
  id: string;
  name: string;
  repeat: "day" | "week" | "month" | "year";
}

export default function BaseTargetCard({
  id, name, repeat,
}: BaseTargetCardProps) {
  const [tasks, setTasks] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const millisecondsInTarget = {
    day: 86400000,
    week: 604800000,
    month: 2628000000,
    year: 31536000000,
  };

  const addTask = async (taskName: string) => {
    const createdTask = await insertTask(id, taskName);
    if (!createdTask) return;

    setTasks([...tasks, createdTask.name]);
  };

  const updateTime = () => {
    const now = dayjs();
    const endOfDay = now.endOf(repeat);
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

  const onItemAdd = async (task: string) => {
    await addTask(task);
  };

  return (
    <div className="border-2 border-black bg-pastel-red">
      <div className="border-b-2 border-black py-1 px-2">
        <span className="text-xl">{name}</span>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <progress className="w-full" value={millisecondsInTarget[repeat] - timeRemaining} max={millisecondsInTarget[repeat]} />
          <div className="flex justify-end">
            <div>
              { prettyMs(timeRemaining, { secondsDecimalDigits: 0 })}
            </div>
          </div>
          <div />
        </div>

        <AddInput onAdd={onItemAdd} />

        <div className="-space-y-1">
          {tasks.length
            ? tasks.map((task) => <CheckBox key={task} task={task} checked={false} />)
            : <div className="text-center">No tasks found</div>}
        </div>
      </div>

    </div>
  );
}
