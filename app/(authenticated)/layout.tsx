import { redirect } from "next/navigation";
import * as React from "react";

import { createClientForServer } from "@/utilities/server";

type AuthenticatedLayoutProps = { children: React.ReactNode };

export default async function AuthenticatedLayout(props: AuthenticatedLayoutProps) {
  const { children } = props;
  const client = await createClientForServer();
  const user = await client.auth.getUser();
  if (user && user.data && user.data.user) {
    return React.Children.only(children);
  }
  return redirect("/signin");
}
