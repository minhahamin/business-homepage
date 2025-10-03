import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 조회수 증가 여부를 판단하는 간단한 캐시 (메모리)
const viewCache = new Map<string, number>();
const CACHE_DURATION = 60000; // 1분

// 특정 공지사항 조회 (조회수 증가)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // 클라이언트 IP나 세션 식별 (간단한 버전)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const cacheKey = `${id}-${ip}`;
    const now = Date.now();
    
    // 최근에 조회한 기록이 있는지 확인
    const lastView = viewCache.get(cacheKey);
    const shouldIncrement = !lastView || (now - lastView > CACHE_DURATION);

    // 조회수 증가 (중복 방지)
    const notice = await prisma.notice.update({
      where: { id },
      data: shouldIncrement ? {
        views: {
          increment: 1,
        },
      } : {},
      include: {
        author: {
          select: {
            name: true,
            username: true,
          },
        },
      },
    });

    // 캐시 업데이트
    if (shouldIncrement) {
      viewCache.set(cacheKey, now);
      
      // 오래된 캐시 정리 (메모리 관리)
      if (viewCache.size > 1000) {
        const entries = Array.from(viewCache.entries());
        entries.slice(0, 500).forEach(([key]) => viewCache.delete(key));
      }
    }

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

