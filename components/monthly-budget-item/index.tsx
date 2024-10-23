import ITransaction from "@/interfaces/ITransaction";
import { CategoryType } from "@/types";
import { categoryToEmoji, formatCurrency, formatDate } from "@/utils";

export default function MonthlyBudgetItem({
  transaction,
  currency,
}: {
  transaction: ITransaction;
  currency: string;
}) {
  return (
    <div className="border-b-[1px] border-neutral-700">
      <div className="flex flex-wrap hover:bg-neutral-700 rounded-md -mx-2 space-x-2 ">
        <div className="ml-2">
          {categoryToEmoji(transaction.category)}
          <input
            type="text"
            value={transaction.title}
            className="grow md:w-auto w-full"
          />
        </div>
        <label className="relative">
          <span className="text-neutral-500 absolute top-[8px] -left-[2px]">
            {formatCurrency(currency)}
          </span>
          <input type="text" value={transaction.amount} className="w-20" />
        </label>
        <select
          name="category"
          defaultValue={transaction.category}
          className="w-40"
        >
          {Object.values(CategoryType).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="relative w-32 input">
          <label className="date-picker-label text-white">
            {formatDate(new Date(transaction.transactionDate))}
            <input
              className="picker"
              value={`${transaction.transactionDate}`}
              type="date"
              onClick={(e) => e.currentTarget.showPicker()}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
