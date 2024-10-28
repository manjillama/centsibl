"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import SignoutButton from "./signout-button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "../ui";
import Avatar from "../ui/avatar";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  // console.log("From Navbar: (Client session)", session);

  return (
    <nav className="container py-3 mx-auto px-[15px] text-sm">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link href="/">centsible.</Link>
        </h1>
        <ul className="flex space-x-2 items-center">
          {session ? (
            <>
              <li>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="outline-none block"
                      aria-label="Account options"
                    >
                      <Avatar user={session.user} />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      align="end"
                      sideOffset={5}
                      className="w-[250px] bg-neutral-800 py-2 rounded-lg text-xs"
                    >
                      <DropdownMenu.Item className="outline-none px-4 py-2">
                        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                          {session.user.name}
                        </p>
                        <span className="text-neutral-500 block overflow-hidden text-ellipsis whitespace-nowrap">
                          {session.user.email}
                        </span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="outline-none">
                        <NavLink
                          activeStyle={{
                            backgroundColor: "#404040",
                            color: "#fff",
                          }}
                          className="text-white block outline-none px-4 py-2 hover:bg-neutral-700"
                          href="/dashboard"
                        >
                          Dashboard
                        </NavLink>
                      </DropdownMenu.Item>
                      {/* <DropdownMenu.Item className="outline-none">
                        <NavLink
                          activeStyle={{
                            backgroundColor: "#404040",
                            color: "#fff",
                          }}
                          className="text-white block outline-none px-4 py-2 hover:bg-neutral-700"
                          href="/account"
                        >
                          Account
                        </NavLink>
                      </DropdownMenu.Item> */}
                      <DropdownMenu.Separator className="border-b border-neutral-700" />
                      <DropdownMenu.Item className="outline-none">
                        <SignoutButton />
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
            </>
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
