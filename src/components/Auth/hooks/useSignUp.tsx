import React, { useState } from "react";
import { signUp } from "@/firebase/auth";
import { useRouter } from "next/router";

const useSignUp = () => {
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
    const input = { [name]: value };

    setFormData((prev) => ({ ...prev, ...input }));
  };

  const handleSubmit = async () => {
    try {
      await signUp(formData);
      setSignUpComplete(true);

      setError("");

      setTimeout(() => {
        setSignUpComplete(false);
        router.push("/landing-page");
      }, 2000);
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

export default useSignUp;
