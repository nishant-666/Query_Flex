import React from "react";
import styles from "./Landing.module.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function SystemRes({ text }: ResponseText) {
  return (
    <section className={styles.systemPrompt}>
      <Image
        className={styles.systemLogo}
        src={Logo}
        width={40}
        height={40}
        alt="Picture of the author"
      />
      <div className={styles.syntaxHighlighter}>
        <SyntaxHighlighter wrapLongLines={true} language="sql" style={dark}>
          {text}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
