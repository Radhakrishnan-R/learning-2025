import { headers } from "next/headers";
import { data } from "./data"

export async function GET(){
    return new Response.json(data);
}


export async function POST(request){

    const dataNew = await request.json();
    console.log(dataNew);
    const text = {
        id: data.length + 1,
        text: dataNew.text,
    };

    data.push(text);

    console.log(data);

    return new Response(JSON.stringify(data), {
        headers: {"Content-Type":"application/json"},
        status: 201,
    });
}