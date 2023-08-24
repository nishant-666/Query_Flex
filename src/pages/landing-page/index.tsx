import React from "react";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import LandingMain from "@/components/Landing";

import styles from "@/styles/Home.module.scss";
import useCheckVerification from "@/hooks/useCheckVerification";
import Loader from "@/components/common/Loader";

export default function Landing() {
  const { verificationChecked, verificationLoading } = useCheckVerification();
  const { loading } = useCheckAuth();

  return loading ? (
    <></>
  ) : verificationLoading ? (
    <Loader />
  ) : verificationChecked ? (
    <LandingMain />
  ) : (
    <section
      className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.unVerified}`}
    >
      <h1 className={`justify-center ${styles.header}`}>Verify Your Email</h1>
      <p className={`${styles.subheader}`}>
        Please check your Email for the Verification Link!
      </p>
    </section>
  );
}
