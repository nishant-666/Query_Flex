import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebaseConfig";

export default function useCheckVerification() {
  const [verificationLoading, setVerificationLoading] = useState(true);
  const [verificationChecked, setVerificationChecked] = useState(false);
  useEffect(() => {
    const checkForVerifiedInterval = setInterval(() => {
      auth.currentUser?.reload().then(() => {
        if (auth.currentUser?.emailVerified) {
          clearInterval(checkForVerifiedInterval);
          setVerificationChecked(true);
          setVerificationLoading(false);
        }
      });
    }, 1000);
  }, []);
  return { verificationChecked, verificationLoading };
}
