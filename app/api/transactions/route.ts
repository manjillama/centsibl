import dbConnect from "@/lib/dbConnect";
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

const DATA = [
  {
    title: "Rent",
    category: "Housing",
    amount: 0,
    transactionDate: "2024-09-01",
  },
  {
    title: "Costco groceries",
    category: "Food",
    amount: 0,
    transactionDate: "2024-09-08",
  },
  {
    title: "Mom & Dad First Salary",
    category: "Family & Children",
    amount: 1000,
    transactionDate: "2024-09-14",
  },
  {
    title: "Aapa & Aama First Salary",
    category: "Family & Children",
    amount: 1000,
    transactionDate: "2024-09-14",
  },
  {
    title: "Takeo",
    category: "Debt",
    amount: 1500,
    transactionDate: "2024-09-22",
  },
  {
    title: "Vehicle Mortgage (Oct - Nov)",
    category: "Debt",
    amount: 1000,
    transactionDate: "2024-09-28",
  },
  {
    title: "Marina's Expense",
    category: "Family & Children",
    amount: 500,
    transactionDate: "2024-09-01",
  },
  {
    title: "Savings",
    category: "Savings & Investments",
    amount: 2000,
    transactionDate: "2024-09-01",
  },
  {
    title: "GTA V",
    category: "Entertainment",
    amount: 33,
    transactionDate: "2024-09-21",
  },
  {
    title: "Wine",
    category: "Food",
    amount: 15,
    transactionDate: "2024-09-22",
  },
  {
    title: "Phayul",
    category: "Food",
    amount: 138,
    transactionDate: "2024-09-16",
  },
  {
    title: "ChatGPT",
    category: "Bills & Subscriptions",
    amount: 22,
    transactionDate: "2024-09-09",
  },
  {
    title: "Rosedale Deli",
    category: "Food",
    amount: 4,
    transactionDate: "2024-09-06",
  },
  {
    title: "Halal Bros",
    category: "Food",
    amount: 37,
    transactionDate: "2024-09-03",
  },
  {
    title: "Nespresso pods",
    category: "Food",
    amount: 123,
    transactionDate: "2024-09-27",
  },
  {
    title: "Udemy Course Java/Spring Boot Microservice",
    category: "Education",
    amount: 17,
    transactionDate: "2024-09-03",
  },
  {
    title: "Marina Misc ❤️",
    category: "Miscellaneous",
    amount: 30,
    transactionDate: "2024-09-23",
  },
  {
    title: "Sup Thai",
    category: "Food",
    amount: 250,
    transactionDate: "2024-09-28",
  },
  {
    title: "ASOS",
    category: "Clothing & Accessories",
    amount: 171,
    transactionDate: "2024-09-29",
  },
  {
    title: "Costco Groceries",
    category: "Food",
    amount: 150,
    transactionDate: "2024-09-30",
  },
  {
    title: "Costco Groceries",
    category: "Food",
    amount: 160,
    transactionDate: "2024-10-10",
  },
  {
    title: "Takeo",
    category: "Debt",
    amount: 1500,
    transactionDate: "2024-10-22",
  },
  {
    title: "Marina's Expense",
    category: "Family & Children",
    amount: 500,
    transactionDate: "2024-10-01",
  },
  {
    title: "Savings",
    category: "Savings & Investments",
    amount: 2000,
    transactionDate: "2024-10-01",
  },
  {
    title: "City + JH Train",
    category: "Transportation",
    amount: 22,
    transactionDate: "2024-10-03",
  },
  {
    title: "Phayul + Ice Cream",
    category: "Food",
    amount: 67,
    transactionDate: "2024-10-03",
  },
  {
    title: "Family Gateway Poconos",
    category: "Travel",
    amount: 555,
    transactionDate: "2024-10-04",
  },
  {
    title: "Hoka Shoes",
    category: "Clothing & Accessories",
    amount: 158,
    transactionDate: "2024-10-04",
  },
  {
    title: "Cellular Repayment",
    category: "Debt",
    amount: 524,
    transactionDate: "2024-10-11",
  },
  {
    title: "MTA to JH",
    category: "Transportation",
    amount: 11,
    transactionDate: "2024-10-11",
  },
  {
    title: "Phayul",
    category: "Transportation",
    amount: 59,
    transactionDate: "2024-10-11",
  },
  {
    title: "ChatGPT",
    category: "Bills & Subscriptions",
    amount: 22,
    transactionDate: "2024-10-09",
  },
  {
    title: "Marina MTA, Uber, Coffee",
    category: "Food",
    amount: 49,
    transactionDate: "2024-10-14",
  },
  {
    title: "Uniqlo",
    category: "Clothing & Accessories",
    amount: 500,
    transactionDate: "2024-10-14",
  },
  {
    title: "Costco Groceries 2",
    category: "Clothing & Accessories",
    amount: 104,
    transactionDate: "2024-10-16",
  },
  {
    title: "Ludo Loss",
    category: "Entertainment",
    amount: 70,
    transactionDate: "2024-10-20",
  },
  {
    title: "Kyuramen",
    category: "Food",
    amount: 160,
    transactionDate: "2024-10-19",
  },
  {
    title: "Spot Dessert Bar",
    category: "Food",
    amount: 56,
    transactionDate: "2024-10-19",
  },
  {
    title: "Target",
    category: "Miscellaneous",
    amount: 11,
    transactionDate: "2024-10-19",
  },
  {
    title: "MTA to City",
    category: "Transportation",
    amount: 20,
    transactionDate: "2024-10-20",
  },
  {
    title: "Halal Bros Grill",
    category: "Food",
    amount: 60,
    transactionDate: "2024-10-21",
  },
  {
    title: "Marina's Expense",
    category: "Family & Children",
    amount: 500,
    transactionDate: "2024-11-01",
  },
  {
    title: "Savings",
    category: "Savings & Investments",
    amount: 2000,
    transactionDate: "2024-11-01",
  },
  {
    title: "Rent",
    category: "Housing",
    amount: 1000,
    transactionDate: "2024-11-01",
  },
  {
    title: "Cellular",
    category: "Bills & Subscriptions",
    amount: 85,
    transactionDate: "2024-11-01",
  },
  {
    title: "Takeo",
    category: "Debt",
    amount: 1500,
    transactionDate: "2024-11-22",
  },
  {
    title: "ChatGPT",
    category: "Bills & Subscriptions",
    amount: 22,
    transactionDate: "2024-11-09",
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
