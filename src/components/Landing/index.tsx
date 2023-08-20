import React from "react";
import styles from "./Landing.module.scss";

export default function LandingComponent() {
  return (
    <section
      className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.landingMain}`}
    >
      <h1 className={`justify-center ${styles.header}`}>Landing Page</h1>
    </section>
  );
}
