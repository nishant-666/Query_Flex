import { useEffect, useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/router";

export default function useCheckVerification() {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkForVerifiedInterval = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          clearInterval(checkForVerifiedInterval);
          setIsVerified(true);
          router.push(`/landing-page?isVerified=true`);
        } else {
          router.push(`/landing-page?isVerified=false`);
        }
      });
    }, 1000);
  }, []);

  return { isVerified };
}
