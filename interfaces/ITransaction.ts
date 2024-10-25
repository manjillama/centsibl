import { CategoryType } from "@/types";

export default interface ITransaction {
  transactionDate: string;
  title: string;
  category: CategoryType;
  amount: number | "";
}
