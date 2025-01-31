import { data } from "../data";

export async function GET(request, {params}){

    const {itemId} = await params;
    const item = data.find((item) => parseInt(item.id) === parseInt(itemId));
    
    return new Response(JSON.stringify(item));


}