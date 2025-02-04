import { headers } from "next/headers";
import { data } from "./data";

export async function GET(request){
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams);
    const query = searchParams.get("query");
    const query1 = searchParams.get("word");
    console.log(query);
    console.log(query1);
    const filterData = (query && query1) ? data.filter((item) => item.comment.includes(query1) && item.comment.includes(query)) : data;
    console.log(filterData);
    return Response.json(filterData);
}

export async function POST(Request){
    const body = await Request.json();
    console.log(body);

    const newData = {
        id: data.length + 1,
        text: body.text,
    }

    data.push(newData);

    return new Response(JSON.stringify(data), {
        headers: {"Content-Type": "application/json"},
        Status: 201,
    })

}