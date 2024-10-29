/* eslint-disable @next/next/no-img-element */
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE_DATA } from "@/constants";

export default async function HomePage() {
  const session = await getServerSession(options);
  if (session) redirect("/dashboard");
  return (
    <main className="max-w-screen-lg mx-auto px-[15px] py-4">
      <h1 className="text-3xl font-medium">
        Try {SITE_DATA.title}. The budget app that you always wanted.
      </h1>
      <p className="mt-3 mb-6">
        Join and gain insights into you income and spendings, it&apos;s free.
      </p>
      <div className="mb-6">
        <Link
          className="py-4 px-6 inline-block bg-black text-white rounded-lg hover:opacity-75 text-sm"
          href="/signin"
        >
          Get started
        </Link>
      </div>
      <div className="relative pb-32 overflow-hidden">
        <Image
          className="rounded-xl border border-neutral-200  shadow-md"
          src="/images/banner-3.png"
          alt="banner 3"
          width={900}
          height={796}
        />
        <Image
          className="rounded-xl border border-neutral-200 shadow-md absolute top-20 left-16"
          src="/images/banner-1.png"
          alt="banner 1"
          width={900}
          height={796}
        />
        <img
          className="shadow-md absolute sm:max-w-[210px]  left-4 -bottom-2 max-w-[120px]"
          src="/images/banner-2.png"
          alt="banner 3"
        />
      </div>
    </main>
  );
}
