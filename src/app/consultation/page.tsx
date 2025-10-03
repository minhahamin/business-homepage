'use client';

import Header from '@/components/Header';
import { useState } from 'react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // API 호출
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '상담 신청에 실패했습니다.');
      }

      console.log('✅ 상담 신청 성공:', result);
      console.log('📱 카카오톡 알림:', result.notifications?.kakao);
      console.log('📧 이메일 알림:', result.notifications?.email);

      setIsSubmitted(true);

      // 5초 후 폼 리셋
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 5000);

    } catch (error) {
      console.error('❌ 상담 신청 실패:', error);
      setErrorMessage(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            무료 상담 신청
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '16px',
            lineHeight: '1.6'
          }}>
            프로젝트에 대한 고민이 있으신가요?<br />
            전문가와 무료로 상담하고 최적의 솔루션을 찾아보세요
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 215, 0, 0.2)',
            padding: '12px 24px',
            borderRadius: '30px',
            marginTop: '20px'
          }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>24시간 내 빠른 답변</span>
          </div>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <section style={{
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* 왼쪽: 상담 프로세스 안내 */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: '#1a1a1a'
            }}>
              상담 진행 프로세스
            </h2>

            {[
              {
                icon: '📝',
                title: '1. 상담 신청',
                description: '간단한 정보만 입력하시면 신청 완료!'
              },
              {
                icon: '📞',
                title: '2. 전문가 배정',
                description: '프로젝트에 최적화된 전문가가 배정됩니다'
              },
              {
                icon: '💡',
                title: '3. 상담 진행',
                description: '전화/화상/대면 중 편한 방식으로 상담'
              },
              {
                icon: '📊',
                title: '4. 제안서 제공',
                description: '맞춤 솔루션과 견적서를 제공합니다'
              }
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '24px',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ fontSize: '2.5rem' }}>{step.icon}</div>
                <div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#667eea'
                  }}>
                    {step.title}
                  </div>
                  <div style={{ color: '#666', fontSize: '0.95rem' }}>
                    {step.description}
                  </div>
                </div>
              </div>
            ))}

            {/* 추가 정보 박스 */}
            <div style={{
              backgroundColor: '#e8ebff',
              padding: '24px',
              borderRadius: '12px',
              marginTop: '32px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#667eea'
              }}>
                💬 상담 가능 시간
              </h3>
              <div style={{ color: '#333', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <div>• 평일: 09:00 - 18:00</div>
                <div>• 주말: 10:00 - 16:00</div>
                <div style={{ marginTop: '12px', fontWeight: '600' }}>
                  ⚡ 긴급 문의: 24시간 이메일 접수 가능
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fff3cd',
              padding: '24px',
              borderRadius: '12px',
              marginTop: '20px'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#856404'
              }}>
                🎁 특별 혜택
              </h3>
              <div style={{ color: '#333', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <div>• 첫 상담 고객: 견적 10% 할인</div>
                <div>• 장기 계약: 유지보수 3개월 무료</div>
                <div>• 추천 고객: 양측 모두 5% 할인</div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 상담 신청 폼 */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: '100px',
            height: 'fit-content'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#1a1a1a'
            }}>
              상담 신청서
            </h2>
            <p style={{
              color: '#666',
              marginBottom: '32px',
              fontSize: '0.95rem'
            }}>
              * 표시는 필수 입력 항목입니다
            </p>

            {isSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#667eea',
                  marginBottom: '12px'
                }}>
                  상담 신청이 완료되었습니다!
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  24시간 내에 담당자가 연락드리겠습니다.<br />
                  감사합니다.
                </p>
                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  backgroundColor: '#e8f5e9',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#2e7d32'
                }}>
                  📱 카카오톡 알림이 관리자에게 전송되었습니다.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* 에러 메시지 표시 */}
                {errorMessage && (
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#ffebee',
                    borderRadius: '8px',
                    marginBottom: '24px',
                    color: '#c62828',
                    fontSize: '0.95rem',
                    border: '1px solid #ef5350'
                  }}>
                    ⚠️ {errorMessage}
                  </div>
                )}
                {/* 이름 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
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

                {/* 회사명 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="(주)회사명"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
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

                {/* 이메일 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
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

                {/* 전화번호 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-1234-5678"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
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

                {/* 관심 서비스 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    관심 서비스 *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  >
                    <option value="">선택해주세요</option>
                    <option value="web-app">웹 개발 & 앱 개발</option>
                    <option value="system">시스템 통합 & 구축</option>
                    <option value="cloud">클라우드 솔루션</option>
                    <option value="ai">AI/머신러닝 서비스</option>
                    <option value="marketing">디지털 마케팅</option>
                    <option value="consulting">IT 컨설팅</option>
                    <option value="maintenance">유지보수 & 지원</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                {/* 예산 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    예상 예산
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  >
                    <option value="">선택해주세요</option>
                    <option value="under-500">500만원 미만</option>
                    <option value="500-1000">500만원 - 1000만원</option>
                    <option value="1000-3000">1000만원 - 3000만원</option>
                    <option value="3000-5000">3000만원 - 5000만원</option>
                    <option value="over-5000">5000만원 이상</option>
                    <option value="negotiable">협의 후 결정</option>
                  </select>
                </div>

                {/* 희망 일정 */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    프로젝트 희망 일정
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  >
                    <option value="">선택해주세요</option>
                    <option value="urgent">긴급 (1개월 이내)</option>
                    <option value="1-3">1-3개월</option>
                    <option value="3-6">3-6개월</option>
                    <option value="6+">6개월 이상</option>
                    <option value="flexible">유연하게 조정 가능</option>
                  </select>
                </div>

                {/* 상세 내용 */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '0.95rem'
                  }}>
                    프로젝트 상세 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="프로젝트에 대해 자세히 설명해주세요&#10;(예: 목적, 주요 기능, 참고 사이트 등)"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  />
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: isSubmitting ? '#ccc' : '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#5568d3';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#667eea';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '16px',
                        border: '2px solid white',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }}></span>
                      전송 중...
                    </span>
                  ) : (
                    '무료 상담 신청하기'
                  )}
                </button>

                {/* 스피너 애니메이션 */}
                <style jsx>{`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                `}</style>

                <p style={{
                  marginTop: '16px',
                  fontSize: '0.85rem',
                  color: '#999',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  제출하시면 개인정보 처리방침에 동의하는 것으로 간주됩니다.<br />
                  수집된 정보는 상담 목적으로만 사용됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#1a1a1a'
          }}>
            자주 묻는 질문
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                question: '상담 비용이 정말 무료인가요?',
                answer: '네, 첫 상담은 완전 무료입니다. 프로젝트 범위와 견적을 확인한 후 진행 여부를 결정하실 수 있습니다.'
              },
              {
                question: '상담 후 계약은 필수인가요?',
                answer: '아니요, 상담만 받으셔도 됩니다. 제안서를 검토하신 후 신중히 결정하시면 됩니다.'
              },
              {
                question: '작은 프로젝트도 가능한가요?',
                answer: '물론입니다! 프로젝트 규모와 관계없이 모든 상담을 환영합니다.'
              },
              {
                question: '얼마나 빨리 답변 받을 수 있나요?',
                answer: '영업일 기준 24시간 이내에 연락드립니다. 긴급한 경우 전화로 직접 연락주시면 즉시 상담 가능합니다.'
              },
              {
                question: '비대면 상담도 가능한가요?',
                answer: '네, 전화, 화상회의, 이메일 등 편하신 방법으로 상담 가능합니다.'
              },
              {
                question: '견적은 언제 받을 수 있나요?',
                answer: '상담 후 프로젝트 내용이 확정되면 3-5일 내로 상세한 견적서를 제공해드립니다.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  borderLeft: '4px solid #667eea'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#667eea'
                }}>
                  Q. {faq.question}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 정보 섹션 */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '32px'
          }}>
            바로 문의하고 싶으신가요?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '24px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📞</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>전화</div>
              <div style={{ color: 'white', fontWeight: 'bold' }}>02-1234-5678</div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '24px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📧</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>이메일</div>
              <div style={{ color: 'white', fontWeight: 'bold' }}>contact@company.com</div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '24px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💬</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>카카오톡</div>
              <div style={{ color: 'white', fontWeight: 'bold' }}>@company_official</div>
            </div>
          </div>

          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.1rem'
          }}>
            평일 09:00 - 18:00 | 주말 10:00 - 16:00
          </p>
        </div>
      </section>
    </div>
  );
}

