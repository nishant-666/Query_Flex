import React, { useState } from "react";
import styles from "../Auth.module.scss";
import InputComponent from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";
import useSignUp from "../hooks/useSignUp";

export default function SignUp() {
  const {
    error,
    isError,
    setIsError,
    formData,
    getFormData,
    handleSubmit,
    isVerified,
  } = useSignUp();
  const router = useRouter();
  const [cardMiddle, setCardMiddle] = useState(true);
  const [cardBack, setCardBack] = useState(true);

  return (
    <div className={styles.authMain}>
      <div className={styles.cardMain}>
        {!isVerified ? (
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
              {isError ? (error ? error : "Password Please") : ""}
            </span>
          </div>
        ) : (
          <div
            className={`${
              cardMiddle ? styles.cardFront : styles.cardFrontafter
            } ${styles.page}`}
          >
            <p className={styles.verifiedSignIn}>
              <h1 className={styles.header}>Verify Your Email</h1>
              <p className={styles.subheader}>
                Check your Email for any Verification Link!
              </p>
              <span
                onClick={() => router.push("/auth/sign-in")}
                className={styles.signIn}
              >
                Sign in to your Account?
              </span>
            </p>
          </div>
        )}
        {cardMiddle ? (
          <div
            className={`${
              cardBack ? styles.cardMiddle : styles.cardMiddleafter
            } ${styles.page}`}
          >
            <h1 className={styles.header}>
              Your Email {formData.email ? `is ${formData.email}` : ""}
            </h1>

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
          </div>
        ) : (
          <></>
        )}
        {cardBack ? (
          <div className={`${styles.cardBack} ${styles.page}`}>
            <h1 className={styles.header}>
              Welcome <span>{formData.name}</span>
            </h1>
            {/* <p className={styles.subheader}>Please Enter your Name</p> */}

            <InputComponent
              name="name"
              onChange={getFormData}
              placeholder="Please Enter Your Name"
            />
            <div
              className={styles.nextIcon}
              onClick={() => {
                formData.name ? setCardBack(false) : setIsError(true);
              }}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>

            <span className={styles.error}>
              {isError ? "Name is Required" : ""}
            </span>

            <p className={styles.isSignIn}>
              Already Have an Account?{" "}
              <span
                onClick={() => router.push("/auth/sign-in")}
                className={styles.signIn}
              >
                Sign In
              </span>
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
