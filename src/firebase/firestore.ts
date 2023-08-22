import { firestore, auth } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const queryCollection = collection(firestore, "query");

export const addQuery = (payload: {}) => {
  try {
    addDoc(queryCollection, { ...payload, userEmail: auth.currentUser?.email });
  } catch (err) {
    console.log(err);
  }
};
