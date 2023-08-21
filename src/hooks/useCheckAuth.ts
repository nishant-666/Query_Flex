import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useCheckAuth = () => {
  const [authState, setAuthState] = useState({ uid: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      setAuthState(
        response ?? {
          uid: "",
        }
      );
    });
  }, []);

  return { authState };
};
