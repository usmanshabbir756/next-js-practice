export default function ReviewOfId({params}:
    {
        params:{
            productId:string,
            reviewId:string
        }
    }){
    return <h1>Review Id {params.reviewId}  and Product Id {params.productId}  </h1>
}