import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "905 Detailing — Preview Landing",
  description: "A clean, modern preview landing page for a mobile detailing business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">{children}</body>
    </html>
  );
}
