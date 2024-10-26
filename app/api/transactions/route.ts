import ITransaction from "@/interfaces/ITransaction";
import dbConnect from "@/lib/dbConnect";
import { CategoryType } from "@/types";
import catchAsync from "@/utils/errorHandler";

/**
	1.	Housing
	•	Rent/Mortgage
	•	Utilities (Electricity, Water, Gas)
	•	Property Taxes
	•	Home Insurance
	•	Maintenance/Repairs
	2.	Transportation
	•	Fuel
	•	Public Transit (Bus, Train)
	•	Car Payment
	•	Insurance
	•	Maintenance/Repairs
	•	Parking Fees
	3.	Food
	•	Groceries
	•	Dining Out
	•	Coffee Shops
	•	Snacks
	4.	Health & Wellness
	•	Medical Expenses
	•	Health Insurance
	•	Gym Memberships
	•	Fitness Classes
	•	Supplements/Medications
	5.	Personal Care
	•	Haircuts/Beauty Treatments
	•	Skincare Products
	•	Toiletries
	6.	Entertainment
	•	Subscriptions (Netflix, Spotify, etc.)
	•	Movies/Theater
	•	Concerts/Sporting Events
	•	Hobbies
	7.	Clothing & Accessories
	•	Clothing Purchases
	•	Shoes
	•	Accessories (Bags, Jewelry)
	8.	Education
	•	Tuition Fees
	•	Books/Supplies
	•	Online Courses/Workshops
	9.	Travel
	•	Flights
	•	Accommodation
	•	Transportation (Rental Cars, Taxis)
	•	Activities/Excursions
	10.	Family & Children
	•	Childcare/Daycare
	•	School Expenses
	•	Toys/Games
	11.	Gifts & Donations
	•	Gifts for Family/Friends
	•	Charitable Donations
	12.	Insurance
	•	Life Insurance
	•	Disability Insurance
	•	Other Insurance Policies
	13.	Debt Repayment
	•	Credit Card Payments
	•	Student Loans
	•	Personal Loans
	14.	Savings & Investments
	•	Emergency Fund
	•	Retirement Savings
	•	Other Investments
	15.	Miscellaneous
	•	Bank Fees
	•	Pet Expenses
	•	Home Office Supplies
	•	Other Unclassified Expenses
 */

