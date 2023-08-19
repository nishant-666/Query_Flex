import React from "react";
import AuthComponent from "@/components/Auth";
import styles from "./SignUp.module.scss";
import Navbar from "@/components/common/Navbar";

export default function Auth() {
  return (
    <div className={styles.signupMain}>
      <Navbar />
      <AuthComponent />
    </div>
  );
}
