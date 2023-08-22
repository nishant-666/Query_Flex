import { onSnapshot, collection, where, query } from "firebase/firestore";
import { firestore, auth } from "@/firebase/firebaseConfig";
import { useEffect, useState } from "react";

const queryCollection = collection(firestore, "query");

export const getQueries = () => {
  const [queries, setQueries] = useState([{}]);
  const getQuery = async () => {
    let emailQuery = query(
      queryCollection,
      where("userEmail", "==", auth.currentUser?.email)
    );
    await onSnapshot(emailQuery, (response) => {
      setQueries(
        response.docs
          .map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
          .map((item) => item)
      );
    });
  };

  useEffect(() => {
    getQuery();
  }, []);

  return { queries };
};
