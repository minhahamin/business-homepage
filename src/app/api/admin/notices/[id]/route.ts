import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getUserFromToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// 관리자용 - 공지사항 수정
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    const user = getUserFromToken(token);

    if (!user) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const params = await context.params;
    const { id } = params;
    const { title, content, isPinned, isPublished } = await request.json();

    const notice = await prisma.notice.update({
      where: { id },
      data: {
        title,
        content,
        isPinned,
        isPublished,
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
      message: '공지사항이 수정되었습니다.',
      notice,
    });
  } catch (error) {
    console.error('공지사항 수정 오류:', error);
    return NextResponse.json(
      { success: false, message: '공지사항 수정에 실패했습니다.' },
      { status: 500 }
    );
  }
}

// 관리자용 - 공지사항 삭제
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    const user = getUserFromToken(token);

    if (!user) {
      return NextResponse.json(
        { success: false, message: '로그인이 필요합니다.' },
        { status: 401 }
      );
    }

    const params = await context.params;
    const { id } = params;

    await prisma.notice.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: '공지사항이 삭제되었습니다.',
    });
  } catch (error) {
    console.error('공지사항 삭제 오류:', error);
    return NextResponse.json(
      { success: false, message: '공지사항 삭제에 실패했습니다.' },
      { status: 500 }
    );
  }
}

