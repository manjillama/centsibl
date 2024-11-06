import React from "react";
import BudgetContainer from "@/components/budget-container";
import Greeting from "@/components/greeting";

export default async function DashboardPage() {
  return (
    <div className="py-4">
      <Greeting />
      <BudgetContainer />
    </div>
  );
}
