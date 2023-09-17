import { NextRequest, NextResponse } from 'next/server';
import middleware from 'next-auth/middleware';

export default middleware;

// custom redirect
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }

export const config = {
  // * : zero or more
  // + : one or more
  // ? : zero or more
  matcher: ['/users/:id*', '/dashboard/:path*'],
};
