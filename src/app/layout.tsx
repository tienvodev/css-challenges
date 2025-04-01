import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "CSS Challenges",
  description: "CSS challenges to improve your CSS skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
