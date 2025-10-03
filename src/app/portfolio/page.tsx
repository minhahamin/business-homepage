'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'web', name: '웹 개발' },
    { id: 'app', name: '앱 개발' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'cloud', name: '클라우드' },
  ];

  const projects = [
    {
      id: 1,
      category: 'web',
      title: '스마트 쇼핑몰 플랫폼',
      client: 'A 커머스',
      description: 'React 기반의 고성능 이커머스 플랫폼 구축. 실시간 재고 관리 및 AI 추천 시스템 통합',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '🛒',
      date: '2024.08',
      results: ['월 거래액 300% 증가', '페이지 로딩 속도 70% 개선', '고객 만족도 95%']
    },
    {
      id: 2,
      category: 'app',
      title: '헬스케어 모바일 앱',
      client: 'B 헬스케어',
      description: 'AI 기반 건강 관리 앱. 실시간 건강 데이터 분석 및 맞춤형 운동 추천',
      tags: ['React Native', 'TensorFlow', 'Firebase'],
      image: '💪',
      date: '2024.07',
      results: ['사용자 10만명 돌파', '일일 활성 사용자 85%', '앱스토어 평점 4.8']
    },
    {
      id: 3,
      category: 'ai',
      title: 'AI 챗봇 시스템',
      client: 'C 금융',
      description: '자연어 처리 기반 고객 상담 챗봇. 24시간 자동 응대 시스템 구축',
      tags: ['Python', 'GPT-4', 'FastAPI', 'Redis'],
      image: '🤖',
      date: '2024.06',
      results: ['상담 처리 시간 80% 단축', '고객 응대율 99%', '운영 비용 60% 절감']
    },
    {
      id: 4,
      category: 'cloud',
      title: '클라우드 인프라 구축',
      client: 'D 스타트업',
      description: 'AWS 기반 마이크로서비스 아키텍처 설계 및 구축. CI/CD 파이프라인 자동화',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      image: '☁️',
      date: '2024.05',
      results: ['배포 시간 90% 단축', '시스템 안정성 99.9%', '인프라 비용 40% 절감']
    },
    {
      id: 5,
      category: 'web',
      title: '기업 ERP 시스템',
      client: 'E 제조',
      description: '생산부터 판매까지 통합 관리하는 전사적 자원관리 시스템',
      tags: ['Vue.js', 'Java Spring', 'PostgreSQL', 'Docker'],
      image: '📊',
      date: '2024.04',
      results: ['업무 효율 200% 향상', '재고 관리 정확도 98%', '매출 가시성 확보']
    },
    {
      id: 6,
      category: 'ai',
      title: '이미지 인식 품질 검사',
      client: 'F 제조',
      description: 'CNN 기반 제품 불량 자동 검사 시스템. 실시간 품질 관리',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
      image: '📸',
      date: '2024.03',
      results: ['불량률 95% 감소', '검사 시간 80% 단축', 'ROI 350%']
    },
    {
      id: 7,
      category: 'app',
      title: '배달 서비스 앱',
      client: 'G 푸드테크',
      description: '실시간 주문 추적 및 라이더 배치 최적화 시스템',
      tags: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '🚀',
      date: '2024.02',
      results: ['배달 시간 30% 단축', '라이더 효율 50% 증가', '주문량 400% 증가']
    },
    {
      id: 8,
      category: 'web',
      title: '온라인 교육 플랫폼',
      client: 'H 에듀테크',
      description: '실시간 화상 강의 및 학습 관리 시스템. 인터랙티브 교육 콘텐츠 제공',
      tags: ['Next.js', 'WebRTC', 'GraphQL', 'PostgreSQL'],
      image: '📚',
      date: '2024.01',
      results: ['수강생 5만명 돌파', '수업 만족도 92%', '완강률 78%']
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header />
      
      {/* 히어로 섹션 */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          zIndex: 1
        }}></div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            프로젝트 포트폴리오
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '16px'
          }}>
            고객과 함께 성장한 성공 사례들
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '40px'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>500+</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>완료 프로젝트</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>100+</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>만족한 고객</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>98%</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>성공률</div>
            </div>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section style={{
        padding: '40px 24px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: '80px',
        zIndex: 10,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '12px 28px',
                backgroundColor: activeCategory === cat.id ? '#667eea' : 'white',
                color: activeCategory === cat.id ? 'white' : '#333',
                border: `2px solid ${activeCategory === cat.id ? '#667eea' : '#e0e0e0'}`,
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
              }}
              onMouseOver={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section style={{
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* 프로젝트 이미지/아이콘 */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                position: 'relative'
              }}>
                {project.image}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#667eea'
                }}>
                  {project.date}
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#f0f0f0',
                  color: '#666',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  marginBottom: '12px'
                }}>
                  {project.client}
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#1a1a1a'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: '#e8ebff',
                        color: '#667eea',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 프로젝트 성과 */}
                <div style={{
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '16px'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    📈 주요 성과
                  </div>
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      style={{
                        fontSize: '0.85rem',
                        color: '#666',
                        marginBottom: '4px',
                        paddingLeft: '12px',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#667eea'
                      }}>•</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트가 없을 때 */}
        {filteredProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            color: '#999'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>
            <div style={{ fontSize: '1.2rem' }}>해당 카테고리의 프로젝트가 없습니다.</div>
          </div>
        )}
      </section>

      {/* CTA 섹션 */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px'
          }}>
            다음 성공 사례의 주인공은 바로 당신입니다
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px'
          }}>
            지금 바로 무료 상담을 신청하고 프로젝트를 시작하세요
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/consultation">
              <button style={{
                padding: '16px 40px',
                backgroundColor: '#FFD700',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 215, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
              }}>
                무료 상담 신청
              </button>
            </Link>
            <Link href="/support/quote">
              <button style={{
                padding: '16px 40px',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}>
                견적 문의
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

