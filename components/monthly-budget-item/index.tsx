import ITransaction from "@/interfaces/ITransaction";
import { CategoryType } from "@/types";
import { formatDate } from "@/utils";

export default function MonthlyBudgetItem({
  transaction,
}: {
  transaction: ITransaction;
}) {
  return (
    <div className="flex flex-wrap hover:bg-neutral-700 -mx-2 rounded-md">
      <input value={transaction.title} className="grow md:w-auto w-full" />
      <input value={transaction.amount} className="w-20" />
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
      <div className="relative w-28 input">
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
  );
}
