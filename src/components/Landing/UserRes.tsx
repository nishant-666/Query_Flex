import React from "react";
import styles from "./Landing.module.scss";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function UserRes({ text }: ResponseText) {
  const { authState } = useCheckAuth();
  const credentials = authState.email.slice(0, 2).toUpperCase();

  return (
    <section className={styles.userPrompt}>
      <div className={styles.userCredentials}>{credentials}</div>
      {text}
    </section>
  );
}
