import React, { useState } from "react";
import QueryHistory from "@/components/Landing/QueryHistory";
import LandingComponent from "./LandingComponent";
import styles from "@/styles/Landing.module.scss";
import { showCurrentQuery } from "@/firebase/firestore";

export default function LandingMain() {
  const [currentDoc, setCurrentDoc] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(Date.now());
  const getCurrentDoc = async (id: string) => {
    await showCurrentQuery(id, setCurrentDoc);
    setCurrentId(Number(id));
  };
  return (
    <div className={styles.landingPage}>
      <div className={styles.queryHistory}>
        <QueryHistory
          setCurrentDoc={setCurrentDoc}
          getCurrentDoc={getCurrentDoc}
          setIsEdit={setIsEdit}
          setCurrentId={setCurrentId}
          currentId={currentId.toString()}
        />
      </div>
      <div className={styles.landingComponent}>
        <LandingComponent
          currentDoc={currentDoc}
          currentId={currentId.toString()}
          isEdit={isEdit}
          setCurrentId={setCurrentId}
        />
      </div>
    </div>
  );
}
