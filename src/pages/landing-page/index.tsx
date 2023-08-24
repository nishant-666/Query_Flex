import React from "react";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import LandingMain from "@/components/Landing";

export default function Landing() {
  const { loading } = useCheckAuth();
  return loading ? <div style={{ display: "none" }}></div> : <LandingMain />;
}
