"use client";
import React, { useState } from "react";
import OAuthProviders from "../signin/oauth-providers";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import SignUpForm from "./signup-form";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null;
};
export default function SignUpWrapper({ providers }: Props) {
  const [showSignInUsingCredentials, setShowSignInUsingCredentials] =
    useState(false);

  return (
    <div className="container max-w-xs mx-auto mt-[10%]">
      <h1 className="text-3xl font-bold text-white">Sign up</h1>
      {!showSignInUsingCredentials ? (
        <>
          <OAuthProviders providers={providers} />
          <hr className="my-4" />
          <button
            onClick={() => setShowSignInUsingCredentials(true)}
            className="w-full text-sky-600 hover:underline"
          >
            Continue with credentials
          </button>
        </>
      ) : (
        <>
          <SignUpForm />
          <button
            onClick={() => setShowSignInUsingCredentials(false)}
            className="w-full text-sky-600 hover:underline"
          >
            Other signup options
          </button>
        </>
      )}
    </div>
  );
}
