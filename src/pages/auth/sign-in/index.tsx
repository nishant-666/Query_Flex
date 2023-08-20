import React from "react";
import SignInComponent from "@/components/Auth/signin";
import styles from "../SignUp.module.scss";
import Navbar from "@/components/common/Navbar";

export default function SignIn() {
  return (
    <div className={styles.signupMain}>
      <Navbar />

      <SignInComponent />
    </div>
  );
}
