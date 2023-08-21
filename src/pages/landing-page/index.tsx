import React, { useEffect, useState } from "react";
import LandingComponent from "@/components/Landing";
import Navbar from "@/components/common/Navbar";
import styles from "@/styles/Landing.module.scss";
import { useRouter } from "next/router";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function Landing() {
  const { authState } = useCheckAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (authState.uid) {
      setLoading(false);
      router.push("/landing-page");
    } else {
      setLoading(true);
    }
  }, [authState]);
  return (
    <div className={styles.landingComponent}>
      <Navbar authState={authState} />
      <LandingComponent />
    </div>
  );
}
