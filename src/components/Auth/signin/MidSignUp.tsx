import React from "react";
import styles from "../Auth.module.scss";

export default function MidSignUp() {
  return (
    <section
      className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.midSignUp}`}
    >
      <h1 className={`justify-center ${styles.header}`}>
        Taking you to the Home Page!
      </h1>
    </section>
  );
}
