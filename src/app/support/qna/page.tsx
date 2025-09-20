'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function QnA() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Q&A 데이터
  const qnaData = [
    {
      id: 1,
      category: '서비스 이용',
      question: '웹사이트 개발 서비스는 어떤 과정으로 진행되나요?',
      answer: '웹사이트 개발은 다음과 같은 단계로 진행됩니다:\n\n1. 요구사항 분석 및 기획\n2. UI/UX 디자인\n3. 프론트엔드 개발\n4. 백엔드 개발\n5. 데이터베이스 구축\n6. 테스트 및 검수\n7. 배포 및 런칭\n8. 유지보수 및 지원\n\n전체 개발 기간은 프로젝트 규모에 따라 2-6개월 정도 소요됩니다.',
      date: '2024-12-10',
      views: 245
    },
    {
      id: 2,
      category: '견적 문의',
      question: '모바일 앱 개발 비용은 얼마 정도인가요?',
      answer: '모바일 앱 개발 비용은 다음과 같은 요소에 따라 달라집니다:\n\n• 앱의 복잡도와 기능 수\n• 플랫폼 (iOS, Android, 크로스플랫폼)\n• 디자인 수준\n• 개발 기간\n• 유지보수 포함 여부\n\n기본적인 비즈니스 앱: 500만원 ~ 1,500만원\n중간 수준의 앱: 1,500만원 ~ 3,000만원\n고급 기능의 앱: 3,000만원 ~ 5,000만원 이상\n\n정확한 견적은 상담을 통해 제공해드립니다.',
      date: '2024-12-08',
      views: 189
    },
    {
      id: 3,
      category: '기술 지원',
      question: '기존 시스템과의 연동이 가능한가요?',
      answer: '네, 기존 시스템과의 연동이 가능합니다. 다음과 같은 연동 방식을 지원합니다:\n\n• API 연동 (REST API, GraphQL)\n• 데이터베이스 연동 (MySQL, PostgreSQL, MongoDB 등)\n• 클라우드 서비스 연동 (AWS, Azure, GCP)\n• 기존 ERP, CRM 시스템 연동\n• 결제 시스템 연동\n• 소셜 로그인 연동\n\n연동 작업 전 기존 시스템의 구조와 요구사항을 분석하여 최적의 연동 방식을 제안해드립니다.',
      date: '2024-12-05',
      views: 156
    },
    {
      id: 4,
      category: '서비스 이용',
      question: '개발 완료 후 유지보수는 어떻게 진행되나요?',
      answer: '개발 완료 후 유지보수는 다음과 같이 진행됩니다:\n\n• 버그 수정 및 오류 해결\n• 기능 개선 및 업데이트\n• 보안 업데이트\n• 서버 모니터링\n• 백업 관리\n• 성능 최적화\n\n유지보수 패키지는 월 10만원부터 시작하며, 프로젝트 규모에 따라 상이합니다. 24시간 모니터링이 필요한 경우 별도 지원 서비스도 제공합니다.',
      date: '2024-12-03',
      views: 134
    },
    {
      id: 5,
      category: '결제 및 계약',
      question: '결제 방식과 계약 조건은 어떻게 되나요?',
      answer: '결제 방식과 계약 조건은 다음과 같습니다:\n\n결제 방식:\n• 계약금: 30% (계약 체결 시)\n• 중도금: 40% (중간 검수 완료 시)\n• 잔금: 30% (최종 납품 시)\n\n계약 조건:\n• 계약 기간: 프로젝트 규모에 따라 협의\n• 지적재산권: 고객 소유\n• 소스코드: 납품 시 제공\n• 보증 기간: 6개월 (버그 수정 무료)\n\n부가세 별도, 현금영수증 및 세금계산서 발행 가능합니다.',
      date: '2024-12-01',
      views: 98
    },
    {
      id: 6,
      category: '기술 지원',
      question: '서버 호스팅과 도메인 등록도 지원하나요?',
      answer: '네, 서버 호스팅과 도메인 등록도 지원합니다.\n\n서버 호스팅:\n• 클라우드 서버 (AWS, Azure, GCP)\n• 전용 서버\n• 가상 서버 (VPS)\n• 공유 호스팅\n\n도메인 서비스:\n• 도메인 등록 및 갱신\n• DNS 관리\n• SSL 인증서 설치\n• 이메일 설정\n\n호스팅 비용은 월 3만원부터 시작하며, 트래픽과 용량에 따라 상이합니다. 도메인 등록 비용은 연 1만원 정도입니다.',
      date: '2024-11-28',
      views: 87
    },
    {
      id: 7,
      category: '서비스 이용',
      question: '개발 과정에서 고객의 피드백은 언제 반영되나요?',
      answer: '개발 과정에서 고객의 피드백은 다음과 같이 반영됩니다:\n\n• 주간 진행 상황 보고 (매주 금요일)\n• 중간 검수 단계에서 피드백 수집\n• 실시간 소통 채널 (카카오톡, 슬랙 등)\n• 화상 회의를 통한 직접 소통\n• 테스트 버전 제공 및 검토\n\n중대한 변경사항이 아닌 이상 피드백은 즉시 반영되며, 큰 변경사항은 일정 조정을 통해 협의하여 진행합니다.',
      date: '2024-11-25',
      views: 76
    },
    {
      id: 8,
      category: '기술 지원',
      question: '사용자 교육과 매뉴얼 제공은 포함되나요?',
      answer: '네, 사용자 교육과 매뉴얼 제공이 포함됩니다.\n\n제공되는 자료:\n• 관리자 매뉴얼 (PDF, 동영상)\n• 사용자 가이드\n• FAQ 문서\n• 기술 문서\n\n교육 서비스:\n• 관리자 교육 (2-4시간)\n• 사용자 교육 (1-2시간)\n• 원격 지원을 통한 실시간 교육\n• 교육용 동영상 제작\n\n교육은 납품 후 2주 이내에 진행되며, 추가 교육이 필요한 경우 별도 비용으로 제공합니다.',
      date: '2024-11-22',
      views: 65
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      '서비스 이용': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      '견적 문의': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      '기술 지원': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      '결제 및 계약': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };
    return colors[category] || colors['기술 지원'];
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* Q&A 섹션 */}
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
              Q&A
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              자주 묻는 질문과 답변을 확인하시고, 추가 문의사항이 있으시면 언제든 연락주세요.
            </p>
          </div>

          {/* 검색 및 필터 */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'end'
            }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  검색어
                </label>
                <input
                  type="text"
                  placeholder="질문을 검색하세요"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                />
              </div>
              
              <div style={{ minWidth: '150px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  카테고리
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}>
                  <option value="">전체</option>
                  <option value="서비스 이용">서비스 이용</option>
                  <option value="견적 문의">견적 문의</option>
                  <option value="기술 지원">기술 지원</option>
                  <option value="결제 및 계약">결제 및 계약</option>
                </select>
              </div>
              
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                height: 'fit-content'
              }}>
                검색
              </button>
            </div>
          </div>

          {/* Q&A 목록 */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}>
            {qnaData.map((item, index) => (
              <div key={item.id}>
                {/* 질문 */}
                <div
                  style={{
                    padding: '24px 30px',
                    borderBottom: index < qnaData.length - 1 ? '1px solid #f1f5f9' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => toggleExpanded(item.id)}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = '#f8fafc';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px'
                  }}>
                    <div style={{ flex: '1' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '8px'
                      }}>
                        <span style={{
                          background: getCategoryColor(item.category),
                          color: 'white',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          padding: '4px 8px',
                          borderRadius: '6px'
                        }}>
                          {item.category}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          {item.date}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          조회 {item.views}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        lineHeight: '1.5'
                      }}>
                        Q. {item.question}
                      </h3>
                    </div>
                    
                    <div style={{
                      fontSize: '20px',
                      color: '#6b7280',
                      transition: 'transform 0.2s ease',
                      transform: expandedItems.includes(item.id) ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* 답변 */}
                {expandedItems.includes(item.id) && (
                  <div style={{
                    padding: '0 30px 24px 30px',
                    backgroundColor: '#f8fafc',
                    borderBottom: index < qnaData.length - 1 ? '1px solid #e2e8f0' : 'none'
                  }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#374151',
                      lineHeight: '1.7',
                      whiteSpace: 'pre-line'
                    }}>
                      A. {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 문의하기 섹션 */}
          <div style={{
            marginTop: '60px',
            padding: '40px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '16px'
            }}>
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#4a5568',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              추가 문의사항이 있으시면 언제든지 연락주세요.<br />
              전문 상담사가 신속하게 답변해드립니다.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                📞 전화 문의 (02-1234-5678)
              </button>
              
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#43e97b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                ✉️ 이메일 문의
              </button>
              
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#f093fb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                📝 견적 문의하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
