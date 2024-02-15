"use client";
import { useRouter } from "next/navigation";


export default function first(){
    const router=useRouter();

function homeHendel(){
    router.replace("/");
}

    return <button onClick={homeHendel}>Home</button>
}