// Next.js 미들웨어
// 관리자 페이지 접근 권한 체크

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin 경로 접근 시 (로그인 페이지 제외)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};

