import * as Realm from "realm-web";
import getUnixTime from "./time";
import { CreateTargetOptions } from "./types";

// const ObjectId = Realm.BSON.ObjectID;

const realmApp = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

const createTarget = async ({
  name,
  repeat,
  duration,
}: CreateTargetOptions): Promise<any> => {
  if (!realmApp.currentUser) return;

  const data = await realmApp.currentUser
    ?.mongoClient("mongodb-atlas")
    .db("planista")
    .collection("targets")
    .insertOne({
      ownerId: realmApp.currentUser.id,
      createdAt: getUnixTime(),
      name,
      repeat,
      duration,
    });

  // eslint-disable-next-line no-console
  console.log(data);

  // eslint-disable-next-line consistent-return
  return data.insertedId;
};

const getorCreateDefaultDocuments = async () => {
  if (!realmApp.currentUser) return;

  const database = realmApp.currentUser
    .mongoClient("mongodb-atlas")
    .db("planista");

  const documents: any[] = await database
    .collection("targets")
    .find({ ownerId: realmApp.currentUser.id });

  const mandatory = ["day", "week", "month"];
  const allRemaining = mandatory.filter((m) => !documents.find((d) => d.repeat === m));

  allRemaining.map(async (remaining) => {
    await createTarget({
      // magically uppercases the first letter
      name: remaining.charAt(0).toUpperCase() + remaining.slice(1),
      repeat: remaining as "day" | "week" | "month" | undefined,
      duration: undefined,
    });
  });
};

const signInUser = async (token: string) => {
  const credentials = Realm.Credentials.jwt(token);
  try {
    const user = await realmApp.logIn(credentials);
    await getorCreateDefaultDocuments();
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to log in user", error);
    return null;
  }
};

const getAllTargets = async (): Promise<any[]> => {
  if (!realmApp.currentUser) return [];

  const database = realmApp.currentUser
    .mongoClient("mongodb-atlas")
    .db("planista");

  const documents: any[] = await database
    .collection("targets")
    .aggregate([
      { $sort: { createdAt: 1 } },
    ]);
    // .find({ ownerId: realmApp.currentUser.id });

  return documents;
};

const insertTask = async (parentId: string, task: string) => {
  if (!realmApp.currentUser) return;

  realmApp.currentUser
    ?.mongoClient("mongodb-atlas")
    .db("planista")
    .collection("tasks")
    .insertOne({
      ownerId: realmApp.currentUser.id,
      name: task,
      status: "Open",
    });
};

export {
  realmApp, signInUser, insertTask, createTarget, getAllTargets,
};
