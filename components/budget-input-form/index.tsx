"use client";
import ITransaction from "@/interfaces/ITransaction";
import { CategoryType } from "@/types";
import {
  categoryToEmoji,
  formatCurrency,
  formatDate,
  getNormalizedDate,
} from "@/utils";
import { useState } from "react";

export default function BudgetInputForm({
  currency,
  addTransaction,
}: {
  currency: string;
  addTransaction: (transaction: ITransaction) => void;
}) {
  const [formProps, setFormProps] = useState<ITransaction>({
    title: "",
    category: CategoryType.Food,
    amount: "",
    transactionDate: getNormalizedDate(new Date()),
  });

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormProps({
      ...formProps,
      [name]:
        name === "amount" ? (value === "" ? "" : parseFloat(value)) : value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form props", formProps);

    addTransaction(formProps);
  }

  return (
    <div className="border-b-[1px] border-neutral-700 py-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap rounded-md -mx-2 space-x-2 py-1 lg:w-4/5"
      >
        <div className="ml-2 grow md:w-auto w-full flex items-center">
          {categoryToEmoji(CategoryType.Food)}
          <input
            type="text"
            value={formProps.title}
            name="title"
            onChange={handleChange}
            className="grow"
            autoCapitalize="true"
            autoComplete="off"
            placeholder="Type new budget name..."
          />
        </div>
        <label className="flex items-center">
          <span className="text-neutral-500 inline-block">
            {formatCurrency(currency)}
          </span>
          <div className="-ml-1">
            <input
              type="text"
              name="amount"
              onChange={handleChange}
              value={formProps.amount}
              className="w-48"
              autoComplete="off"
              placeholder="Add amount..."
            />
          </div>
        </label>
        <div>
          <select
            value={formProps.category}
            name="category"
            onChange={handleChange as any}
            style={{
              color:
                formProps.category === CategoryType.Income
                  ? "#16a34a"
                  : "white",
            }}
            className="w-48 h-full ml-1"
          >
            {Object.values(CategoryType).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="relative w-32 input">
          <label className="date-picker-label text-white ml-[4px]">
            {formatDate(new Date(formProps.transactionDate))}
            <input
              className="picker"
              type="date"
              name="transactionDate"
              onChange={handleChange}
              value={formProps.transactionDate}
              onClick={(e) => e.currentTarget.showPicker()}
            />
          </label>
        </div>
        <div className="md:w-auto md:mt-0 w-full mt-2">
          <button
            type="submit"
            className="py-2 px-6 block bg-sky-600 text-white rounded-lg hover:opacity-75 text-sm"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
