import type { Metadata } from "next";
import { Black_Han_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import "@/lib/storyblok";
import StoryblokProvider from "@/components/StoryblokProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Project Kompass",
  description: "Supporting transitions with dignity and stability",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blackHanSans.variable} ${montserrat.variable} antialiased`}>
        <Navigation />
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
        <Footer />
      </body>
    </html>
  );
}
