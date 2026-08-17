import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GOLD STANDARD GYM | Gulbahar, Peshawar",
  description:
    "GOLD STANDARD GYM - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs. Open Mon-Sat 6AM-11PM!",
  keywords: "gym, fitness, personal training, yoga, crossfit, peshawar, gulbahar, pakistan",
  openGraph: {
    title: "GOLD STANDARD GYM | Gulbahar, Peshawar",
    description: "GOLD STANDARD GYM - the premier fitness center in Gulbahar, Peshawar with expert trainers, modern equipment, and personalized training programs.",
    siteName: "GOLD STANDARD GYM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
