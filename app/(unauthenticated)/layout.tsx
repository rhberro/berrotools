import * as React from "react";

import { Header } from "@/components/header";

type UnauthenticatedLayoutProps = { children: React.ReactNode };

export default async function UnauthenticatedLayout(props: UnauthenticatedLayoutProps) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}
