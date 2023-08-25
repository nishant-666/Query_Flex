import React from "react";
import styles from "../Auth.module.scss";
import InputComponent from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";
import useSignIn from "../hooks/useSignIn";
import { useRouter } from "next/router";

import { useResetPass } from "../hooks/useResetPass";

export default function ResetPasswordComponent() {
  const { isError, setIsError, formData, getFormData } = useSignIn();
  const { resetPass, response } = useResetPass(formData.email);
  const router = useRouter();

  return (
    <div className={styles.authMain}>
      <div className={`${styles.cardMain}`}>
        <div className={`${styles.page}`}>
          {!response ? (
            <>
              <h1 className={styles.header}>Enter your Email</h1>
              <p className={styles.subheader}>
                You will recieve an Email to reset your Password!
              </p>
              <InputComponent
                name="email"
                onChange={getFormData}
                placeholder="Please Enter Your Email"
              />
              <div
                className={styles.nextIcon}
                onClick={() => {
                  formData.email ? resetPass() : setIsError(true);
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
            </>
          ) : (
            <div className={styles.resetSend}>
              <h1 className={styles.header}>Email Sent to {formData.email}!</h1>
              <p className={styles.subheader}>
                Check your Email for the Reset Link
              </p>

              <p
                onClick={() => router.push("/auth/sign-up")}
                className={styles.isSignIn}
              >
                Don't Have an Account?{" "}
                <span className={styles.signIn}>Sign Up</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
