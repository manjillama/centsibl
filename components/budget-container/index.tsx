"use client";
import { useTransaction } from "@/context/transaction-provider";
import ITransaction from "@/interfaces/ITransaction";
import { useMemo } from "react";
import MonthlyBudget from "../monthly-budget";
import YearlyChart from "../yearly-chart";
import BudgetInputForm from "../budget-input-form";

export default function BudgetContainer() {
  const { transactionData, addTransaction } = useTransaction();

  const allMonthlyTransaction = useMemo(() => {
    const updatedMonthlyTransaction: ITransaction[][] = Array.from(
      { length: 12 },
      () => []
    );

    if (transactionData.transactions) {
      transactionData.transactions.forEach((transaction) => {
        const monthIndex = new Date(transaction.transactionDate).getUTCMonth();
        updatedMonthlyTransaction[monthIndex].push(transaction);
      });
    }

    return updatedMonthlyTransaction;
  }, [transactionData.transactions]);

  function renderMonthlyBudget() {
    const monthlyBudgets = [];

    for (let i = allMonthlyTransaction.length - 1; i >= 0; i--) {
      monthlyBudgets.push(
        <MonthlyBudget
          key={`${i}-${Date.now()}`}
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
        Please wait while we&apos;re working on your budget...
      </p>
    );

  return (
    <div className="text-sm">
      <div className="flex space-x-2">
        <button
          type="button"
          className="hover:bg-neutral-600 border-[1px] border-neutral-600 w-[28px] h-[28px] rounded-md"
        >
          <svg
            className="mx-auto"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor"></path>
          </svg>
        </button>
        <h1 className="text-xl font-bold text-white">
          {transactionData.currentYear}
        </h1>
        <button
          type="button"
          className="hover:bg-neutral-600 border-[1px] border-neutral-600 w-[28px] h-[28px] rounded-md"
        >
          <svg
            className="mx-auto"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <BudgetInputForm
        currency={transactionData.currency}
        addTransaction={addTransaction}
      />
      {renderMonthlyBudget()}
      <br />
      <YearlyChart
        transactions={transactionData.transactions}
        currency={transactionData.currency}
      />
    </div>
  );
}
