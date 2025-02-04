import { headers, cookies } from "next/headers";

export async function GET(request){
    // const headerData = await headers();
    // console.log(headerData.get("Authorization"));

    const newHeader = new Headers(request.headers);
    console.log(newHeader.get("Authorization"));

    // const cookieData = await request.cookies;
    // const theme = cookieData.get("theme")
    // console.log(theme.value);

    const cookieData = await cookies();
    console.log(cookieData.get("theme"));

    return  new Response("<h1>Hello there</h1>", {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": "theme=dark",
        },
        

    })
}