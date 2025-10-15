import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareerFastrack - Professional Tech Education Platform",
  description: "Transform your career with our expert-led courses, live training sessions, and guaranteed placements. Learn from industry professionals and land your dream tech job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthModal /> 
        <Header /> {/* <-- Add the Header here */}
        <main>
          {children} {/* This is where your page content will go */}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}