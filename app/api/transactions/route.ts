import dbConnect from "@/lib/dbConnect";
import catchAsync from "@/utils/errorHandler";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import transactionService from "@/services/transactionService";
import AppError from "@/utils/appError";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";

export const GET = catchAsync(async function (req: NextRequest) {
  const year = req.nextUrl.searchParams.get("year");

  await dbConnect();
  const session = await getServerSession(options);

  if (!session)
    throw new AppError("You need to be logged in first", StatusCodes.FORBIDDEN);

  const transactions = await transactionService.getUserTransactionsByYear(
    session?.user.id as string,
    year as string
  );

  return Response.json({ status: "success", data: transactions });
});

export const POST = catchAsync(async function (req: Request) {
  await dbConnect();
  const session = await getServerSession(options);

  if (!session)
    throw new AppError("You need to be logged in first", StatusCodes.FORBIDDEN);

  const body = await req.json();
  const transaction = await transactionService.createTransaction(
    body,
    session?.user.id as string
  );

  return Response.json({ status: "success", data: transaction });
});