const DATA: ITransaction[] = [
  {
    title: "Rent",
    category: CategoryType.Housing,
    amount: 0,
    transactionDate: "2024-09-01",
  },
  {
    title: "Costco groceries",
    category: CategoryType.Food,
    amount: 0,
    transactionDate: "2024-09-08",
  },
  {
    title: "Mom & Dad First Salary",
    category: CategoryType.FamilyAndChildren,
    amount: 1000,
    transactionDate: "2024-09-14",
  },
  {
    title: "Aapa & Aama First Salary",
    category: CategoryType.FamilyAndChildren,
    amount: 1000,
    transactionDate: "2024-09-14",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-09-13",
  },
  {
    title: "Takeo",
    category: CategoryType.DebtRepayment,
    amount: 1500,
    transactionDate: "2024-09-22",
  },
  {
    title: "Vehicle Mortgage (Oct - Nov)",
    category: CategoryType.DebtRepayment,
    amount: 1000,
    transactionDate: "2024-09-28",
  },
  {
    title: "Marina's Expense",
    category: CategoryType.FamilyAndChildren,
    amount: 500,
    transactionDate: "2024-09-01",
  },
  {
    title: "Savings",
    category: CategoryType.SavingsAndInvestments,
    amount: 2000,
    transactionDate: "2024-09-01",
  },
  {
    title: "GTA V",
    category: CategoryType.Entertainment,
    amount: 33,
    transactionDate: "2024-09-21",
  },
  {
    title: "Wine",
    category: CategoryType.Food,
    amount: 15,
    transactionDate: "2024-09-22",
  },
  {
    title: "Phayul",
    category: CategoryType.Food,
    amount: 138,
    transactionDate: "2024-09-16",
  },
  {
    title: "ChatGPT",
    category: CategoryType.BillsAndSubscriptions,
    amount: 22,
    transactionDate: "2024-09-09",
  },
  {
    title: "Rosedale Deli",
    category: CategoryType.Food,
    amount: 4,
    transactionDate: "2024-09-06",
  },
  {
    title: "Halal Bros",
    category: CategoryType.Food,
    amount: 37,
    transactionDate: "2024-09-03",
  },
  {
    title: "Nespresso pods",
    category: CategoryType.Food,
    amount: 123,
    transactionDate: "2024-09-27",
  },
  {
    title: "Udemy Course Java/Spring Boot Microservice",
    category: CategoryType.Education,
    amount: 17,
    transactionDate: "2024-09-03",
  },
  {
    title: "Aapa & Aama First Salary (Extra)",
    category: CategoryType.FamilyAndChildren,
    amount: 400,
    transactionDate: "2024-10-25",
  },
  {
    title: "Marina Misc ❤️",
    category: CategoryType.Miscellaneous,
    amount: 30,
    transactionDate: "2024-09-23",
  },
  {
    title: "Sup Thai",
    category: CategoryType.Food,
    amount: 250,
    transactionDate: "2024-09-28",
  },
  {
    title: "ASOS",
    category: CategoryType.ClothingAndAccessories,
    amount: 171,
    transactionDate: "2024-09-29",
  },
  {
    title: "Costco Groceries",
    category: CategoryType.Food,
    amount: 150,
    transactionDate: "2024-09-30",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-09-30",
  },
  {
    title: "Costco Groceries",
    category: CategoryType.Food,
    amount: 160,
    transactionDate: "2024-10-10",
  },
  {
    title: "Takeo",
    category: CategoryType.DebtRepayment,
    amount: 1500,
    transactionDate: "2024-10-22",
  },
  {
    title: "Marina's Expense",
    category: CategoryType.FamilyAndChildren,
    amount: 500,
    transactionDate: "2024-10-01",
  },
  {
    title: "Savings",
    category: CategoryType.SavingsAndInvestments,
    amount: 2000,
    transactionDate: "2024-10-01",
  },
  {
    title: "City + JH Train",
    category: CategoryType.Transportation,
    amount: 22,
    transactionDate: "2024-10-03",
  },
  {
    title: "Phayul + Ice Cream",
    category: CategoryType.Food,
    amount: 67,
    transactionDate: "2024-10-03",
  },
  {
    title: "Family Gateway Poconos",
    category: CategoryType.Travel,
    amount: 555,
    transactionDate: "2024-10-04",
  },
  {
    title: "Hoka Shoes",
    category: CategoryType.ClothingAndAccessories,
    amount: 158,
    transactionDate: "2024-10-04",
  },
  {
    title: "Cellular Repayment",
    category: CategoryType.DebtRepayment,
    amount: 524,
    transactionDate: "2024-10-11",
  },
  {
    title: "MTA to JH",
    category: CategoryType.Transportation,
    amount: 11,
    transactionDate: "2024-10-11",
  },
  {
    title: "Phayul",
    category: CategoryType.Transportation,
    amount: 59,
    transactionDate: "2024-10-11",
  },
  {
    title: "ChatGPT",
    category: CategoryType.BillsAndSubscriptions,
    amount: 22,
    transactionDate: "2024-10-09",
  },
  {
    title: "Marina MTA, Uber, Coffee",
    category: CategoryType.Food,
    amount: 49,
    transactionDate: "2024-10-14",
  },
  {
    title: "Uniqlo",
    category: CategoryType.ClothingAndAccessories,
    amount: 500,
    transactionDate: "2024-10-14",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-10-15",
  },
  {
    title: "Costco Groceries 2",
    category: CategoryType.ClothingAndAccessories,
    amount: 104,
    transactionDate: "2024-10-16",
  },
  {
    title: "Ludo Loss",
    category: CategoryType.Entertainment,
    amount: 70,
    transactionDate: "2024-10-20",
  },
  {
    title: "Kyuramen",
    category: CategoryType.Food,
    amount: 160,
    transactionDate: "2024-10-19",
  },
  {
    title: "Spot Dessert Bar",
    category: CategoryType.Food,
    amount: 56,
    transactionDate: "2024-10-19",
  },
  {
    title: "Target",
    category: CategoryType.Miscellaneous,
    amount: 11,
    transactionDate: "2024-10-19",
  },
  {
    title: "MTA to City",
    category: CategoryType.Transportation,
    amount: 20,
    transactionDate: "2024-10-20",
  },
  {
    title: "Passport charge",
    category: CategoryType.Miscellaneous,
    amount: 153,
    transactionDate: "2024-10-24",
  },
  {
    title: "Lasha lunch city",
    category: CategoryType.Food,
    amount: 96,
    transactionDate: "2024-10-24",
  },
  {
    title: "MTA",
    category: CategoryType.Transportation,
    amount: 20,
    transactionDate: "2024-10-24",
  },
  {
    title: "Grand central coffee",
    category: CategoryType.Food,
    amount: 13,
    transactionDate: "2024-10-24",
  },
  {
    title: "Halal Bros Grill",
    category: CategoryType.Food,
    amount: 60,
    transactionDate: "2024-10-21",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-10-31",
  },
  {
    title: "Marina's Expense",
    category: CategoryType.FamilyAndChildren,
    amount: 500,
    transactionDate: "2024-11-01",
  },
  {
    title: "Savings",
    category: CategoryType.SavingsAndInvestments,
    amount: 2000,
    transactionDate: "2024-11-01",
  },
  {
    title: "Rent",
    category: CategoryType.Housing,
    amount: 1000,
    transactionDate: "2024-11-01",
  },
  {
    title: "Cellular",
    category: CategoryType.BillsAndSubscriptions,
    amount: 85,
    transactionDate: "2024-11-01",
  },

  {
    title: "Takeo",
    category: CategoryType.DebtRepayment,
    amount: 1500,
    transactionDate: "2024-11-22",
  },
  {
    title: "ChatGPT",
    category: CategoryType.BillsAndSubscriptions,
    amount: 22,
    transactionDate: "2024-11-09",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-11-15",
  },
  {
    title: "Salary",
    category: CategoryType.Income,
    amount: 3885,
    transactionDate: "2024-11-29",
  },
];

export const GET = catchAsync(async function (req: Request) {
  // await dbConnect();

  // const body = await req.json();
  // body.provider = "credentials";

  // const user: any = await User.create(body);
  // user.password = undefined;

  return Response.json({ status: "success", data: DATA });
});
