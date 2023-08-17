import React from "react";
import styles from "./Auth.module.scss";
import CardWithForm from "@/components/common/Card";

export default function AuthComponent() {
  return (
    <div className={styles.authMain}>
      <CardWithForm />
    </div>
  );
}
