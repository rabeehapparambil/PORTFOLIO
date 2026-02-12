import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/ui/Header";
import { cn } from "@/lib/utils";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PORTFOLIO | Creative Designer",
  description: "A digital experience by a professional graphic designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={cn(
          syne.variable,
          inter.variable,
          "bg-background text-foreground relative"
        )}
      >
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
        <div className="grain-overlay" />
        <CustomCursor />
      </body>
    </html>
  );
}
