import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const session = await getServerSession(options);
  if (session) redirect("/dashboard");
  return (
    <main className="max-w-screen-lg mx-auto px-[15px] py-4 overflow-hidden">
      <h1 className="text-3xl font-medium">
        Try centsible. The budget app that you always wanted.
      </h1>
      <p className="mt-3 mb-6">
        Join and gain insights into you spendings, it&apos;s free.
      </p>
      <div className="mb-6">
        <Link
          className="py-4 px-8 inline-block bg-black text-white rounded-lg hover:opacity-75"
          href="/signin"
        >
          Get started
        </Link>
      </div>
      <div className="relative mb-12">
        <Image
          className="rounded-xl border border-neutral-200  shadow-md"
          src="/images/banner-1.png"
          alt="centsible banner 1"
          width={900}
          height={796}
        />
        <Image
          className="rounded-xl border border-neutral-200 shadow-md absolute top-12 left-12"
          src="/images/banner-1.png"
          alt="centsible banner 1"
          width={900}
          height={796}
        />
      </div>
    </main>
  );
}
