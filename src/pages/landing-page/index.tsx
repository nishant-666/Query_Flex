import React from "react";
import LandingComponent from "@/components/Landing";
import Navbar from "@/components/common/Navbar";
import styles from "@/styles/Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.landingComponent}>
      <Navbar />
      <LandingComponent />
    </div>
  );
}
