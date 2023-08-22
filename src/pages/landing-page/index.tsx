import React, { useEffect, useState } from "react";

import Navbar from "@/components/common/Navbar";

import styles from "@/styles/Landing.module.scss";
import { useRouter } from "next/router";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import LandingMain from "@/components/Landing";

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
  return <LandingMain />;
}
