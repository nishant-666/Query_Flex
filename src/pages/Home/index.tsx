import React from "react";
import styles from "./Home.module.scss";
import AuthComponent from "@/components/Auth";

export default function HomePage() {
  return (
    <div className={styles.homeMain}>
      <AuthComponent />
    </div>
  );
}
