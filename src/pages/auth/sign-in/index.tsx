import React, { useEffect, useState } from "react";
import SignInComponent from "@/components/Auth/signin";
import styles from "../SignUp.module.scss";
import Navbar from "@/components/common/Navbar";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useRouter } from "next/router";

export default function SignIn() {
  const { authState } = useCheckAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (authState?.uid) {
      router.push("/landing-page");
    } else {
      setLoading(false);
    }
  }, [authState?.uid]);
  if (loading) return <div style={{ display: "none" }}></div>;
  return (
    <div className={styles.signupMain}>
      <Navbar />

      <SignInComponent />
    </div>
  );
}
