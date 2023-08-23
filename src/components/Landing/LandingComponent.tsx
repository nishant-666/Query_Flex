import React, { useEffect, useState, useRef } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState<string[]>([]);
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
    let newContent = [...content, `New content ${res.length + 1}`];
    setContent(newContent);

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
    newContent = [`New content ${content.length + 1}`];
    setContent(newContent);
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

  useEffect(() => {
    setResponsePrompt(currentDoc);
  }, [currentDoc]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentId]);

  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });

      // saveQuery(currentId);
    }
  }, [content.length]);

  // useEffect(() => {
  //   console.log(currentId);
  // }, [responsePrompt]);
  return (
    <div className={styles.landing} ref={contentRef}>
      {isLoading ? (
        <>
          <Loader />
          <div ref={contentRef} className={`${styles.landingMainTransparent}`}>
            {responsePrompt
              .filter((item) => item.content !== "")
              .map((res, index) =>
                res.role === "user" ? (
                  <div key={index}>
                    <UserRes text={res.content} />
                  </div>
                ) : (
                  <div key={index}>
                    <SystemRes text={res.content} />
                  </div>
                )
              )}
          </div>
        </>
      ) : (
        <div
          ref={contentRef}
          className={`${
            !isLoading ? styles.landingMain : styles.landingMainTransparent
          }`}
        >
          {responsePrompt
            .filter((item) => item.content !== "")
            .map((res, index) =>
              res.role === "user" ? (
                <div key={index}>
                  <UserRes text={res.content} />
                </div>
              ) : (
                <div key={index}>
                  <SystemRes text={res.content} />
                </div>
              )
            )}
        </div>
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
