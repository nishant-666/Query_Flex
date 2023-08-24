import React, { useEffect, useRef } from "react";
import styles from "./Landing.module.scss";

import { AiOutlineSend } from "react-icons/ai";
import UserRes from "./UserRes";
import SystemRes from "./SystemRes";
import Loader from "../common/Loader";
import { addQuery, updateQuery } from "@/firebase/firestore";
import { useOpenAI } from "./hooks/useOpenAI";
import LandingSuggestions from "./LandingSuggestions";

export default function LandingComponent({
  currentDoc,
  isEdit,
  currentId,
}: LandingComponent) {
  const contentRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { response, isLoading, prompt, setPrompt, responsePrompt, content } =
    useOpenAI(currentDoc);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
    event.target.style.height = "70px";
    event.target.style.height = `${event.target.scrollHeight}px`; // Set new height
  };

  const saveQuery = async (currentId: string) => {
    const query = {
      responsePrompt: responsePrompt?.filter((res) => res.content !== ""),
    };
    if (responsePrompt?.length > 1) {
      if (isEdit) {
        updateQuery(currentId, query);
      } else {
        await addQuery(currentId, query);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentId]);

  useEffect(() => {
    if (responsePrompt?.filter((res) => res.content !== "").length > 0) {
      saveQuery(currentId);
    }
  }, [content]);

  useEffect(() => {
    if (contentRef.current) {
      window.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [content.length]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [currentId]);

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
            ?.filter((item) => item.content !== "")
            ?.map((res, index) =>
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

          {responsePrompt?.length === 0 ? (
            <section
              className={`prose flex md:container lg:prose-xl md:mx-auto ${styles.homeMain}`}
            >
              <h1 className={`justify-center ${styles.header}`}>QueryFlex</h1>
              <p className={`${styles.subheader}`}>
                MultiDB <span className={styles.special}>QueryFlex</span> is an
                all-in-one Database Query Generator designed for developers
                working with various database systems!
              </p>
            </section>
          ) : (
            <></>
          )}
        </div>
      )}

      <section className={styles.fixed}>
        {responsePrompt?.length === 0 ? (
          <LandingSuggestions setPrompt={setPrompt} />
        ) : (
          <></>
        )}
        <div className={styles.promtInputContainer}>
          <textarea
            ref={textAreaRef}
            name="promt"
            value={prompt}
            onChange={(event) => handleTextareaChange(event)}
            placeholder="Write your Query!"
            className={styles.promtInput}
          />

          {!isLoading && prompt.length ? (
            <div className={styles.sendButton}>
              <AiOutlineSend
                className={styles.send}
                size={40}
                onClick={response}
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
