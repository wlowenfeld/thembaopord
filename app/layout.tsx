import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thembaopord.com"),
  title: {
    default: "The MBA OPORD | Military Officer's Guide to Business School",
    template: "%s | The MBA OPORD",
  },
  description:
    "The definitive guide for military officers pursuing an MBA. From applications to admissions, funding to thriving in business school. Written by a Stern MBA '19 grad and military veteran.",
  keywords: [
    "military MBA",
    "military officer MBA",
    "veteran MBA",
    "military to business school",
    "MBA admissions military",
    "GI Bill MBA",
    "military MBA guide",
  ],
  authors: [{ name: "Wes Lowenfeld" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thembaopord.com",
    siteName: "The MBA OPORD",
    title: "The MBA OPORD | Military Officer's Guide to Business School",
    description:
      "The definitive guide for military officers pursuing an MBA. Written by a Stern MBA '19 grad and military veteran.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The MBA OPORD | Military Officer's Guide to Business School",
    description:
      "The definitive guide for military officers pursuing an MBA. Written by a Stern MBA '19 grad and military veteran.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
