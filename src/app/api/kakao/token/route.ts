import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { success: false, message: '인증 코드가 필요합니다.' },
        { status: 400 }
      );
    }

    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

    if (!REST_API_KEY) {
      return NextResponse.json(
        { success: false, message: 'KAKAO REST API 키가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // 카카오 토큰 발급 API 호출
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: 'http://localhost:3000/auth/kakao/callback',
        code: code,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('카카오 토큰 발급 실패:', result);
      return NextResponse.json(
        { success: false, message: '토큰 발급 실패', error: result },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      expires_in: result.expires_in,
    });
  } catch (error) {
    console.error('토큰 발급 오류:', error);
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

