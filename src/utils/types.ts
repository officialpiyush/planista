interface CreateTargetDuration {
  startAt: Date;
  endAt: Date;
}

interface CreateTargetOptions {
  name: string;
  repeat: "day" | "week" | "month" | undefined;
  duration: CreateTargetDuration | undefined;
}

// eslint-disable-next-line import/prefer-default-export
export type { CreateTargetOptions };
