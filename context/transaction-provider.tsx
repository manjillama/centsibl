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
  addTransaction: (transaction: ITransaction) => void;
} = {
  transactionData: {
    currentYear: new Date().getFullYear(),
    currency: "USD",
    transactions: null,
  },
  refreshTransactionData: () => {},
  addTransaction: () => {},
};

const TransactionContext = createContext(INITIAL_DATA);

function TransactionProvider({ children }: { children: React.ReactNode }) {
  const [transactionData, setTransactionData] = useState(
    INITIAL_DATA.transactionData
  );

  useEffect(() => {
    console.info(
      "Transaction provider data is refreshed for the first time..."
    );

    refreshTransactionData(new Date().getFullYear());
  }, []);

  useEffect(() => {
    console.info("Transaction provider data is refreshed...");
  }, [transactionData]);

  const refreshTransactionData = async (year: number) => {
    const response = await api.get<ITransaction[]>(`/api/transactions`);
    if (response.status === "success")
      setTransactionData({
        ...transactionData,
        currentYear: year,
        transactions: response.data,
      });
  };

  const addTransaction = async (transaction: ITransaction) => {
    // todo: Make API call to add transaction
    // Get transaction id back and then add that id
    if (transactionData.transactions === null) return;

    const updatedTransactions = [...transactionData.transactions];
    updatedTransactions.push(transaction);
    setTransactionData({
      ...transactionData,
      transactions: updatedTransactions,
    });
  };

  return (
    <TransactionContext.Provider
      value={{ transactionData, addTransaction, refreshTransactionData }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

const useTransaction = () => {
  return useContext(TransactionContext);
};

export { TransactionProvider, useTransaction };
