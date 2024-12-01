import { ITransaction } from "@/interfaces/ITransaction";
import React from "react";

const fileHeaders = ["title", "category", "amount", "date"];

const DownloadTransactionsCsv = ({
  transactions,
  currentYear,
}: {
  transactions: ITransaction[];
  currentYear: number;
}) => {
  function convertJSONToCSV() {
    if (transactions.length === 0) {
      return "";
    }

    const headers = fileHeaders.join(",") + "\n";

    const rows = transactions
      .map((row) => {
        return fileHeaders
          .map((header) => {
            if (header === "date") {
              return (row as any)["transactionDate"].split("T")[0];
            }
            return (row as any)[header] || "";
          })
          .join(",");
      })
      .join("\n");

    return headers + rows;
  }

  function downloadCSV() {
    const csvData = convertJSONToCSV();

    if (csvData === "") {
      alert("No data to export");
    } else {
      const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `transactions-${currentYear}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <button
      title="Download CSV"
      onClick={downloadCSV}
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
        <path
          d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export default DownloadTransactionsCsv;
