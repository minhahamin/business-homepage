'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function KakaoCallbackContent() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [isGettingToken, setIsGettingToken] = useState(false);

  useEffect(() => {
    const authCode = searchParams.get('code');
    if (authCode) {
      setCode(authCode);
    }
  }, [searchParams]);

  const getAccessToken = async () => {
    if (!code) return;
    
    setIsGettingToken(true);
    try {
      const response = await fetch('/api/kakao/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();
      
      if (result.success) {
        setAccessToken(result.access_token);
      } else {
        alert('토큰 발급 실패: ' + result.message);
      }
    } catch (error) {
      alert('토큰 발급 중 오류 발생');
      console.error(error);
    } finally {
      setIsGettingToken(false);
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
        maxWidth: '700px',
        width: '100%',
        padding: '48px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📱</div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '12px'
          }}>
            카카오톡 연동 성공!
          </h1>
          <p style={{ color: '#666', fontSize: '0.95rem' }}>
            아래 인증 코드와 Access Token을 .env 파일에 설정하세요
          </p>
        </div>

        {/* 인증 코드 */}
        {code && (
          <div style={{
            marginBottom: '24px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            border: '2px solid #e0e0e0'
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '8px'
            }}>
              1️⃣ 인증 코드 (Authorization Code):
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              wordBreak: 'break-all',
              color: '#333'
            }}>
              {code}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(code);
                alert('클립보드에 복사되었습니다!');
              }}
              style={{
                marginTop: '12px',
                padding: '8px 16px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              📋 코드 복사
            </button>
          </div>
        )}

        {/* Access Token 발급 버튼 */}
        {code && !accessToken && (
          <div style={{
            marginBottom: '24px',
            padding: '20px',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            border: '2px solid #ffc107'
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#856404',
              marginBottom: '12px'
            }}>
              2️⃣ Access Token 발급:
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: '#856404',
              marginBottom: '12px',
              lineHeight: '1.6'
            }}>
              아래 버튼을 클릭하여 Access Token을 자동으로 발급받으세요.
            </p>
            <button
              onClick={getAccessToken}
              disabled={isGettingToken}
              style={{
                padding: '12px 24px',
                backgroundColor: isGettingToken ? '#ccc' : '#ffc107',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '8px',
                cursor: isGettingToken ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {isGettingToken ? '발급 중...' : '🔑 Access Token 발급받기'}
            </button>
          </div>
        )}

        {/* Access Token */}
        {accessToken && (
          <div style={{
            marginBottom: '24px',
            padding: '20px',
            backgroundColor: '#e8f5e9',
            borderRadius: '8px',
            border: '2px solid #4caf50'
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#2e7d32',
              marginBottom: '8px'
            }}>
              ✅ Access Token (이걸 .env에 추가하세요!):
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              wordBreak: 'break-all',
              color: '#333',
              marginBottom: '12px'
            }}>
              {accessToken}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(accessToken);
                alert('Access Token이 클립보드에 복사되었습니다!');
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                marginRight: '8px'
              }}
            >
              📋 토큰 복사
            </button>
          </div>
        )}

        {/* 설정 방법 */}
        <div style={{
          padding: '20px',
          backgroundColor: '#e8ebff',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#667eea',
            marginBottom: '12px'
          }}>
            3️⃣ .env 파일에 추가하기:
          </div>
          <pre style={{
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '6px',
            fontSize: '0.85rem',
            overflow: 'auto',
            margin: 0
          }}>
{`# 카카오톡 나에게 보내기
KAKAO_ACCESS_TOKEN=${accessToken || 'your_access_token_here'}`}
          </pre>
          <p style={{
            fontSize: '0.85rem',
            color: '#667eea',
            marginTop: '12px',
            marginBottom: 0
          }}>
            💡 .env 파일은 프로젝트 루트에 있습니다.
          </p>
        </div>

        {/* 다음 단계 */}
        <div style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '12px'
          }}>
            4️⃣ 다음 단계:
          </div>
          <ol style={{
            fontSize: '0.85rem',
            color: '#666',
            lineHeight: '1.8',
            paddingLeft: '20px',
            margin: 0
          }}>
            <li>위의 Access Token을 복사</li>
            <li>.env 파일에 <code>KAKAO_ACCESS_TOKEN</code> 추가</li>
            <li>개발 서버 재시작 (<code>npm run dev</code>)</li>
            <li>무료 상담 신청 폼 테스트</li>
            <li>내 카카오톡 확인! 📱</li>
          </ol>
        </div>

        {/* 주의사항 */}
        <div style={{
          padding: '16px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          fontSize: '0.85rem',
          color: '#856404',
          lineHeight: '1.6',
          marginBottom: '24px'
        }}>
          ⚠️ <strong>주의:</strong> Access Token은 2개월 후 만료됩니다. 만료되면 이 과정을 다시 진행하세요.
        </div>

        {/* 홈으로 */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/">
            <button style={{
              padding: '12px 32px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function KakaoCallback() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ color: 'white', fontSize: '1.5rem' }}>로딩 중...</div>
      </div>
    }>
      <KakaoCallbackContent />
    </Suspense>
  );
}

