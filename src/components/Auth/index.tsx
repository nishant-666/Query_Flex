import React, { useState } from "react";
import styles from "./Auth.module.scss";
import InputComponent from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";
import { signUp } from "@/firebase/auth";

export default function AuthComponent() {
  const [cardFront, setCardFront] = useState(true);
  const [cardMiddle, setCardMiddle] = useState(true);
  const [cardBack, setCardBack] = useState(true);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const { name, value } = event.target;
    let input = { [name]: value };

    setFormData((prev) => ({ ...prev, ...input }));
  };

  console.log(formData);
  return (
    <div className={styles.authMain}>
      <div className={styles.cardMain}>
        {cardFront ? (
          <div
            className={`${
              cardMiddle ? styles.cardFront : styles.cardFrontafter
            } ${styles.page}`}
          >
            <h1 className={styles.header}>Password</h1>

            {/* <p className={styles.subheader}>Please Enter your Password</p> */}
            <InputComponent
              name="password"
              type="password"
              onChange={getFormData}
              placeholder="Please Enter Your Password"
            />
            <div
              className={styles.nextIcon}
              onClick={() => {
                formData.password ? signUp() : setIsError(true);
              }}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>
            <span className={styles.error}>
              {isError ? "Password Please.." : ""}
            </span>
          </div>
        ) : (
          <></>
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
            {/* <p className={styles.subheader}>Please Enter your Email</p> */}

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
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
