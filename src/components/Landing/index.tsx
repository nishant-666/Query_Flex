import React, { useState } from "react";
import styles from "./Landing.module.scss";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function LandingComponent() {
  const [prompt, setPrompt] = useState("");
  const response = async () => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.data.choices[0]?.message?.content);
  };
  return (
    <>
      <section className={`${styles.landingMain}`}></section>
      <section className={styles.fixed}>
        <div className={styles.promtInputContainer}>
          <textarea
            name="promt"
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Enter your Prompt!"
            className={styles.promtInput}
          />

          <button onClick={response}>Send</button>
        </div>
      </section>
    </>
  );
}
