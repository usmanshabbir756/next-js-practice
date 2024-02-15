import { Metadata } from "next"
import Link from "next/link"

export const metadata : Metadata = {
    title: {
        absolute:"Products"
    }
  }
  

export default function Prducts(){
    const productId=1;
    return (
    <main>
        <Link href="/">Home</Link>
        <h1>products</h1>
        <p><Link href={`products/${productId}`}>produc 1</Link></p>
        <p><Link href="products/2" replace>produc 2</Link></p>
    </main>
    )
}