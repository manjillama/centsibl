import { CategoryType } from "@/types";

export function transformIndexToMonth(index: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[index];
}
export function formatDate(date: Date) {
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const options = { month: "long", day: "numeric" };
  return utcDate.toLocaleString("en-US", options as any);
}
export function getNormalizedDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two-digit format
  return `${year}-${month}-${day}`;
}

export function formatCurrency(currency: string) {
  if (currency === "USD") return "$";
  return currency;
}

export function categoryToEmoji(category: CategoryType) {
  switch (category) {
    case CategoryType.BillsAndSubscriptions:
      return "🧾";
    case CategoryType.ClothingAndAccessories:
      return "👕";
    case CategoryType.DebtRepayment:
      return "📉";
    case CategoryType.Education:
      return "📚";
    case CategoryType.Entertainment:
      return "🎭";
    case CategoryType.FamilyAndChildren:
      return "👨‍👩‍👧‍👦";
    case CategoryType.Food:
      return "🥗";
    case CategoryType.GiftsAndDonations:
      return "🎁";
    case CategoryType.HealthAndWellness:
      return "🤸";
    case CategoryType.Housing:
      return "🏠";
    case CategoryType.Income:
      return "💰";
    case CategoryType.Insurance:
      return "🛟";
    case CategoryType.PersonalCare:
      return "💆";
    case CategoryType.SavingsAndInvestments:
      return "💸";
    case CategoryType.Transportation:
      return "🚙";
    case CategoryType.Travel:
      return "🏝️";
    default:
      return "✨";
  }
}
