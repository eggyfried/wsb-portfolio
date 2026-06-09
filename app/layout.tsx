import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "William Stewart-Blacker — Portfolio",
  description:
    "Portfolio of William Stewart-Blacker — Art Direction, Architecture, Photography",
  openGraph: {
    title: "William Stewart-Blacker",
    description: "Art Direction · Architecture · Photography",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen">
        <CustomCursor />
        <LoadingScreen />
        <Navigation />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
