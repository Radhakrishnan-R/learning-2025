import Link from "next/link";

const ProductPage = () => {


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
    </div>
  )
}

export default ProductPage;