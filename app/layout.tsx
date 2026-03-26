import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JR Tools USA Tap Card",
  description: "Standalone bilingual smart tap card for JR Tools USA with call, text, WhatsApp, VCF, shop, and lead capture."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
