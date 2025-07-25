import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Entry Grade Calculator",
  description: "Calculate which grade or program your child is eligible for at Battery Park Montessori or Pine Street School based on birth date and entry year.",
  keywords: ["school", "grade calculator", "eligibility", "Battery Park Montessori", "Pine Street School", "education"],
  authors: [{ name: "School Calculator" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
