'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface Notice {
  id: string;
  title: string;
  content: string;
  views: number;
  isPinned: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    username: string;
  };
}

export default function NoticeDetail() {
  const params = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchNotice = async () => {
      try {
        const response = await fetch(`/api/notices/${params.id}`);
        const result = await response.json();

        if (!isMounted) return;

        if (response.ok) {
          setNotice(result.notice);
        } else {
          alert('공지사항을 찾을 수 없습니다.');
          router.push('/notice');
        }
      } catch (error) {
        console.error('공지사항 조회 실패:', error);
        if (isMounted) {
          router.push('/notice');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchNotice();

    return () => {
      isMounted = false;
    };
  }, [params.id, router]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Header />
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ fontSize: '1.2rem', color: '#666' }}>로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!notice) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      
      <section style={{
        padding: '80px 24px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* 뒤로 가기 버튼 */}
        <button
          onClick={() => router.push('/notice')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '24px',
            fontSize: '0.95rem',
            color: '#666',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.borderColor = '#e0e0e0';
          }}
        >
          ← 목록으로
        </button>

        {/* 공지사항 카드 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          {/* 헤더 */}
          <div style={{
            borderBottom: '2px solid #f0f0f0',
            paddingBottom: '24px',
            marginBottom: '32px'
          }}>
            {/* 고정 배지 */}
            {notice.isPinned && (
              <div style={{
                display: 'inline-block',
                backgroundColor: '#ff9800',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                📌 고정 공지
              </div>
            )}

            {/* 제목 */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '20px',
              lineHeight: '1.4',
              wordBreak: 'keep-all'
            }}>
              {notice.title}
            </h1>

            {/* 메타 정보 */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
              color: '#666'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>👤</span>
                <span>{notice.author.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>📅</span>
                <span>{formatDate(notice.createdAt)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>👁️</span>
                <span>조회 {notice.views.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* 본문 */}
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            minHeight: '300px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            {notice.content}
          </div>

          {/* 푸터 */}
          <div style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '2px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{
              fontSize: '0.9rem',
              color: '#999'
            }}>
              최종 수정: {formatDate(notice.updatedAt)}
            </div>

            <button
              onClick={() => router.push('/notice')}
              style={{
                padding: '12px 32px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#5568d3';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

