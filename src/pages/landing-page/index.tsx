import React, { useEffect, useState } from "react";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import { useRouter } from "next/router";
import LandingMain from "@/components/Landing";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export default function Landing() {
  const { loading } = useCheckAuth();
  return loading ? <div style={{ display: "none" }}></div> : <LandingMain />;
}
