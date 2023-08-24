import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
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

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
  return "Please Check your Email";
};
