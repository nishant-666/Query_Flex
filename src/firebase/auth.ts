import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signUp = (payload: { email: string; password: string }) => {
  let response = createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );

  return response;
};

export const signIn = (payload: { email: string; password: string }) => {
  let response = signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );

  return response;
};

export const signout = () => {
  signOut(auth);
};
