import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 유효성 검사
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: '아이디와 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 관리자 조회
    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: '존재하지 않는 관리자입니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 검증
    const isValidPassword = await verifyPassword(password, admin.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: '비밀번호가 일치하지 않습니다.' },
        { status: 401 }
      );
    }

    // JWT 토큰 생성
    const token = generateToken({
      id: admin.id,
      username: admin.username,
      email: admin.email,
    });

    // 응답 생성 (쿠키에 토큰 저장)
    const response = NextResponse.json({
      success: true,
      message: '로그인 성공',
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        name: admin.name,
      },
      token,
    });

    // HttpOnly 쿠키에 토큰 저장 (보안)
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7일
    });

    return response;
  } catch (error) {
    console.error('로그인 오류:', error);
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

