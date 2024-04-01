import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({ 
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="">
        <Navbar/>
        {children}

        </main>
      </body>
    </html>
  );
}
