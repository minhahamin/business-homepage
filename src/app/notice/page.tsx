'use client';

import Header from '@/components/Header';

export default function Notice() {
  // 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: '2024년 4분기 시스템 점검 안내',
      category: '시스템',
      date: '2024-12-15',
      views: 1250,
      isImportant: true
    },
    {
      id: 2,
      title: '신규 서비스 출시 및 이용 안내',
      category: '서비스',
      date: '2024-12-10',
      views: 890,
      isImportant: true
    },
    {
      id: 3,
      title: '연말연시 고객지원센터 운영시간 변경 안내',
      category: '운영',
      date: '2024-12-08',
      views: 650,
      isImportant: false
    },
    {
      id: 4,
      title: '개인정보처리방침 개정 안내',
      category: '정책',
      date: '2024-12-05',
      views: 420,
      isImportant: false
    },
    {
      id: 5,
      title: '2024년 3분기 실적 발표 및 사업 계획',
      category: '사업',
      date: '2024-12-01',
      views: 780,
      isImportant: false
    },
    {
      id: 6,
      title: '보안 업데이트 및 권장사항 안내',
      category: '보안',
      date: '2024-11-28',
      views: 920,
      isImportant: true
    },
    {
      id: 7,
      title: '고객 만족도 설문조사 결과 공개',
      category: '고객',
      date: '2024-11-25',
      views: 350,
      isImportant: false
    },
    {
      id: 8,
      title: 'API 서비스 이용약관 개정 안내',
      category: '정책',
      date: '2024-11-20',
      views: 580,
      isImportant: false
    },
    {
      id: 9,
      title: '모바일 앱 업데이트 버전 2.1.0 출시',
      category: '서비스',
      date: '2024-11-15',
      views: 1100,
      isImportant: false
    },
    {
      id: 10,
      title: '서버 이전 작업으로 인한 서비스 일시 중단 안내',
      category: '시스템',
      date: '2024-11-10',
      views: 750,
      isImportant: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      '시스템': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      '서비스': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      '운영': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      '정책': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      '사업': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      '보안': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      '고객': 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
    };
    return colors[category] || colors['운영'];
  };

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
                {notices.filter(n => n.isImportant).length}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                중요 공지사항
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
                {Math.round(notices.reduce((sum, n) => sum + n.views, 0) / notices.length)}
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
            {/* 테이블 헤더 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 100px 120px 80px',
              gap: '20px',
              padding: '20px 30px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#374151'
            }}>
              <div style={{ textAlign: 'center' }}>번호</div>
              <div>제목</div>
              <div style={{ textAlign: 'center' }}>분류</div>
              <div style={{ textAlign: 'center' }}>등록일</div>
              <div style={{ textAlign: 'center' }}>조회수</div>
            </div>

            {/* 테이블 내용 */}
            <div>
              {notices.map((notice, index) => (
                <div
                  key={notice.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 100px 120px 80px',
                    gap: '20px',
                    padding: '20px 30px',
                    borderBottom: index < notices.length - 1 ? '1px solid #f1f5f9' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = '#f8fafc';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = 'transparent';
                  }}
                >
                  {/* 번호 */}
                  <div style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {notice.id}
                  </div>

                  {/* 제목 */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {notice.isImportant && (
                      <span style={{
                        backgroundColor: '#f5576c',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        중요
                      </span>
                    )}
                    <span style={{
                      fontSize: '14px',
                      color: '#1f2937',
                      fontWeight: notice.isImportant ? 'bold' : 'normal'
                    }}>
                      {notice.title}
                    </span>
                  </div>

                  {/* 분류 */}
                  <div style={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      background: getCategoryColor(notice.category),
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      padding: '4px 8px',
                      borderRadius: '6px'
                    }}>
                      {notice.category}
                    </span>
                  </div>

                  {/* 등록일 */}
                  <div style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {notice.date}
                  </div>

                  {/* 조회수 */}
                  <div style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {notice.views.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 페이지네이션 */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '40px'
          }}>
            <button style={{
              padding: '8px 12px',
              backgroundColor: '#e5e7eb',
              color: '#6b7280',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              이전
            </button>
            
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                style={{
                  padding: '8px 12px',
                  backgroundColor: page === 1 ? '#667eea' : '#f3f4f6',
                  color: page === 1 ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: page === 1 ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {page}
              </button>
            ))}
            
            <button style={{
              padding: '8px 12px',
              backgroundColor: '#e5e7eb',
              color: '#6b7280',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              다음
            </button>
          </div>

          {/* 검색 및 필터 */}
          <div style={{
            marginTop: '40px',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '20px'
            }}>
              검색 및 필터
            </h3>
            
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
                  placeholder="제목 또는 내용을 입력하세요"
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
                  분류
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
                  <option value="시스템">시스템</option>
                  <option value="서비스">서비스</option>
                  <option value="운영">운영</option>
                  <option value="정책">정책</option>
                  <option value="사업">사업</option>
                  <option value="보안">보안</option>
                  <option value="고객">고객</option>
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
        </div>
      </section>
    </div>
  );
}
