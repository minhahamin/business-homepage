'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '로그인에 실패했습니다.');
      }

      // 로그인 성공 - 관리자 대시보드로 이동
      router.push('/admin');
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : '로그인에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '24px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        maxWidth: '450px',
        width: '100%',
        padding: '48px'
      }}>
        {/* 로고 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '2.5rem'
          }}>
            🔐
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>
            관리자 로그인
          </h1>
          <p style={{
            color: '#666',
            fontSize: '0.95rem'
          }}>
            관리자 계정으로 로그인하세요
          </p>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div style={{
            padding: '16px',
            backgroundColor: '#ffebee',
            borderRadius: '8px',
            marginBottom: '24px',
            color: '#c62828',
            fontSize: '0.9rem',
            border: '1px solid #ef5350'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.95rem'
            }}>
              아이디
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              placeholder="관리자 아이디를 입력하세요"
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* 비밀번호 */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.95rem'
            }}>
              비밀번호
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="비밀번호를 입력하세요"
              style={{
                width: '100%',
                padding: '14px 16px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: isLoading ? '#ccc' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#5568d3';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }
            }}
          >
            {isLoading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        {/* 홈으로 돌아가기 */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center'
        }}>
          <button
            onClick={() => router.push('/')}
            style={{
              color: '#667eea',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem',
              textDecoration: 'underline'
            }}
          >
            ← 홈으로 돌아가기
          </button>
        </div>

        {/* 안내 문구 */}
        <div style={{
          marginTop: '32px',
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '0.85rem',
          color: '#666',
          lineHeight: '1.6'
        }}>
          <strong>💡 데모 계정:</strong><br />
          아이디: admin<br />
          비밀번호: admin123
          <div style={{ marginTop: '8px', fontSize: '0.8rem', color: '#999' }}>
            (실제 사용 전에 PostgreSQL 데이터베이스를 설정하고 관리자 계정을 생성하세요)
          </div>
        </div>
      </div>
    </div>
  );
}

