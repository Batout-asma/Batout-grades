import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Batout Grades",
  description: "Calculate your grades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative{`${geistSans.variable} ${geistMono.variable} antialiased`}">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
