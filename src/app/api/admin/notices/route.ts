import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getUserFromToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// 관리자용 - 모든 공지사항 조회
export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('admin_token')?.value;
    const user = getUserFromToken(token);

    if (!user) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;

    const [notices, total] = await Promise.all([
      prisma.notice.findMany({
        include: {
          author: {
            select: {
              name: true,
              username: true,
            },
          },
        },
        orderBy: [
          { isPinned: 'desc' },
          { createdAt: 'desc' },
        ],
        skip,
        take: limit,
      }),
      prisma.notice.count(),
    ]);

    return NextResponse.json({
      success: true,
      notices,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('공지사항 조회 오류:', error);
    return NextResponse.json(
      { success: false, message: '공지사항을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

// 관리자용 - 공지사항 작성
export async function POST(request: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('admin_token')?.value;
    const user = getUserFromToken(token);

    if (!user) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const { title, content, isPinned, isPublished } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: '제목과 내용을 입력해주세요.' },
        { status: 400 }
      );
    }

    const notice = await prisma.notice.create({
      data: {
        title,
        content,
        isPinned: isPinned || false,
        isPublished: isPublished !== false, // 기본값 true
        authorId: user.id,
      },
      include: {
        author: {
          select: {
            name: true,
            username: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: '공지사항이 작성되었습니다.',
      notice,
    });
  } catch (error) {
    console.error('공지사항 작성 오류:', error);
    return NextResponse.json(
      { success: false, message: '공지사항 작성에 실패했습니다.' },
      { status: 500 }
    );
  }
}

