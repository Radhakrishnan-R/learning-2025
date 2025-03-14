"use client"


import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css"
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const [input, setInput] = useState("")


  const pathname = usePathname();
  console.log(usePathname())

  const nav = [
    {
      id: 1,
      item: "Home",
      href: "/",
    },
    {
      id: 2,
      item: "Blog",
      href: "/blog",
    },
    {
      id: 3,
      item: "Products",
      href: "/products",
    },
  ]



  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <input className="border border-black" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <div className=" space-x-4 w-full text-center" >
        {
          nav.map((item,i) => (
            <Link className={`${item.href === pathname && 'font-bold text-2xl'}`} key={i} href={item.href}>{item.item}</Link>
          ))
        }
      </div>
    
        {children}
        <div className="mt-10 text-3xl font-semibold">{pathname}</div>
      </body>
    </html>
  );
}
