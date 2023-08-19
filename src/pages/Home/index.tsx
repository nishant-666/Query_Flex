import React from "react";
import styles from "./Home.module.scss";
import Navbar from "@/components/common/Navbar";

export default function HomePage() {
  return (
    <div className={styles.homeMain}>
      <Navbar />
    </div>
  );
}
