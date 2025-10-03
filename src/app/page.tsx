import Header from '@/components/Header';
import Link from 'next/link'; 

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 메인 히어로 섹션 */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 패턴 오버레이 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
          zIndex: 1
        }}></div>

        {/* 애니메이션 파티클 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '4px',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '6px',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          zIndex: 2
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '30%',
          width: '3px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          zIndex: 2
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 3,
          position: 'relative'
        }}>
          {/* 왼쪽: 텍스트 영역 */}
          <div style={{ flex: 1, maxWidth: '600px' }}>
            {/* 회사 로고 + 기술 스택 아이콘 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}>W</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['React', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
                  <div key={index} style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'white',
                    fontWeight: '500',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    {tech}
            </div>
                ))}
              </div>
            </div>

            {/* 메인 텍스트 */}
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              lineHeight: '1.1',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              혁신적인 IT 솔루션으로<br />
              <span style={{ 
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                비즈니스를 성장
              </span>시키세요
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              웹 개발부터 AI까지, 모든 기술을 한 곳에서<br />
              <strong>10년 경험 | 500+ 프로젝트 | 24/7 지원</strong>
            </p>

            {/* 통계 숫자 */}
            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '4px' }}>10+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>년 경험</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '4px' }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>프로젝트</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700', marginBottom: '4px' }}>100+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>고객</div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/consultation">
                <button style={{
                  padding: '16px 32px',
                  backgroundColor: '#FFD700',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
                }}>
                  무료 상담 신청
                </button>
              </Link>
              <Link href="/portfolio">
                <button style={{
                  padding: '16px 32px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}>
                  포트폴리오 보기
                </button>
              </Link>
            </div>
          </div>

          {/* 오른쪽: 일러스트 영역 */}
          <div style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
            {/* 코딩하는 사람 실루엣 */}
            <div style={{
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              position: 'relative'
            }}>
              {/* 중앙 아이콘 */}
              <div style={{
                fontSize: '120px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                💻
        </div>
              
              {/* 주변 기술 아이콘들 */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>⚛️</div>
              <div style={{
                position: 'absolute',
                top: '30%',
                right: '15%',
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>🐍</div>
              <div style={{
                position: 'absolute',
                bottom: '25%',
                left: '15%',
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>☁️</div>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>🤖</div>
            </div>

            {/* 서버/클라우드 이미지들 */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: '80px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '24px' }}>🖥️</span>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '5%',
              width: '60px',
              height: '40px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '20px' }}>📱</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
