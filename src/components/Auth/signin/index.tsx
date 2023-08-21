import React, { useState } from "react";
import styles from "../Auth.module.scss";
import InputComponent from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";
import useSignIn from "../hooks/useSignIn";
import { useRouter } from "next/router";
import MidSignUp from "./MidSignUp";

export default function SignInComponent() {
  const {
    error,
    isError,
    setIsError,
    formData,
    getFormData,
    handleSubmit,
    signUpComplete,
  } = useSignIn();

  const router = useRouter();
  const [cardFront] = useState(true);
  const [cardMiddle, setCardMiddle] = useState(true);
  console.log(signUpComplete);
  if (signUpComplete) return <MidSignUp />;
  return (
    <div className={styles.authMain}>
      <div className={`${styles.cardMain}`}>
        {cardFront ? (
          <div
            className={`${
              cardMiddle ? styles.cardFront : styles.cardFrontafter
            } ${styles.page}`}
          >
            <h1 className={styles.header}>Password</h1>

            <InputComponent
              name="password"
              type="password"
              onChange={getFormData}
              placeholder="Please Enter Your Password"
            />
            <div
              className={styles.nextIcon}
              onClick={() => {
                formData.password ? handleSubmit() : setIsError(true);
              }}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>
            <span className={styles.error}>
              {isError ? (error ? error : "Password is Required") : ""}
            </span>

            <p
              onClick={() => router.push("/auth/sign-up")}
              className={styles.isSignIn}
            >
              Don't Have an Account?{" "}
              <span className={styles.signIn}>Sign Up</span>
            </p>
          </div>
        ) : (
          <></>
        )}
        {cardMiddle ? (
          <div className={`${styles.page}`}>
            <h1 className={styles.header}>Your Email</h1>

            <InputComponent
              name="email"
              onChange={getFormData}
              placeholder="Please Enter Your Email"
            />
            <div
              className={styles.nextIcon}
              onClick={() => {
                formData.email ? setCardMiddle(false) : setIsError(true);
              }}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>
            <span className={styles.error}>
              {isError ? "Email is Required" : ""}
            </span>

            <p
              onClick={() => router.push("/auth/sign-up")}
              className={styles.isSignIn}
            >
              Don't Have an Account?{" "}
              <span className={styles.signIn}>Sign Up</span>
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}