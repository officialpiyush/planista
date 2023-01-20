import { useEffect, useState } from "react";
import { Breakpoint, Plock } from "react-plock";
import AuthButton from "../components/AuthButton";
import BaseTargetCard from "../components/BaseTargetCard";
import YearBar from "../components/YearBar";
import { getAllTargets } from "../utils/realm";
import { TargetDbDocument } from "../utils/types";

const breakpoints: Breakpoint[] = [
  { size: 640, columns: 1 },
  { size: 1024, columns: 2 },
];

export default function HomePage() {
  const [targets, setTargets] = useState<any[]>([]);

  const fetchTargets = async () => {
    const targetsFromDatabase = await getAllTargets();

    setTargets(targetsFromDatabase);
  };

  useEffect(() => {
    fetchTargets();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-red900 flex items-end justify-between">
        <div className="pt-4 text-center text-3xl font-extrabold underline underline-double">
          Planista
        </div>
        <AuthButton />
      </div>
      <YearBar />

      <div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
        <Plock gap="1rem" breakpoints={breakpoints}>
          {targets.map((target: TargetDbDocument) => (
            <div key={`${target.ownerId}-${target.name}`}>
              <BaseTargetCard
                // eslint-disable-next-line no-underscore-dangle
                id={target._id.toHexString()}
                name={target.name}
                repeat={target.repeat}
              />
            </div>
          ))}
        </Plock>
      </div>
    </div>
  );
}
