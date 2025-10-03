import Header from '@/components/Header';

export default function History() {
  const historyData = [
    {
      year: '2025',
      title: 'AI/머신러닝 서비스 런칭',
      description: '고객 맞춤형 AI 솔루션 개발 및 서비스 시작',
      achievements: ['AI 챗봇 플랫폼 출시', '데이터 분석 서비스 확장', '클라우드 AI 인프라 구축']
    },
    {
      year: '2022',
      title: '클라우드 솔루션 전문 기업 인증',
      description: 'AWS, Azure 파트너사 등록 및 클라우드 마이그레이션 서비스 강화',
      achievements: ['AWS Advanced Consulting Partner', 'Azure Gold Partner', '클라우드 보안 인증 획득']
    },
    {
      year: '2020',
      title: '코로나19 대응 디지털 전환 가속화',
      description: '원격근무 솔루션 및 온라인 플랫폼 구축으로 고객 지원',
      achievements: ['원격근무 시스템 구축', '온라인 교육 플랫폼 개발', '비대면 서비스 확대']
    },
    {
      year: '2018',
      title: '모바일 앱 개발 전문성 확보',
      description: 'iOS, Android 네이티브 앱 개발 역량 강화 및 하이브리드 앱 솔루션 제공',
      achievements: ['모바일 앱 개발팀 신설', 'React Native 전문성 확보', '앱스토어 출시 50개 앱 달성']
    },
    {
      year: '2016',
      title: '시스템 통합 전문 기업으로 성장',
      description: '대기업 ERP, CRM 시스템 구축 및 통합 프로젝트 수행',
      achievements: ['대기업 시스템 통합 프로젝트 100개 달성', 'ERP 전문 인력 확보', '시스템 통합 인증 획득']
    },
    {
      year: '2014',
      title: 'W 설립',
      description: '웹 개발 전문 기업으로 출발, 중소기업 웹사이트 구축 서비스 시작',
      achievements: ['회사 설립', '웹 개발팀 구성', '첫 고객사 프로젝트 완료']
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 페이지 헤더 */}
      <section style={{
        padding: '80px 0 60px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px'
          }}>
            연혁
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            W의 성장과 혁신의 발자취를 소개합니다
          </p>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* 중앙 라인 */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }}></div>

            {historyData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '80px',
                position: 'relative'
              }}>
                {/* 연도 표시 */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  border: '4px solid white'
                }}>
                  <span style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    {item.year}
                  </span>
                </div>

                {/* 내용 카드 */}
                <div style={{
                  width: '45%',
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  marginLeft: index % 2 === 0 ? 'auto' : '0',
                  marginRight: index % 2 === 0 ? '0' : 'auto'
                }}>
                  {/* 화살표 */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    width: '0',
                    height: '0',
                    borderTop: '15px solid transparent',
                    borderBottom: '15px solid transparent',
                    transform: 'translateY(-50%)',
                    ...(index % 2 === 0 
                      ? { right: '-15px', borderLeft: '15px solid white' }
                      : { left: '-15px', borderRight: '15px solid white' }
                    )
                  }}></div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '12px'
                  }}>
                    {item.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '16px',
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {item.description}
                  </p>

                  <div>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#2d3748',
                      marginBottom: '12px'
                    }}>
                      주요 성과
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} style={{
                          fontSize: '14px',
                          color: '#4a5568',
                          marginBottom: '8px',
                          paddingLeft: '20px',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '8px',
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#667eea',
                            borderRadius: '50%'
                          }}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section style={{
        padding: '80px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1a202c',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            10년간의 성과
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '12px'
              }}>
                500+
              </div>
              <div style={{
                fontSize: '18px',
                color: '#4a5568',
                fontWeight: '500'
              }}>
                완료된 프로젝트
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '12px'
              }}>
                100+
              </div>
              <div style={{
                fontSize: '18px',
                color: '#4a5568',
                fontWeight: '500'
              }}>
                만족한 고객
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '12px'
              }}>
                10년
              </div>
              <div style={{
                fontSize: '18px',
                color: '#4a5568',
                fontWeight: '500'
              }}>
                축적된 경험
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '12px'
              }}>
                24/7
              </div>
              <div style={{
                fontSize: '18px',
                color: '#4a5568',
                fontWeight: '500'
              }}>
                기술 지원
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 미래 비전 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '24px'
          }}>
            미래 비전
          </h2>
          <p style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            앞으로도 최신 기술 트렌드를 선도하며, 고객의 성공을 위한 
            혁신적인 IT 솔루션을 제공하겠습니다.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '500'
            }}>
              🚀 AI 기술 선도
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '500'
            }}>
              ☁️ 클라우드 네이티브
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '500'
            }}>
              🔒 보안 강화
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '500'
            }}>
              🌍 글로벌 진출
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}