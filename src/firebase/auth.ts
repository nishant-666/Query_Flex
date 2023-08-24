import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signUp = (payload: { email: string; password: string }) => {
  const response = createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );

  return response;
};

export const signIn = (payload: { email: string; password: string }) => {
  const response = signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  );

  return response;
};

export const signout = () => {
  signOut(auth);
};

export const verifyUser = async (currentUser: any) => {
  try {
    await sendEmailVerification(currentUser);
    return "Verify your Account!";
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
  return "Please Check your Email";
};
