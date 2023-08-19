import React from "react";
import styles from "./Home.module.scss";
import Navbar from "@/components/common/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section
        className={`prose flex justify-center md:container lg:prose-xl md:mx-auto ${styles.homeMain}`}
      >
        <h1 className={`justify-center ${styles.header}`}>Query Flex</h1>
      </section>
    </>
  );
}
