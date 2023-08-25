import React, { useState } from "react";
import styles from "../Auth.module.scss";
import InputComponent from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";
import useSignIn from "../hooks/useSignIn";
import { useRouter } from "next/router";

export default function SignInComponent() {
  const { error, isError, setIsError, formData, getFormData, handleSubmit } =
    useSignIn();

  const router = useRouter();
  const [cardMiddle, setCardMiddle] = useState(true);

  return (
    <div className={styles.authMain}>
      <div className={`${styles.cardMain}`}>
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

            <p
              onClick={() => router.push("/auth/reset-password")}
              className={styles.forgetPassword}
            >
              Forgot Password?
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
