"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import SignoutButton from "./signout-button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  // console.log("From Navbar: (Client session)", session);

  return (
    <nav className="container py-3 mx-auto px-[15px]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link href="/">centsible.</Link>
        </h1>
        <ul className="flex space-x-2 items-center">
          {session ? (
            <li>
              <SignoutButton />
            </li>
          ) : (
            <>
              {pathname !== "/signin" ? (
                <li>
                  <Link
                    className="py-2 px-4 block bg-white text-black rounded-lg hover:bg-neutral-200"
                    href="/signin"
                  >
                    Log In
                  </Link>
                </li>
              ) : null}
              {pathname !== "/signup" ? (
                <li>
                  <Link
                    className="py-2 px-4 block bg-black text-white rounded-lg hover:opacity-75 border border-black"
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              ) : null}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
