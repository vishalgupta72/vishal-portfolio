import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vishal's portfolio",
  description: "This is vishal's portfolio using nexttJS with tailwind CSS",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-dssd className={dancing_script.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <body className={`${inter.className} ${dancing_Script.className}`}>{children}</body> */}
    </html>
  );
}
