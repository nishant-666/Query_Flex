import React from "react";
import AuthComponent from "@/components/Auth/signup";
import styles from "../SignUp.module.scss";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function SignUp() {
  const { loading } = useCheckAuth();

  if (loading) return <div style={{ display: "none" }}></div>;
  return (
    <div className={styles.signupMain}>
      <AuthComponent />
    </div>
  );
}
