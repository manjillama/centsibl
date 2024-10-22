import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { BuiltInProviderType } from "next-auth/providers/index";

type Props = {
  providers: Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null;
};
export default function OAuthProviders({ providers }: Props) {
  if (!providers) return null;
  return (
    <div className="space-y-4 my-6">
      {Object.values(providers).map((provider) =>
        provider.name === "Credentials" ? null : (
          <OAuthProvider key={provider.id} provider={provider} />
        )
      )}
    </div>
  );
}

function OAuthProvider({ provider }: { provider: ClientSafeProvider }) {
  return (
    <button
      onClick={() => signIn(provider.id)}
      className="flex items-center text-black space-x-4 p-3 justify-center border bg-neutral-100 w-full rounded-lg hover:bg-neutral-300"
    >
      <Image
        src={`/images/${provider.name.toLowerCase()}-logo.svg`}
        alt="me"
        width={30}
        height={30}
      />
      <span> Continue with {provider.name}</span>
    </button>
  );
}
