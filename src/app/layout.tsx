import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";

const SFProDisplayRegular = localFont({
  src: "../../public/fonts/SF-Pro-Display-Regular.otf",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veyno",
  description: "Finance Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFProDisplayRegular.className} antialiased bg-background text-foreground w-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
