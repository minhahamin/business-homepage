'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Notice.module.css';
import Header from '@/components/Header';

interface Notice {
  id: string;
  title: string;
  content: string;
  views: number;
  isPinned: boolean;
  createdAt: string;
  author: {
    name: string;
  };
}

export default function Notice() {
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNotices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`/api/notices?page=${page}&limit=10`);
      const result = await response.json();

      if (response.ok) {
        setNotices(result.notices);
        setTotalPages(result.pagination.totalPages);
      }
    } catch (error) {
      console.error('공지사항 조회 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '-').replace('.', '');
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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 공지사항 섹션 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* 페이지 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              공지사항
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              회사의 주요 소식과 업데이트 정보를 확인하실 수 있습니다.
            </p>
          </div>

          {/* 통계 카드 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '8px'
              }}>
                {notices.length}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                전체 공지사항
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#f5576c',
                marginBottom: '8px'
              }}>
                {notices.filter(n => n.isPinned).length}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                고정 공지사항
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#43e97b',
                marginBottom: '8px'
              }}>
                {notices.length > 0 ? Math.round(notices.reduce((sum, n) => sum + n.views, 0) / notices.length) : 0}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                평균 조회수
              </div>
            </div>
          </div>

          {/* 공지사항 테이블 */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}>
            {/* 테이블 헤더 - 데스크톱만 */}
            <div className={styles.tableHeader}>
              <div style={{ textAlign: 'center' }}>번호</div>
              <div>제목</div>
              <div style={{ textAlign: 'center' }}>작성자</div>
              <div style={{ textAlign: 'center' }}>등록일</div>
              <div style={{ textAlign: 'center' }}>조회수</div>
            </div>

            {/* 데스크톱 테이블 내용 */}
            <div className={styles.desktopTable}>
              {notices.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#999'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                  <div>등록된 공지사항이 없습니다.</div>
                </div>
              ) : (
                notices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className={styles.tableRow}
                    onClick={() => router.push(`/notice/${notice.id}`)}
                    style={{
                      borderBottom: index < notices.length - 1 ? '1px solid #f1f5f9' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {/* 번호 */}
                    <div className={styles.number}>
                      {index + 1 + (page - 1) * 10}
                    </div>

                    {/* 제목 */}
                    <div className={styles.titleContainer}>
                      {notice.isPinned && (
                        <span className={styles.importantTag}>
                          📌 고정
                        </span>
                      )}
                      <span className={`${styles.titleText} ${notice.isPinned ? styles.important : ''}`}>
                        {notice.title}
                      </span>
                    </div>

                    {/* 작성자 */}
                    <div className={styles.categoryContainer}>
                      <span>{notice.author.name}</span>
                    </div>

                    {/* 등록일 */}
                    <div className={styles.date}>
                      {formatDate(notice.createdAt)}
                    </div>

                    {/* 조회수 */}
                    <div className={styles.views}>
                      {notice.views.toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* 모바일 카드 레이아웃 */}
            <div className={styles.mobileCards}>
              {notices.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#999'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
                  <div>등록된 공지사항이 없습니다.</div>
                </div>
              ) : (
                notices.map((notice, index) => (
                  <div
                    key={`mobile-${notice.id}`}
                    className={styles.mobileCard}
                    onClick={() => router.push(`/notice/${notice.id}`)}
                    style={{
                      borderBottom: index < notices.length - 1 ? '1px solid #f1f5f9' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {/* 제목과 고정 표시 */}
                    <div className={styles.mobileTitleContainer}>
                      {notice.isPinned && (
                        <span className={styles.importantTag}>
                          📌 고정
                        </span>
                      )}
                      <h3 className={`${styles.mobileTitleText} ${notice.isPinned ? styles.important : ''}`}>
                        {notice.title}
                      </h3>
                    </div>

                    {/* 메타 정보 */}
                    <div className={styles.metaInfo}>
                      <span>{notice.author.name}</span>
                      <span>{formatDate(notice.createdAt)}</span>
                      <span>조회 {notice.views.toLocaleString()}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '40px'
            }}>
              <button 
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                style={{
                  padding: '8px 12px',
                  backgroundColor: page === 1 ? '#f3f4f6' : '#e5e7eb',
                  color: page === 1 ? '#d1d5db' : '#6b7280',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                이전
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: pageNum === page ? '#667eea' : '#f3f4f6',
                    color: pageNum === page ? 'white' : '#374151',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: pageNum === page ? 'bold' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {pageNum}
                </button>
              ))}
              
              <button 
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                style={{
                  padding: '8px 12px',
                  backgroundColor: page === totalPages ? '#f3f4f6' : '#e5e7eb',
                  color: page === totalPages ? '#d1d5db' : '#6b7280',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                다음
              </button>
            </div>
          )}

          {/* 관리자 로그인 링크 */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center',
            paddingBottom: '40px'
          }}>
            <Link href="/admin/login">
              <span style={{
                fontSize: '0.75rem',
                color: '#999',
                textDecoration: 'none',
                opacity: 0.6,
                transition: 'opacity 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'}
              >
                🔐 관리자
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
