import { resetPassword } from "@/firebase/auth";
import { useState } from "react";

export function useResetPass(email: string) {
  const [response, setResponse] = useState("");

  const resetPass = async () => {
    const res = await resetPassword(email);
    setResponse(res as any);
  };

  return { resetPass, response };
}
