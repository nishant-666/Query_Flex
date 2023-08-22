import React from "react";
import styles from "./QueryHistory.module.scss";
import { getQueries } from "@/hooks/useGetQueries";

export default function QueryHistory({
  setCurrentDoc,
  getCurrentDoc,
  setIsEdit,
  setCurrentId,
  currentId,
}: QueryHistory) {
  let { queries } = getQueries();
  return (
    <div className={styles.queryHistory}>
      <button
        onClick={() => {
          setCurrentDoc([]);
          setIsEdit(false);
          setCurrentId("");
        }}
        className="btn btn-success glass btn-outline btn-block"
      >
        New Query
      </button>

      <div className="mt-5">
        {queries?.map((query: any) => (
          <div
            className={
              currentId === query.id ? styles.selected : styles.queries
            }
            onClick={() => {
              getCurrentDoc(query.id);
              setIsEdit(true);
              console.log(query.id);
            }}
          >
            {query?.responsePrompt?.[0]?.content}
          </div>
        ))}
      </div>
    </div>
  );
}
