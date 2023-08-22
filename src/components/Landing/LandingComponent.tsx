import React, { useEffect, useState } from "react";
import styles from "./Landing.module.scss";
import { Configuration, OpenAIApi } from "openai";
import { AiOutlineSend, AiOutlineSave } from "react-icons/ai";
import UserRes from "./UserRes";
import SystemRes from "./SystemRes";
import Loader from "../common/Loader";
import { addQuery, updateQuery } from "@/firebase/firestore";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function LandingComponent({
  currentDoc,
  isEdit,
  currentId,
}: LandingComponent) {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responsePrompt, setResponsePrompt] = useState([
    {
      role: "user",
      content: "",
    },
    {
      role: "system",
      content: "",
    },
  ]);
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
    event.target.style.height = "70px";
    event.target.style.height = `${event.target.scrollHeight}px`; // Set new height
  };

  const response = async () => {
    let res = [...responsePrompt, { role: "user", content: prompt }];
    setResponsePrompt((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");
    setIsLoading(true);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: res as [],
      temperature: 0.3,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    await setIsLoading(false);
    setResponsePrompt((prev) => [
      ...prev,
      {
        role: "system",
        content: response.data.choices[0]?.message?.content as string,
      },
    ]);
  };

  const saveQuery = async (id: string) => {
    let query = {
      responsePrompt: responsePrompt.filter((res) => res.content !== ""),
    };
    if (responsePrompt.length > 1) {
      if (isEdit) {
        updateQuery(id, query);
      } else {
        await addQuery(query);
      }
    }
  };
  console.log(responsePrompt);
  useEffect(() => {
    setResponsePrompt(currentDoc);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentDoc]);

  return (
    <div className={styles.landing}>
      {isLoading ? (
        <>
          <Loader />
          <section className={`${styles.landingMainTransparent}`}>
            {responsePrompt
              .filter((item) => item.content !== "")
              .map((res) =>
                res.role === "user" ? (
                  <UserRes text={res.content} />
                ) : (
                  <SystemRes text={res.content} />
                )
              )}
          </section>
        </>
      ) : (
        <section
          className={`${
            !isLoading ? styles.landingMain : styles.landingMainTransparent
          }`}
        >
          {responsePrompt
            .filter((item) => item.content !== "")
            .map((res) =>
              res.role === "user" ? (
                <UserRes text={res.content} />
              ) : (
                <SystemRes text={res.content} />
              )
            )}
        </section>
      )}
      <section className={styles.fixed}>
        <div className={styles.promtInputContainer}>
          <textarea
            name="promt"
            value={prompt}
            onChange={(event) => handleTextareaChange(event)}
            placeholder="Write your Query!"
            className={styles.promtInput}
          />

          {!isLoading ? (
            <div className={styles.sendButton}>
              <AiOutlineSend
                className={styles.send}
                size={40}
                onClick={response}
              />
              <AiOutlineSave
                className={styles.save}
                size={40}
                onClick={() => saveQuery(currentId)}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}
