"use client";
import { useTransaction } from "@/context/transaction-provider";
import ITransaction from "@/interfaces/ITransaction";
import { useEffect, useMemo, useState } from "react";
import MonthlyBudget from "../monthly-budget";
import YearlyChart from "../yearly-chart";

export default function BudgetContainer() {
  const { transactionData } = useTransaction();

  const allMonthlyTransaction = useMemo(() => {
    const updatedMonthlyTransaction: ITransaction[][] = Array.from(
      { length: 12 },
      () => []
    );
    if (transactionData.transactions)
      transactionData.transactions.forEach((transaction) => {
        const monthIndex = new Date(transaction.transactionDate).getUTCMonth();
        updatedMonthlyTransaction[monthIndex].push(transaction);
      });

    return updatedMonthlyTransaction;
  }, [transactionData.transactions]);

  if (!transactionData.transactions) return <p>Loading...</p>;

  return (
    <div className="text-sm">
      {allMonthlyTransaction.map((monthlyTransaction, index) => (
        <MonthlyBudget
          key={index}
          transactions={monthlyTransaction}
          monthIndex={index}
          year={transactionData.currentYear}
        />
      ))}
      <br />
      <YearlyChart transactions={transactionData.transactions} />
    </div>
  );
}
