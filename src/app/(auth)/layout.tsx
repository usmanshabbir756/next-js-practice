"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
    const path=[
        {name:"Login" , link:"/login"},
        {name:"Register" , link:"/register"},
        {name:"Forget Password" , link:"/forget-password"}
    ]
    const pathname=usePathname();
    

  return (
    <>
        {
            path.map((p)=>{
                const isActvie=pathname.startsWith(p.link);
                return(
                <Link 
                href={p.link} 
                key={p.name}
                className={isActvie ? "font-bold mr-4" : "text-blue-500 mr-4"}
                >{p.name}</Link>
                );
            })
        }
        {children}
    </>
  )
}
