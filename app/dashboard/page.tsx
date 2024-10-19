import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const DATA = [
  {
    transactionDate: "2024-01-05",
    title: "Groceries",
    category: "Food",
    cost: 200,
  },
  {
    transactionDate: "2024-01-15",
    title: "Gym Membership",
    category: "Health",
    cost: 50,
  },
  {
    transactionDate: "2024-01-20",
    title: "Utilities Bill",
    category: "Utilities",
    cost: 150,
  },
  {
    transactionDate: "2024-01-28",
    title: "Movie Night",
    category: "Entertainment",
    cost: 30,
  },
  {
    transactionDate: "2024-02-01",
    title: "Internet Bill",
    category: "Utilities",
    cost: 60,
  },
  {
    transactionDate: "2024-02-10",
    title: "Restaurant",
    category: "Food",
    cost: 75,
  },
  {
    transactionDate: "2024-02-14",
    title: "Valentine's Day Gift",
    category: "Gifts",
    cost: 40,
  },
  {
    transactionDate: "2024-03-01",
    title: "Savings Deposit",
    category: "Savings",
    cost: 500,
  },
  {
    transactionDate: "2024-03-05",
    title: "Pet Food",
    category: "Pets",
    cost: 45,
  },
  {
    transactionDate: "2024-03-10",
    title: "Gasoline",
    category: "Transport",
    cost: 80,
  },
  {
    transactionDate: "2024-03-15",
    title: "Household Supplies",
    category: "Home",
    cost: 100,
  },
  {
    transactionDate: "2024-03-20",
    title: "Gym Equipment",
    category: "Health",
    cost: 150,
  },
  {
    transactionDate: "2024-03-25",
    title: "Concert Tickets",
    category: "Entertainment",
    cost: 120,
  },
  {
    transactionDate: "2024-04-01",
    title: "Birthday Gift",
    category: "Gifts",
    cost: 60,
  },
  {
    transactionDate: "2024-04-05",
    title: "Haircut",
    category: "Health",
    cost: 25,
  },
  {
    transactionDate: "2024-04-10",
    title: "Laundry Service",
    category: "Home",
    cost: 35,
  },
  {
    transactionDate: "2024-04-15",
    title: "New Shoes",
    category: "Clothing",
    cost: 85,
  },
  {
    transactionDate: "2024-04-20",
    title: "Netflix Subscription",
    category: "Entertainment",
    cost: 15,
  },
  {
    transactionDate: "2024-04-25",
    title: "Weekend Getaway",
    category: "Travel",
    cost: 300,
  },
  {
    transactionDate: "2024-05-01",
    title: "Grocery Shopping",
    category: "Food",
    cost: 250,
  },
  {
    transactionDate: "2024-05-05",
    title: "Dining Out",
    category: "Food",
    cost: 70,
  },
  {
    transactionDate: "2024-05-10",
    title: "Books",
    category: "Education",
    cost: 40,
  },
  {
    transactionDate: "2024-05-15",
    title: "Museum Visit",
    category: "Entertainment",
    cost: 20,
  },
  {
    transactionDate: "2024-05-20",
    title: "Bike Repair",
    category: "Transport",
    cost: 60,
  },
  {
    transactionDate: "2024-06-01",
    title: "Vacation Savings",
    category: "Savings",
    cost: 200,
  },
  {
    transactionDate: "2024-06-05",
    title: "Gardening Supplies",
    category: "Home",
    cost: 45,
  },
  {
    transactionDate: "2024-06-10",
    title: "Sports Event",
    category: "Entertainment",
    cost: 100,
  },
  {
    transactionDate: "2024-06-15",
    title: "Clothes Shopping",
    category: "Clothing",
    cost: 150,
  },
  {
    transactionDate: "2024-06-20",
    title: "Gift for Mom",
    category: "Gifts",
    cost: 75,
  },
  {
    transactionDate: "2024-07-01",
    title: "Car Insurance",
    category: "Transport",
    cost: 120,
  },
  {
    transactionDate: "2024-07-05",
    title: "Household Repair",
    category: "Home",
    cost: 200,
  },
  {
    transactionDate: "2024-07-10",
    title: "Dinner with Friends",
    category: "Food",
    cost: 90,
  },
  {
    transactionDate: "2024-07-15",
    title: "Online Course",
    category: "Education",
    cost: 50,
  },
  {
    transactionDate: "2024-07-20",
    title: "Fitness Classes",
    category: "Health",
    cost: 80,
  },
  {
    transactionDate: "2024-08-01",
    title: "Birthday Dinner",
    category: "Food",
    cost: 120,
  },
  {
    transactionDate: "2024-08-05",
    title: "Gasoline",
    category: "Transport",
    cost: 40,
  },
  {
    transactionDate: "2024-08-10",
    title: "Camping Trip",
    category: "Travel",
    cost: 250,
  },
  {
    transactionDate: "2024-08-15",
    title: "Concert Tickets",
    category: "Entertainment",
    cost: 200,
  },
  {
    transactionDate: "2024-08-20",
    title: "New Phone",
    category: "Electronics",
    cost: 600,
  },
  {
    transactionDate: "2024-09-01",
    title: "Emergency Fund",
    category: "Savings",
    cost: 400,
  },
  {
    transactionDate: "2024-09-05",
    title: "Pet Grooming",
    category: "Pets",
    cost: 50,
  },
  {
    transactionDate: "2024-09-10",
    title: "Outdoor Activities",
    category: "Entertainment",
    cost: 75,
  },
  {
    transactionDate: "2024-09-15",
    title: "Charity Donation",
    category: "Other",
    cost: 100,
  },
  {
    transactionDate: "2024-09-20",
    title: "Laundry",
    category: "Home",
    cost: 30,
  },
  {
    transactionDate: "2024-10-01",
    title: "Halloween Costume",
    category: "Other",
    cost: 45,
  },
  {
    transactionDate: "2024-10-05",
    title: "Home Security",
    category: "Utilities",
    cost: 300,
  },
  {
    transactionDate: "2024-10-10",
    title: "Fall Festival",
    category: "Entertainment",
    cost: 60,
  },
  {
    transactionDate: "2024-10-15",
    title: "Thanksgiving Preparations",
    category: "Food",
    cost: 150,
  },
  {
    transactionDate: "2024-10-20",
    title: "New Furniture",
    category: "Home",
    cost: 800,
  },
  {
    transactionDate: "2024-11-01",
    title: "Christmas Shopping",
    category: "Other",
    cost: 200,
  },
  {
    transactionDate: "2024-11-05",
    title: "Monthly Subscription",
    category: "Utilities",
    cost: 25,
  },
];

export default async function DashboardPage() {
  const session = await getServerSession(options);
  console.log("From dashboard: (Server session)", session);

  return (
    <div className="container mx-auto px-[15px] py-4">
      <h1 className="text-4xl font-bold">
        👋 Welcome {session?.user?.name?.split(" ")[0]}!
      </h1>
      <br />
      <p>
        I&apos;m super glad that you&apos;re here. Is this example project was
        helpful then give it a star on{" "}
        <Link
          target="_blank"
          className="text-sky-500 hover:underline"
          href="https://github.com/manjillama/next-auth-example"
        >
          github
        </Link>
        .
      </p>
    </div>
  );
}
