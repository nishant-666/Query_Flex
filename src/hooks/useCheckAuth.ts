import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useCheckAuth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response: any) => {
      if (response?.uid) {
        setEmail(response.email);

        auth.currentUser?.reload().then(() => {
          if (auth.currentUser?.emailVerified) {
            router.push(`/landing-page?isVerified=true`);
          } else {
            router.push(`/landing-page?isVerified=false`);
          }
        });
        setLoading(false);
      } else {
        if (router.asPath === "/auth/sign-in") {
          router.push("/auth/sign-in");
        } else if (router.asPath === "/auth/sign-up") {
          router.push("/auth/sign-up");
        } else if (router.asPath === "/auth/reset-password") {
          router.push("/auth/reset-password");
        } else {
          router.push("/");
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { loading, email };
};
