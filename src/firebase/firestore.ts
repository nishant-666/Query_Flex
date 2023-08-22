import { firestore, auth } from "./firebaseConfig";
import { addDoc, collection, getDoc, doc } from "firebase/firestore";

const queryCollection = collection(firestore, "query");

export const addQuery = (payload: {}) => {
  try {
    addDoc(queryCollection, { ...payload, userEmail: auth.currentUser?.email });
  } catch (err) {
    console.log(err);
  }
};

export const showCurrentQuery = async (id: string) => {
  try {
    const currentDoc = doc(queryCollection, id);

    const response = await getDoc(currentDoc);
    return response.data()?.responsePrompt;
  } catch (err) {
    console.log(err);
  }
};
