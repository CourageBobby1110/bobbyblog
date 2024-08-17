import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Open_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Roboto({
  weight: '400',
 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ravens Academy",
  description: "Ravens Academy offers comprehensive course outlines to help university students master their subjects and achieve academic excellence. Our expertly designed study materials provide a clear path to success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         
      <body className={inter.className}>
      <main>
      <Navbar />
        {children}
        <Footer/>
      </main>
        </body>
    </html>
  );
}
