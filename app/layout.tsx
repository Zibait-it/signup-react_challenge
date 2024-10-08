import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign Up | Challenge",
  description: "React Challenge",
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
