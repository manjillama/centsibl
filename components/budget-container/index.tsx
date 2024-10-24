"use client";
import { useTransaction } from "@/context/transaction-provider";
import ITransaction from "@/interfaces/ITransaction";
import { useMemo } from "react";
import MonthlyBudget from "../monthly-budget";
import YearlyChart from "../yearly-chart";
import BUdgetInputForm from "../budget-input-form";

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

  function renderMonthlyBudget() {
    const monthlyBudgets = [];

    // Corrected loop condition: change `i <= 0` to `i >= 0`
    for (let i = allMonthlyTransaction.length - 1; i >= 0; i--) {
      monthlyBudgets.push(
        <MonthlyBudget
          key={i}
          transactions={allMonthlyTransaction[i]}
          currency={transactionData.currency}
          monthIndex={i}
          year={transactionData.currentYear}
        />
      );
    }

    return monthlyBudgets;
  }

  if (!transactionData.transactions)
    return (
      <p className="text-white text-center mt-24 mb-12">
        Please wait while we&apos;re warming up your budget...
      </p>
    );

  return (
    <div className="text-sm">
      <BUdgetInputForm currency={transactionData.currency} />
      {renderMonthlyBudget()}
      <br />
      <YearlyChart
        transactions={transactionData.transactions}
        currency={transactionData.currency}
      />
    </div>
  );
}
