import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: '로그아웃 되었습니다.',
  });

  // 쿠키 삭제
  (await response.cookies).delete('admin_token');

  return response;
}

