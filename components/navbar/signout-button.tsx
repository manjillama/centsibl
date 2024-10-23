"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignoutButton = () => {
  const handleSignout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <button
      className="px-4 py-2 block text-white text-sm"
      onClick={handleSignout}
    >
      Logout ✌️
    </button>
  );
};

export default SignoutButton;
