import React from "react";
import styles from "./Landing.module.scss";
import { AiOutlineSend } from "react-icons/ai";

export default function LandingSuggestions({ setPrompt }: LandingSuggestions) {
  return (
    <div className={styles.landingSuggestions}>
      <div
        className={styles.suggestionCard}
        onClick={() => setPrompt("Write a Query using SQL")}
      >
        <div>
          <p className={styles.title}>Write a Query</p>
          <p className={styles.subtitle}>using SQL</p>
        </div>
        <AiOutlineSend className={styles.sendBtn} size={20} />
      </div>
      <div
        className={styles.suggestionCard}
        onClick={() => setPrompt("Debug a Query using MongoDB")}
      >
        <div>
          <p className={styles.title}>Debug a Query</p>
          <p className={styles.subtitle}>using MongoDB</p>
        </div>
        <AiOutlineSend className={styles.sendBtn} size={20} />
      </div>
      <div
        className={styles.suggestionCard}
        onClick={() => setPrompt("Create a Table with required fields")}
      >
        <div>
          <p className={styles.title}>Create a Table</p>
          <p className={styles.subtitle}>with required fields</p>
        </div>
        <AiOutlineSend className={styles.sendBtn} size={20} />
      </div>
      <div
        className={styles.suggestionCard}
        onClick={() => setPrompt("List Tables from your database")}
      >
        <div>
          <p className={styles.title}>List Tables</p>
          <p className={styles.subtitle}>from your database</p>
        </div>
        <AiOutlineSend className={styles.sendBtn} size={20} />
      </div>
    </div>
  );
}
