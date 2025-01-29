"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {

  


  return (
    <div>
      
      <div className="min-h-28 text-5xl flex justify-center items-center">
        hello
        <Link href='/blog'>Blog</Link>
        <Link href='/products'>Products</Link>
        <Link href='/article/news-today-123?lang=en'>Read in English</Link>
        <Link href='/article/news-today-456?lang=fr'>Read in French</Link>
      </div>

      
    </div>
    
  );
}
