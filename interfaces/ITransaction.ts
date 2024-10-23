import { CategoryType } from "@/types";

export default interface ITransaction {
  transactionDate: Date | string;
  title: string;
  category: CategoryType;
  amount: number;
}
