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
  _id: any
  ownerId: string
  createdAt: number
  name: string
  repeat: string
  duration: any
}

export type { CreateTargetOptions, TargetDbDocument };
