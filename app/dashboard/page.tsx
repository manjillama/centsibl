import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";
import BudgetContainer from "@/components/budget-container";
import { getGreeting } from "@/utils";

export default async function DashboardPage() {
  const session = await getServerSession(options);

  return (
    <div className="container mx-auto px-[15px] py-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        👋 {getGreeting()}, {session?.user?.name?.split(" ")[0]}.
      </h1>
      <BudgetContainer />
    </div>
  );
}
