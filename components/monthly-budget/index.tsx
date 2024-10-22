import ITransaction from "@/interfaces/ITransaction";
import { transformIndexToMonth } from "@/utils";
import MonthlyBudgetItem from "../monthly-budget-item";
import MonthlyChart from "../monthly-chart";
import { useMemo } from "react";

export default function MonthlyBudget({
  transactions,
  monthIndex,
  year,
}: {
  transactions: ITransaction[];
  monthIndex: number;
  year: number;
}) {
  const monthlyChartData = useMemo(() => {
    const dataMap = new Map();
    transactions.forEach((transaction) => {
      dataMap.set(
        transaction.category,
        dataMap.get(transaction.category)
          ? dataMap.get(transaction.category) + transaction.amount
          : transaction.amount
      );
    });
    return dataMap;
  }, [transactions]);

  if (transactions.length <= 0) return null;

  return (
    <div className="my-4 py-4 border-b-[1px] border-neutral-700 pb-6">
      <h3 className="text-white font-semibold">
        {transformIndexToMonth(monthIndex)} {year}
      </h3>
      <div className="flex flex-wrap">
        <div className="lg:w-3/5">
          {transactions
            .sort(
              (a, b) =>
                (new Date(a.transactionDate) as any) -
                (new Date(b.transactionDate) as any)
            )
            .map((transaction, i) => (
              <MonthlyBudgetItem transaction={transaction} key={i} />
            ))}
        </div>
        <div className="lg:w-2/5">
          <MonthlyChart
            series={Array.from(monthlyChartData.values())}
            labels={Array.from(monthlyChartData.keys())}
          />
        </div>
      </div>
    </div>
  );
}
