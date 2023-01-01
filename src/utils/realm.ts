import * as Realm from "realm-web";

const realmApp = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

const signInUser = async (token: string) => {
  const credentials = Realm.Credentials.jwt(token);
  try {
    const user = await realmApp.logIn(credentials);
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to log in user", error);
    return null;
  }
};

export { realmApp, signInUser };
