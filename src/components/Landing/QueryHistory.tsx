import React from "react";
import styles from "./QueryHistory.module.scss";

export default function QueryHistory() {
  return (
    <div className={styles.queryHistory}>
      <button className="btn btn-success glass btn-outline btn-block">
        New Query
      </button>
    </div>
  );
}
