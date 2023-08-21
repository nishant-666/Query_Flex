import React, { useState } from "react";
import { signIn } from "@/firebase/auth";
import { useRouter } from "next/router";

const useSignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const [signUpComplete, setSignUpComplete] = useState(false);

  const getFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const { name, value } = event.target;
    let input = { [name]: value };

    setFormData((prev) => ({ ...prev, ...input }));
  };

  const handleSubmit = async () => {
    try {
      setSignUpComplete(true);
      await signIn(formData);

      setError("");

      setTimeout(() => {
        setSignUpComplete(false);
        router.push("/landing-page");
      }, 0);
    } catch (err: any) {
      const errorCode = err.code;

      if (errorCode === "auth/user-not-found") {
        setIsError(true);
        setError("User not found");
      } else if (errorCode === "auth/wrong-password") {
        setIsError(true);
        setError("Wrong password");
      } else {
        setIsError(true);
        setError("Email Already in use!");
      }
    }
  };

  return {
    error,
    isError,
    setIsError,
    formData,
    getFormData,
    handleSubmit,
    signUpComplete,
  };
};

export default useSignIn;