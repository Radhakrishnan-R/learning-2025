"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductPage = () => {

  const router = useRouter();
  function handleClick() {
    router.back();
  }


  const product = [
    {
      id: 1,
      item: "Product 1",
    },
    {
      id: 2,
      item: "Product 2"
    },
    {
      id: 3,
      item: "Product 3"
    },
  ]

  

  return (
    <div className="w-full text-4xl flex gap-4 h-screen justify-center items-center">
        {
          product.map((item,i) => (
            <Link key={i} href={`/products/${item.id}`}>{item.item}</Link>
          ))
        }

        <button onClick={handleClick}>Place your order</button>
    </div>
  )
}

export default ProductPage;