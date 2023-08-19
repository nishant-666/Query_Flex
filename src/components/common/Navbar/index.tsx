import React from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <section className={styles.navbarLeft}>
        <p className={styles.navOption}>Features</p>
        <p className={styles.navOption}>Pricing</p>
      </section>

      <section className={styles.navbarRight}>
        <button className={`btn btn-success ${styles.signInBtn}`}>
          Sign In
        </button>

        <button onClick={() => router.push("/auth/sign-up")} className="btn">
          Get Started
        </button>
      </section>
    </div>
  );
}
