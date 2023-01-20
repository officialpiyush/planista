import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import { signInUser } from "../utils/realm";

export default function AuthButton() {
  const auth = getAuth();
  const [authUser, authLoading, authError] = useAuthState(auth);
  const [signInWithGoogle,, loading, error] = useSignInWithGoogle(auth);
  const [signOut, signOutLoading, signoutError] = useSignOut(auth);

  const handleRealmAuth = async () => {
    if (!authUser) return;

    const token = await authUser.getIdToken();
    await signInUser(token);
  };

  useEffect(() => {
    if (!authUser) return;

    handleRealmAuth();
  }, [authUser]);

  const signUserIn = async () => {
    await signInWithGoogle();
  };

  const signUserOut = async () => {
    await signOut();
  };

  if (loading || signOutLoading || authLoading) {
    return (
      <div className="flex items-center justify-center px-8 py-1 border-2 font-bold border-black bg-pastel-red">
        Loading...
      </div>
    );
  }

  if (error || signoutError || authError) {
    return (
      <div className="flex items-center justify-center px-8 py-1 border-2 font-bold border-black bg-pastel-red">
        Error!
      </div>
    );
  }

  if (authUser) {
    return (
      <button onClick={signUserOut} type="button" className="flex items-center justify-center gap-3 px-8 py-1 border-2 font-bold border-black bg-pastel-red">
        Logout
      </button>
    );
  }
  return (
    <button onClick={signUserIn} type="button" className="px-8 py-1 border-2 font-bold border-black bg-pastel-red">
      Login
    </button>
  );
}
