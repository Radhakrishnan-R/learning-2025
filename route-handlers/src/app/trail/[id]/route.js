import { data } from "../data";


export async function GET(request, {params}) {

    
    const {id} = await params;
    const findData = data.find((item) => item.id === parseInt(id));
    console.log(findData);

    return new Response(JSON.stringify(findData));

    
}
export async function PUT(request, {params}) {

    
    const {id} = await params;
    const body = await request.json();
    console.log(body);
    const findData = data.find((item) => item.id === parseInt(id));
    const newData = {
        id: id,
        text: body,
    }

    data[id] = newData;
    console.log(findData);

    return new Response(JSON.stringify(data), {
        headers: {"Content-Type" : "application/json"},
        status: 200,
    });

    
}
export async function PATCH(request, {params}) {

    
    const {id} = await params;
    const body = await request.json();
    console.log(body);
    const findData = data.find((item) => item.id === parseInt(id));
    const newData = {
        id: id,
        text: body,
    }

    data[id] = newData;
    console.log(findData);

    return new Response(JSON.stringify(data), {
        headers: {"Content-Type" : "application/json"},
        status: 200,
    });

    
}