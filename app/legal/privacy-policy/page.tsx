import { SITE_DATA } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_DATA.title}`,
};

function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-[15px] py-10">
        <h2 className="text-6xl font-bold">Privacy Policy</h2>
        <p className="my-4">
          This Privacy Policy tells you how {SITE_DATA.name} collects, uses,
          discloses and protects data relating to you in connection with our
          Service (as defined below).
        </p>
        <p className="my-4 font-bold">1. Introduction</p>
        <p className="my-4">
          {SITE_DATA.name} is an open source project and offers users online
          income and expense tracking platform. Use of our platform and software
          (collectively the “Service”) is subject to the terms of this Privacy
          Policy.
        </p>
        <p className="my-4 font-bold">2. The data we collect about you</p>
        <p className="my-4">
          We collect, use, store and transfer the following kinds of personal
          data about you:
        </p>
        <ul className="list-disc ml-4">
          <li className="my-4">
            We do not collect any personal data except for first name, last
            name, username or similar identifier, and email address.
          </li>
          <li className="my-4">
            Publisher&apos;s web address, title, unique Cookie ID, Device ID.
          </li>
          <li className="my-4">
            Information about how you use the Service, and the content of
            comments that you post.
          </li>
        </ul>
        <p id="cookie-policy" className="font-bold my-4">
          3. Cookie policy
        </p>
        <p className="my-4">
          {SITE_DATA.name} does not use cookie for any other purposes except for
          authentication.
        </p>
        <p className="my-4">
          {SITE_DATA.name} uses &apos;authentication&apos; cookies, to keep you
          logged in from your web browser and personalize your {SITE_DATA.name}
          experience.
        </p>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
