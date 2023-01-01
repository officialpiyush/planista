import { getAuth } from "firebase/auth";
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";

export default function AuthButton() {
  const auth = getAuth();
  const [authUser, authLoading, authError] = useAuthState(auth);
  const [signInWithGoogle,, loading, error] = useSignInWithGoogle(auth);
  const [signOut, signOutLoading, signoutError] = useSignOut(auth);

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
