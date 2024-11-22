import { redirect } from "next/navigation";
import * as React from "react";

import { createClientForServer } from "@/utilities/server";
import { Header } from "@/components/header";

type UnauthenticatedLayoutProps = { children: React.ReactNode };

export default async function UnauthenticatedLayout(props: UnauthenticatedLayoutProps) {
  const { children } = props;
  const client = await createClientForServer();
  const user = await client.auth.getUser();
  if (user && user.data && user.data.user) {
    return redirect("/");
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
}
