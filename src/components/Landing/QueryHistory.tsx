import React from "react";
import styles from "./QueryHistory.module.scss";
import { getQueries } from "@/hooks/useGetQueries";

export default function QueryHistory({
  setCurrentDoc,
  getCurrentDoc,
}: QueryHistory) {
  let { queries } = getQueries();

  return (
    <div className={styles.queryHistory}>
      <button
        onClick={() => setCurrentDoc([])}
        className="btn btn-success glass btn-outline btn-block"
      >
        New Query
      </button>

      <div className={styles.queries}>
        {queries?.map((query: any) => (
          <div onClick={() => getCurrentDoc(query.id)}>
            {query?.responsePrompt?.[0]?.content}
          </div>
        ))}
      </div>
    </div>
  );
}
