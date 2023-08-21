import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useCheckAuth = () => {
  const [authState, setAuthState] = useState({ email: "", uid: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (response: any) => {
      setAuthState(response);
    });
  }, []);

  return { authState };
};
