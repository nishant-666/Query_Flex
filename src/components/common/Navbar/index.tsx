import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { signout } from "@/firebase/auth";

export default function Navbar() {
  const { authState } = useCheckAuth();
  const router = useRouter();
  useEffect(() => {
    if (authState.uid) {
      router.push("/landing-page");
    }
  }, [authState]);

  return (
    <div className={styles.navbar}>
      <section className={styles.navbarLeft}>
        <p className={styles.navOption}>Features</p>
        <p className={styles.navOption}>Pricing</p>
      </section>

      {authState.uid ? (
        <section className={styles.navbarRight}>
          <button
            onClick={() => {
              signout();
              router.push("/");
            }}
            className={`btn btn-success ${styles.signInBtn}`}
          >
            Sign Out
          </button>
        </section>
      ) : (
        <section className={styles.navbarRight}>
          <button
            onClick={() => router.push("/auth/sign-in")}
            className={`btn btn-success ${styles.signInBtn}`}
          >
            Sign In
          </button>

          <button onClick={() => router.push("/auth/sign-up")} className="btn">
            Get Started
          </button>
        </section>
      )}
    </div>
  );
}
