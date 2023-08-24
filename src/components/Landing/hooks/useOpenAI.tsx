import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export function useOpenAI(currentDoc: never[]) {
  const [content, setContent] = useState<string[]>([]);
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
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    setResponsePrompt(currentDoc);
  }, [currentDoc]);

  return { response, isLoading, prompt, setPrompt, responsePrompt, content };
}
