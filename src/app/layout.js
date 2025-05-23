import { Geist, Geist_Mono, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ArabicFont = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata = {
  title: "Mostafa Alqadi Dev",
  description: "Find out more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${InterFont.variable} ${ArabicFont.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
