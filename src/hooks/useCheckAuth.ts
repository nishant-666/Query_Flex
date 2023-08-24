import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
}

export const useCheckAuth = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response: any) => {
      if (response?.uid) {
        router.push("/landing-page");
        setLoading(false);
      } else {
        if (
          router.asPath !== "/auth/sign-in" &&
          router.asPath !== "/auth/sign-up"
        ) {
          router.push("/");
        }

        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { loading };
};
