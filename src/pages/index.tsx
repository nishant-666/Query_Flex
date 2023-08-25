import React from "react";
import { api } from "@/utils/api";
import Navbar from "@/components/common/Navbar";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import Loader from "@/components/common/Loader";
import Link from "next/link";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { loading } = useCheckAuth();
  const router = useRouter();

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className={styles.home}>
        <Navbar />
        <section
          className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.homeMain}`}
        >
          <h1 className={`justify-center ${styles.header}`}>QueryFlex</h1>
          <p className={`${styles.subheader}`}>
            MultiDB <span className={styles.special}>QueryFlex</span> is an
            all-in-one Database Query Generator designed for developers working
            with various database systems!
          </p>
          <div>
            <button
              onClick={() => router.push("/auth/sign-up")}
              className={`btn btn-success glass btn-outline m-3 sm:btn-sm md:btn-md lg:btn-lg ${styles.getStarted}`}
            >
              Get Started
            </button>
            <Link
              target="_blank"
              href="https://youtu.be/1bPgHKDzcFo?si=crkMylxVBs3bDhuS"
            >
              <button
                className={`btn btn-info glass btn-outline m-3 sm:btn-sm md:btn-md lg:btn-lg ${styles.getStarted}`}
              >
                Request Demo
              </button>
            </Link>
          </div>
        </section>

        <section className={`flex lg:prose-xl ${styles.features}`}>
          <div className={styles.featuresPoints}>
            <div className={styles.featurePoint}>
              <p className={`${styles.subheader}`}>
                Automatically translate query commands across different database
                systems, ensuring accurate syntax conversion.
              </p>
            </div>
            <div className={styles.featurePoint}>
              <p className={`${styles.subheader}`}>
                A query builder that adapts to the specific syntax requirements
                of different databases.
              </p>
            </div>
            <div className={styles.featurePoint}>
              <p className={`${styles.subheader}`}>
                Easily switch between different databases within the tool,
                making it convenient to work on different projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
