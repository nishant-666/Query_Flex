import React, { useState } from "react";
import QueryHistory from "@/components/Landing/QueryHistory";
import LandingComponent from "./LandingComponent";
import styles from "@/styles/Landing.module.scss";
import { showCurrentQuery } from "@/firebase/firestore";

export default function LandingMain() {
  const [currentDoc, setCurrentDoc] = useState([]);
  const getCurrentDoc = async (id: string) => {
    let response = await showCurrentQuery(id);
    setCurrentDoc(response);
  };
  return (
    <div className={styles.landingPage}>
      <div className={styles.queryHistory}>
        <QueryHistory
          setCurrentDoc={setCurrentDoc}
          getCurrentDoc={getCurrentDoc}
        />
      </div>
      <div className={styles.landingComponent}>
        <LandingComponent currentDoc={currentDoc} />
      </div>
    </div>
  );
}
