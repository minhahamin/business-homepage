'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Admin {
  id: string;
  username: string;
  email: string;
  name: string;
}

interface Notice {
  id: string;
  title: string;
  content: string;
  views: number;
  isPinned: boolean;
  isPublished: boolean;
  createdAt: string;
  author: {
    name: string;
    username: string;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAdminInfo();
    fetchNotices();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const response = await fetch('/api/admin/me');
      const result = await response.json();

      if (!response.ok) {
        router.push('/admin/login');
        return;
      }

      setAdmin(result.admin);
    } catch (error) {
      console.error('관리자 정보 조회 실패:', error);
      router.push('/admin/login');
    }
  };

  const fetchNotices = async () => {
    try {
      const response = await fetch('/api/admin/notices');
      const result = await response.json();

      if (response.ok) {
        setNotices(result.notices);
      }
    } catch (error) {
      console.error('공지사항 조회 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 이 공지사항을 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/notices/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('공지사항이 삭제되었습니다.');
        fetchNotices();
      }
    } catch (error) {
      console.error('공지사항 삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ fontSize: '1.2rem', color: '#666' }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* 헤더 */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#667eea'
            }}>
              🔐 관리자 대시보드
            </h1>
            {admin && (
              <span style={{ color: '#666', fontSize: '0.95rem' }}>
                {admin.name}님 환영합니다
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/">
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#f5f5f5',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}>
                홈으로
              </button>
            </Link>
            <button
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ef5350',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 24px'
      }}>
        {/* 통계 카드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📢</div>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>총 공지사항</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
              {notices.length}개
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>✅</div>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>공개 공지</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4caf50' }}>
              {notices.filter(n => n.isPublished).length}개
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📌</div>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '4px' }}>고정 공지</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9800' }}>
              {notices.filter(n => n.isPinned).length}개
            </div>
          </div>
        </div>

        {/* 공지사항 관리 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1a1a1a'
            }}>
              공지사항 관리
            </h2>
            <Link href="/admin/notices/new">
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}>
                + 새 공지사항 작성
              </button>
            </Link>
          </div>

          {/* 공지사항 테이블 */}
          {notices.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#999'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📭</div>
              <div>아직 작성된 공지사항이 없습니다.</div>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '2px solid #e0e0e0'
                  }}>
                    <th style={{ padding: '12px', textAlign: 'left', color: '#666', fontSize: '0.9rem' }}>상태</th>
                    <th style={{ padding: '12px', textAlign: 'left', color: '#666', fontSize: '0.9rem' }}>제목</th>
                    <th style={{ padding: '12px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>작성자</th>
                    <th style={{ padding: '12px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>조회수</th>
                    <th style={{ padding: '12px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>작성일</th>
                    <th style={{ padding: '12px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice) => (
                    <tr key={notice.id} style={{
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {notice.isPinned && (
                            <span style={{
                              backgroundColor: '#ff9800',
                              color: 'white',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '0.75rem'
                            }}>
                              📌 고정
                            </span>
                          )}
                          <span style={{
                            backgroundColor: notice.isPublished ? '#4caf50' : '#999',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}>
                            {notice.isPublished ? '공개' : '비공개'}
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: '16px', fontWeight: '500' }}>
                        {notice.title}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
                        {notice.author.name}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
                        {notice.views}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                        {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                          <Link href={`/admin/notices/${notice.id}/edit`}>
                            <button style={{
                              padding: '6px 12px',
                              backgroundColor: '#2196f3',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.85rem'
                            }}>
                              수정
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(notice.id)}
                            style={{
                              padding: '6px 12px',
                              backgroundColor: '#f44336',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.85rem'
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

