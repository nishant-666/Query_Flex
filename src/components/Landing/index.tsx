import React from "react";
import styles from "./Landing.module.scss";
import { TfiReload } from "react-icons/tfi";

export default function LandingComponent() {
  return (
    <section className={`${styles.landingMain}`}>
      <textarea
        rows={10}
        className={`textarea textarea-accent ${styles.textArea}`}
        placeholder="Enter your Query!"
      ></textarea>
      <section className={styles.btnContainer}>
        <button className={`btn btn-accent ${styles.submitBtn}`}>Submit</button>
        <TfiReload className={styles.reload} size={45} />
      </section>
    </section>
  );
}
