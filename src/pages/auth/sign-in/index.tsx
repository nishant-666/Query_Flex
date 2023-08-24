import React from "react";
import SignInComponent from "@/components/Auth/signin";
import styles from "../SignUp.module.scss";
import Navbar from "@/components/common/Navbar";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function SignIn() {
  const { loading } = useCheckAuth();

  if (loading) return <div style={{ display: "none" }}></div>;
  return (
    <div className={styles.signupMain}>
      <Navbar />

      <SignInComponent />
    </div>
  );
}
