import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="max-w-4xl mx-auto px-4">{children}</body>
    </html>
  );
}
