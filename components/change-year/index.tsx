import { useTransaction } from "@/context/transaction-provider";

export default function ChangeYear() {
  const { transactionData, changeToPreviousYear, changeToNextYear } =
    useTransaction();

  return (
    <div className="flex space-x-2">
      <button
        onClick={changeToPreviousYear}
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
          <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor"></path>
        </svg>
      </button>
      <h1 className="text-xl font-bold text-white">
        {transactionData.currentYear}
      </h1>
      <button
        onClick={changeToNextYear}
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
          <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
        </svg>
      </button>
    </div>
  );
}
