import Link from "next/link";
import { resolve } from "styled-jsx/css";

const BlogPage = async() => {

  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Itentional delay");
    }, 2000);
  })


  return (
    <div>BlogPage
        <Link href="/">Home</Link>
    </div>
  )
}

export default BlogPage;