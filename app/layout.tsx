import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TeamProvider } from "./context/TeamContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outer Wilds Ventures",
  description: "The Home of Outer Wilds Ventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TeamProvider>
          <Navbar />
          {children}
          <Footer />
        </TeamProvider>
      </body>
    </html>
  );
}
