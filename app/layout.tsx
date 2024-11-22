import "./globals.css";

import "@fontsource-variable/outfit";

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Berrotools", description: "Created by Rafael Berro." };

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <html lang="pt-br" className="antialiased">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
