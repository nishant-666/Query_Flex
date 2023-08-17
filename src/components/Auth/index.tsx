import React, { useState } from "react";
import styles from "./Auth.module.scss";
import { InputComponent } from "@/components/common/Input";
import { BsArrowRightShort } from "react-icons/bs";

export default function AuthComponent() {
  const [cardFront, setCardFront] = useState(true);
  const [cardMiddle, setCardMiddle] = useState(true);
  const [cardBack, setCardBack] = useState(true);

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
            <p>Please Enter your Password</p>
            <div
              className={styles.nextIcon}
              // onClick={() => setCardFront(false)}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>
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
            <h1 className={styles.header}>Email</h1>
            <p>Please Enter your Email</p>

            {/* <InputComponent label="Name" placeholder="Please Enter Your Name" /> */}
            <div
              className={styles.nextIcon}
              onClick={() => setCardMiddle(false)}
            >
              <BsArrowRightShort size={20} color="white" />
            </div>
          </div>
        ) : (
          <></>
        )}
        {cardBack ? (
          <div className={`${styles.cardBack} ${styles.page}`}>
            <h1 className={styles.header}>Welcome</h1>
            <p>Please Enter your Name</p>

            {/* <InputComponent label="Name" placeholder="Please Enter Your Name" /> */}
            <div className={styles.nextIcon} onClick={() => setCardBack(false)}>
              <BsArrowRightShort size={20} color="white" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
