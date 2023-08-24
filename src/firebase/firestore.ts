import { firestore, auth } from "./firebaseConfig";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  updateDoc,
  onSnapshot,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const queryCollection = collection(firestore, "query");

export const addQuery = (id: string, payload: {}) => {
  try {
    const currentDoc = doc(queryCollection, id);
    setDoc(currentDoc, {
      ...payload,
      id: id,
      userEmail: auth.currentUser?.email,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateQuery = (id: string, payload: {}) => {
  try {
    const currentDoc = doc(queryCollection, id);
    updateDoc(currentDoc, {
      ...payload,
      id: id,
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

export const deleteQuery = (id: string) => {
  try {
    const currentDoc = doc(queryCollection, id);
    deleteDoc(currentDoc);
  } catch (err) {
    console.log(err);
  }
};
