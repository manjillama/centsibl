import AuthProvider from "@/context/auth-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Navbar from "@/components/navbar";
import { TransactionProvider } from "@/context/transaction-provider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 max-w-screen-xl	mx-auto`}
      >
        <TransactionProvider>
          <AuthProvider session={session}>
            <Navbar />
            {children}
            <footer className="py-16 text-white text-center">
              The budget app that you always wanted.
            </footer>
          </AuthProvider>
        </TransactionProvider>
      </body>
    </html>
  );
}
