import OrderModel from "../../model/ordermodel";

let request:OrderModel = {
    bookId :1,
    customerName : "Bilal"
}

async function order(){
    const data = await fetch("https://simple-books-api.glitch.me/orders",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer d266ed3cbd7cb267cc9bf8edc9b26d3e5b9a212a7bf3c95bb5a7d37fedd82daa"
        },
    body: JSON.stringify(request)
    });
    let result =await data.json()

}