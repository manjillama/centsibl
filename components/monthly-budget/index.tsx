import { ITransaction } from "@/interfaces/ITransaction";
import { formatCurrency, getValidNumber, transformIndexToMonth } from "@/utils";
import MonthlyBudgetItem from "../monthly-budget-item";
import MonthlyChart from "../monthly-chart";
import { useMemo, useState } from "react";
import { CategoryType } from "@/types";

export default function MonthlyBudget({
  transactions,
  currency,
  monthIndex,
  year,
}: {
  transactions: ITransaction[];
  currency: string;
  monthIndex: number;
  year: number;
}) {
  const [isOpen, setIsOpen] = useState(
    new Date().getFullYear() === year && new Date().getMonth() === monthIndex
  );

  const monthlyChartData = useMemo(() => {
    const dataMap = new Map();
    transactions.forEach((transaction) => {
      if (transaction.category !== CategoryType.Income)
        dataMap.set(
          transaction.category,
          dataMap.get(transaction.category)
            ? dataMap.get(transaction.category) + transaction.amount
            : transaction.amount
        );
    });
    return dataMap;
  }, [transactions]);

  // Memoizing series and labels based on transactions
  const [series, labels] = useMemo(() => {
    return [
      Array.from(monthlyChartData.values()),
      Array.from(monthlyChartData.keys()),
    ];
  }, [monthlyChartData]);

  if (transactions.length <= 0) return null;

  function getTotalExpense() {
    return transactions.reduce((a, b) => {
      return b.category !== CategoryType.Income
        ? a + getValidNumber(b.amount)
        : a;
    }, 0);
  }
  function getTotalIncome() {
    return transactions.reduce((a, b) => {
      return b.category === CategoryType.Income
        ? a + getValidNumber(b.amount)
        : a;
    }, 0);
  }

  return (
    <div className="mx-4 py-4 border-b-[1px] border-neutral-700">
      <div className="flex px-1">
        <button
          type="button"
          className="hover:bg-neutral-800 w-[36px] rounded-md mr-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg
              className="mx-auto"
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
            </svg>
          ) : (
            <svg
              className="mx-auto"
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
            </svg>
          )}
        </button>
        <div>
          <h3 className="text-white font-semibold">
            {transformIndexToMonth(monthIndex)} {year}
          </h3>
          <p className="text-neutral-500">
            <span>
              Expense: {formatCurrency(currency)}
              {getTotalExpense()}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              Income: {formatCurrency(currency)}
              {getTotalIncome()}
            </span>
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-wrap">
          <div className="lg:w-3/5 w-full lg:mb-0 mb-4">
            {transactions
              .sort(
                (a, b) =>
                  (new Date(a.transactionDate) as any) -
                  (new Date(b.transactionDate) as any)
              )
              .map((transaction, i) => (
                <MonthlyBudgetItem
                  transaction={transaction}
                  currency={currency}
                  key={i}
                />
              ))}
          </div>
          <div className="lg:w-2/5 w-full">
            <MonthlyChart
              series={JSON.stringify(series)}
              labels={JSON.stringify(labels)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
