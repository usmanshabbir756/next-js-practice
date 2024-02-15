export default function Products({params}: {
    params:{productId:string}
}){
    return <h1> Products page {params.productId}</h1>
}