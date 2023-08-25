import React from "react";
import styles from "./QueryHistory.module.scss";
import { getQueries } from "@/hooks/useGetQueries";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteQuery } from "@/firebase/firestore";
import { signout } from "@/firebase/auth";
import { useRouter } from "next/router";

export default function QueryHistory({
  setCurrentDoc,
  getCurrentDoc,
  setIsEdit,
  setCurrentId,
  currentId,
  setIsDrawerOpen,
}: QueryHistory) {
  const { queries } = getQueries();
  const router = useRouter();
  return (
    <div className={styles.queryHistory}>
      <div className="mt-5">
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setCurrentDoc([]);
              setIsEdit(false);
              setCurrentId(Date.now());
              setIsDrawerOpen(false);
            }}
            className="btn btn-success glass btn-outline btn-block"
          >
            New Query
          </button>
        </div>
        <div className="mt-8">
          {queries?.map((query: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                getCurrentDoc(query.id);
                setIsEdit(true);
                setIsDrawerOpen(false);
              }}
              className={
                currentId === query.id ? styles.selected : styles.queries
              }
            >
              <div>
                {query?.responsePrompt?.[0]?.content.length > 25
                  ? `${query?.responsePrompt?.[0]?.content.slice(0, 25)}..`
                  : query?.responsePrompt?.[0]?.content}
              </div>
              {currentId === query.id ? (
                <AiOutlineDelete
                  className={styles.deleteIcon}
                  onClick={() => deleteQuery(query.id)}
                  size={20}
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className="btn glass btn-outline btn-block mt-5"
            onClick={() => {
              signout();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
