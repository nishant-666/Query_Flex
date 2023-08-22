import { firestore, auth } from "./firebaseConfig";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

const queryCollection = collection(firestore, "query");

export const addQuery = (payload: {}) => {
  try {
    addDoc(queryCollection, { ...payload, userEmail: auth.currentUser?.email });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuery = (id: string, payload: {}) => {
  try {
    const currentDoc = doc(queryCollection, id);
    updateDoc(currentDoc, {
      ...payload,
    });
  } catch (err) {
    console.log(err);
  }
};

export const showCurrentQuery = async (id: string, setCurrentDoc: Function) => {
  try {
    const currentDoc = doc(queryCollection, id);
    onSnapshot(currentDoc, (response) =>
      setCurrentDoc(response.data()?.responsePrompt)
    );
    // const response = await getDoc(currentDoc);
    // return response.data()?.responsePrompt;
  } catch (err) {
    console.log(err);
  }
};
