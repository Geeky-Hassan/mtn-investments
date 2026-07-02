import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTN Investments | Global Digital Asset Infrastructure",
  description:
    "MTN Investments builds digital asset rails for tokenization, settlement, exchange operations and EVM-powered infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
