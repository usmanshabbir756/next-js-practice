import { notFound } from "next/navigation"

export default function ReviewOfId({params}:
    {
        params:{
            productId:string,
            reviewId:string
        }
    }){
        if(parseInt(params.reviewId)>100){
            notFound();
        }
    return <h1>Review Id {params.reviewId}  and Product Id {params.productId}  </h1>
}