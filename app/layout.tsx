import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CityPulse - Urban Management Dashboard",
  description: "Comprehensive city management and monitoring platform",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ServiceWorkerRegister /> {/* ✅ Register SW */}
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <div className='min-h-screen bg-gray-900 text-white'>
            <Navigation />
            <main className='pt-16'>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
