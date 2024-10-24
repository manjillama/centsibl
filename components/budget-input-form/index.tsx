import ITransaction from "@/interfaces/ITransaction";
import { CategoryType } from "@/types";
import { categoryToEmoji, formatCurrency, formatDate } from "@/utils";

export default function BUdgetInputForm({ currency }: { currency: string }) {
  return (
    <div className="border-b-[1px] border-neutral-700 py-4">
      <div className="flex flex-wrap rounded-md -mx-2 space-x-2 py-1 lg:w-4/5">
        <div className="ml-2 grow md:w-auto w-full flex items-center">
          {categoryToEmoji(CategoryType.Food)}
          <input
            type="text"
            value={""}
            className="grow"
            placeholder="Type new budget name..."
          />
        </div>
        <div>
          <label className="relative ml-2">
            <span className="text-neutral-500 absolute -top-[2px] -left-[6px]">
              {formatCurrency(currency)}
            </span>
            <input
              type="text"
              value={""}
              className="w-48"
              placeholder="Add amount..."
            />
          </label>
        </div>
        <div>
          <select
            name="category"
            defaultValue={CategoryType.Food}
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
            {formatDate(new Date())}
            <input
              className="picker"
              value={`${new Date()}`}
              type="date"
              onClick={(e) => e.currentTarget.showPicker()}
            />
          </label>
        </div>
        <div className="md:w-auto md:mt-0 w-full mt-2">
          <button
            type="button"
            className="py-2 px-6 block bg-sky-600 text-white rounded-lg hover:opacity-75 text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
