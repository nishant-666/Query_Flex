import React, { useState, useEffect } from "react";
import AuthComponent from "@/components/Auth/signup";
import styles from "../SignUp.module.scss";
import Navbar from "@/components/common/Navbar";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useRouter } from "next/router";

export default function SignUp() {
  const { loading } = useCheckAuth();

  if (loading) return <div style={{ display: "none" }}></div>;
  return (
    <div className={styles.signupMain}>
      <Navbar />

      <AuthComponent />
    </div>
  );
}
