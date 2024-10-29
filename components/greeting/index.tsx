"use client";
import { getGreeting } from "@/utils";
import { useSession } from "next-auth/react";

export default function Greeting() {
  const { data: session } = useSession();

  return (
    <h1 className="text-2xl font-bold text-white mb-4">
      👋 {getGreeting()}, {session?.user?.name?.split(" ")[0]}.
    </h1>
  );
}
