import React from "react";
import { getProviders } from "next-auth/react";
import SignUpWrapper from "./signup-wrapper";

export default async function SignUp() {
  const providers = await getProviders();
  return <SignUpWrapper providers={providers} />;
}
