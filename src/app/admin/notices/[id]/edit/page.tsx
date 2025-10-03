'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface Notice {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  isPublished: boolean;
}

export default function EditNotice() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isPinned: false,
    isPublished: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotice();
  }, []);

  const fetchNotice = async () => {
    try {
      const response = await fetch(`/api/notices/${params.id}`);
      const result = await response.json();

      if (response.ok) {
        setFormData({
          title: result.notice.title,
          content: result.notice.content,
          isPinned: result.notice.isPinned,
          isPublished: result.notice.isPublished,
        });
      }
    } catch (error) {
      console.error('공지사항 조회 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/notices/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '공지사항 수정에 실패했습니다.');
      }

      alert('공지사항이 수정되었습니다.');
      router.push('/admin');
    } catch (error) {
      setError(error instanceof Error ? error.message : '수정에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
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
        <div>로딩 중...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* 헤더 */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#667eea'
          }}>
            공지사항 수정
          </h1>
          <Link href="/admin">
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#f5f5f5',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              ← 대시보드로
            </button>
          </Link>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 24px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          {error && (
            <div style={{
              padding: '16px',
              backgroundColor: '#ffebee',
              borderRadius: '8px',
              marginBottom: '24px',
              color: '#c62828',
              border: '1px solid #ef5350'
            }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* 제목 */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#333',
                fontSize: '1rem'
              }}>
                제목 *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* 내용 */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#333',
                fontSize: '1rem'
              }}>
                내용 *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={15}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* 옵션 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
              padding: '20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={formData.isPinned}
                  onChange={(e) => setFormData({ ...formData, isPinned: e.target.checked })}
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                  📌 상단 고정
                </span>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  style={{
                    width: '20px',
                    height: '20px',
                    cursor: 'pointer'
                  }}
                />
                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                  ✅ 공개
                </span>
              </label>
            </div>

            {/* 버튼 */}
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <Link href="/admin">
                <button
                  type="button"
                  style={{
                    padding: '14px 32px',
                    backgroundColor: '#f5f5f5',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                >
                  취소
                </button>
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px 32px',
                  backgroundColor: isSubmitting ? '#ccc' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? '수정 중...' : '수정 완료'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

