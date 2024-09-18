import type { Metadata } from "next";
import { PT_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const PTSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptSerif",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sourceSans3",
});

export const metadata: Metadata = {
  title: "Małgorzata Szynkarczuk",
  description:
    "Business Development, General Management, Strategic Marketing,  Product Management, Automotive Industry, Electric Vehicles, and Renewable Energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PTSerif.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
