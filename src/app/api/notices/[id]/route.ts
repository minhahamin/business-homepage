import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 특정 공지사항 조회 (조회수 증가)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // 조회수 증가 및 공지사항 조회
    const notice = await prisma.notice.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
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

    if (!notice || !notice.isPublished) {
      return NextResponse.json(
        { success: false, message: '공지사항을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      notice,
    });
  } catch (error) {
    console.error('공지사항 조회 오류:', error);
    return NextResponse.json(
      { success: false, message: '공지사항을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

