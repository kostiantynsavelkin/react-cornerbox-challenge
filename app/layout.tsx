// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { globalCss } from '../stitches.config';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CornerBox challenge App",
  description: "CornerBox challenge App",
};

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: { fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0' },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
