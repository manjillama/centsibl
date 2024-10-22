"use client";
import { useTransaction } from "@/context/transaction-provider";
import ITransaction from "@/interfaces/ITransaction";
import { transformIndexToMonth } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import ApexChart, { Props } from "react-apexcharts";

const CURRENCY = "$";

export default function YearlyChart({
  transactions,
}: {
  transactions: ITransaction[];
}) {
  const yearlyData = useMemo<Props>(() => {
    const updatedMonthlyTotal = new Array(12).fill(0);

    transactions.forEach((transaction) => {
      const currMonth = new Date(transaction.transactionDate).getUTCMonth();
      if (transaction.category === "Income") {
        // todo
      } else {
        updatedMonthlyTotal[currMonth] += transaction.amount;
      }
    });

    return {
      options: {
        legend: {
          labels: {
            colors: "rgba(225, 225, 225, 0.443)",
          },
        },
        fill: {
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
          },
        },
        stroke: {
          width: 2,
          curve: "straight",
        },
        dataLabels: {
          style: {
            colors: ["rgba(225, 225, 225, 0.443)"],
            fontWeight: "normal",
          },
          background: {
            enabled: false,
          },
          formatter(val, opts) {
            return `${CURRENCY}${val}`;
          },
        },
        grid: {
          borderColor: "#525252",
          strokeDashArray: 2,
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: new Array(12)
            .fill(0)
            .map((i, index) => transformIndexToMonth(index)),
          axisBorder: {
            color: "#525252",
          },
          labels: {
            style: {
              colors: "rgba(225, 225, 225, 0.443)",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "rgba(225, 225, 225, 0.443)",
            },
          },
        },
      },
      series: [
        {
          name: "Expense",
          data: updatedMonthlyTotal,
        },
        {
          name: "Income",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 7770, 7700, 7700, 0],
        },
      ],
      stroke: {
        width: 1,
      },
    };
  }, [transactions]);

  return (
    <ApexChart
      options={yearlyData.options}
      series={yearlyData.series}
      type="area"
      height={350}
    />
  );
}
