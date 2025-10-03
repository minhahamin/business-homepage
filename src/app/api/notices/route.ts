import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 공지사항 목록 조회 (공개용 - 인증 불필요)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // 공개된 공지사항만 조회
    const [notices, total] = await Promise.all([
      prisma.notice.findMany({
        where: {
          isPublished: true,
        },
        include: {
          author: {
            select: {
              name: true,
              username: true,
            },
          },
        },
        orderBy: [
          { isPinned: 'desc' }, // 고정 공지사항 먼저
          { createdAt: 'desc' }, // 최신순
        ],
        skip,
        take: limit,
      }),
      prisma.notice.count({
        where: {
          isPublished: true,
        },
      }),
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

