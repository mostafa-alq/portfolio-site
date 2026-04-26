import {
  Playfair_Display,
  Lora,
  Work_Sans,
  Space_Mono,
  Inter,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const arabicFont = Noto_Sans_Arabic({
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
        className={`${playfairDisplay.variable} ${lora.variable} ${workSans.variable} ${spaceMono.variable} ${inter.variable} ${arabicFont.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
