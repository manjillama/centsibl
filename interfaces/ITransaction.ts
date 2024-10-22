import { CategoryType } from "@/types";

export default interface ITransaction {
  transactionDate: Date;
  title: string;
  category: CategoryType;
  amount: number;
}
