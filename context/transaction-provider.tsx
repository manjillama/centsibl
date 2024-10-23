"use client";
import { createContext, useContext, useEffect, useState } from "react";
import api from "@/utils/api";
import ITransaction from "@/interfaces/ITransaction";

const INITIAL_DATA: {
  transactionData: {
    currentYear: number;
    currency: string;
    transactions: ITransaction[] | null;
  };
  refreshTransactionData: (year: number) => void;
} = {
  transactionData: {
    currentYear: new Date().getFullYear(),
    currency: "USD",
    transactions: null,
  },
  refreshTransactionData: (year: number) => {},
};

const TransactionContext = createContext(INITIAL_DATA);

function TransactionProvider({ children }: { children: React.ReactNode }) {
  const [transactionData, updateTransactionData] = useState(
    INITIAL_DATA.transactionData
  );

  useEffect(() => {
    (async () => {
      const response = await api.get<ITransaction[]>(`/api/transactions`);
      if (response.status === "success")
        updateTransactionData({
          ...transactionData,
          currentYear: new Date().getFullYear(),
          transactions: response.data,
        });
    })();
  }, []);

  useEffect(() => {
    console.info("Transaction Provider is refreshed...");
  }, [transactionData]);

  const refreshTransactionData = async (year: number) => {
    //todo: Make API call using year
    // const data = await api.get(`/api/transactions`);
    // console.log("GET /api/transactions", year, data);
    updateTransactionData(INITIAL_DATA.transactionData);
  };

  return (
    <TransactionContext.Provider
      value={{ transactionData, refreshTransactionData }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

const useTransaction = () => {
  return useContext(TransactionContext);
};

export { TransactionProvider, useTransaction };
