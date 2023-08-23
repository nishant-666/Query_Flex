import { firestore, auth } from "./firebaseConfig";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  updateDoc,
  onSnapshot,
  getDocs,
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

export const showFirstQuery = async () => {
  try {
    const response = await getDocs(queryCollection);
    return response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    })[0];
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
