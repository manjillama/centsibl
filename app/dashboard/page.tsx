import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import BudgetContainer from "@/components/budget-container";
import Greeting from "@/components/greeting";

export default async function DashboardPage() {
  const session = await getServerSession(options);

  return (
    <div className="container mx-auto px-[15px] py-4">
      <Greeting />
      <BudgetContainer />
    </div>
  );
}
