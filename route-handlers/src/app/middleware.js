import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middcleware(request) {
//   return NextResponse.redirect(new URL('/', request.url))
if (request.nextUrl.pathname.startsWith('/new')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/new',
// }