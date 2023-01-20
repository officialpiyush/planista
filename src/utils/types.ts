import { BSON } from "realm-web";

interface CreateTargetDuration {
  startAt: Date;
  endAt: Date;
}

interface CreateTargetOptions {
  name: string;
  repeat: "day" | "week" | "month" | undefined;
  duration: CreateTargetDuration | undefined;
}

interface TargetDbDocument {
  _id: BSON.ObjectID
  ownerId: string
  createdAt: number
  name: string
  repeat: "day" | "week" | "month";
  duration: any
}

export type { CreateTargetOptions, TargetDbDocument };
