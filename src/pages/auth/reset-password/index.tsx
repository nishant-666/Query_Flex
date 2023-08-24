import React from "react";
import ResetPasswordComponent from "@/components/Auth/resetPassword";
import styles from "../SignUp.module.scss";
import Navbar from "@/components/common/Navbar";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function SignUp() {
  const { loading } = useCheckAuth();

  if (loading) return <div style={{ display: "none" }}></div>;
  return (
    <div className={styles.signupMain}>
      <Navbar />

      <ResetPasswordComponent />
    </div>
  );
}
