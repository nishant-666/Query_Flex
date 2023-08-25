import React from "react";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import LandingMain from "@/components/Landing";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  const { loading } = useCheckAuth();

  if (loading) return <div style={{ display: "none" }}></div>;
  return router.query.isVerified === "true" ? (
    <LandingMain />
  ) : (
    <>
      <section
        className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.unVerified}`}
      >
        <h1 className={`justify-center ${styles.header}`}>Verify Your Email</h1>
        <p className={`${styles.subheader}`}>
          Please check your Email for the Verification Link!
        </p>
      </section>
    </>
  );
}
