import Header from '@/components/Header';

export default function ITConsulting() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* IT 컨설팅 섹션 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* 페이지 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            color: 'white'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '24px'
            }}>
              💼 IT 컨설팅
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              전문적인 IT 컨설팅으로 비즈니스 전략을 수립하고 
              디지털 혁신을 통해 경쟁 우위를 확보하세요.
            </p>
          </div>

          {/* 서비스 개요 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginBottom: '80px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '24px'
              }}>
                디지털 전환의 파트너
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '32px',
                opacity: '0.9'
              }}>
                업계 전문가들이 제공하는 맞춤형 IT 컨설팅으로 
                비즈니스 목표를 달성하고 성장을 가속화합니다.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  전략 수립
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  기술 도입
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }}>
                  프로세스 개선
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '80px',
                marginBottom: '24px'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>
                맞춤형 솔루션
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'white',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                기업의 특성과 목표에 맞는 
                최적의 IT 전략을 제시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT 컨설팅 서비스 */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a202c',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            IT 컨설팅 서비스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 디지털 전환 전략 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🔄</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    디지털 전환 전략
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    비즈니스 혁신을 위한 로드맵
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                기업의 디지털 전환을 위한 전략적 로드맵을 수립하고 단계별 실행 계획을 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>현재 상태 분석</li>
                <li>목표 설정 및 전략 수립</li>
                <li>기술 스택 선정</li>
                <li>변화 관리 계획</li>
              </ul>
            </div>

            {/* IT 아키텍처 설계 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🏗️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    IT 아키텍처 설계
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    확장 가능한 시스템 설계
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                비즈니스 요구사항에 맞는 확장 가능하고 안정적인 IT 아키텍처를 설계합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>시스템 아키텍처 설계</li>
                <li>기술 스택 선택</li>
                <li>보안 아키텍처</li>
                <li>성능 최적화</li>
              </ul>
            </div>

            {/* 클라우드 전략 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>☁️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    클라우드 전략
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    클라우드 마이그레이션 및 최적화
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                클라우드 도입 전략을 수립하고 기존 시스템의 클라우드 마이그레이션을 지원합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>클라우드 전략 수립</li>
                <li>마이그레이션 계획</li>
                <li>비용 최적화</li>
                <li>보안 및 컴플라이언스</li>
              </ul>
            </div>

            {/* 데이터 전략 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>📊</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    데이터 전략
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    데이터 기반 의사결정 지원
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                데이터를 활용한 비즈니스 인사이트 도출과 데이터 기반 의사결정 체계를 구축합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>데이터 거버넌스</li>
                <li>데이터 웨어하우스 설계</li>
                <li>분석 플랫폼 구축</li>
                <li>데이터 시각화</li>
              </ul>
            </div>

            {/* 보안 컨설팅 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🛡️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    보안 컨설팅
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    포괄적인 보안 전략
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                사이버 보안 위협에 대응할 수 있는 포괄적인 보안 전략과 시스템을 구축합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>보안 평가 및 감사</li>
                <li>보안 정책 수립</li>
                <li>위험 관리</li>
                <li>인시던트 대응</li>
              </ul>
            </div>

            {/* 프로세스 개선 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>⚡</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    프로세스 개선
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    업무 효율성 극대화
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                기존 업무 프로세스를 분석하고 자동화 및 최적화를 통해 효율성을 향상시킵니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>업무 프로세스 분석</li>
                <li>자동화 도입</li>
                <li>성능 측정</li>
                <li>지속적 개선</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 컨설팅 프로세스 */}
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
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a202c',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            컨설팅 프로세스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '01',
                title: '현황 분석',
                description: '현재 IT 환경과 비즈니스 프로세스 분석',
                icon: '🔍'
              },
              {
                step: '02',
                title: '목표 설정',
                description: '비즈니스 목표와 IT 목표 정의',
                icon: '🎯'
              },
              {
                step: '03',
                title: '전략 수립',
                description: '최적의 IT 전략 및 로드맵 수립',
                icon: '📋'
              },
              {
                step: '04',
                title: '솔루션 설계',
                description: '구체적인 솔루션 아키텍처 설계',
                icon: '🏗️'
              },
              {
                step: '05',
                title: '구현 지원',
                description: '전략 실행 및 구현 과정 지원',
                icon: '🚀'
              },
              {
                step: '06',
                title: '성과 측정',
                description: '결과 측정 및 지속적 개선',
                icon: '📊'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#667eea',
                  marginBottom: '8px'
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '12px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.5'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문 분야 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '40px'
          }}>
            🏆 전문 분야
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Enterprise',
                technologies: ['ERP', 'CRM', 'HRM', 'SCM', 'BI/Analytics']
              },
              {
                category: 'Cloud & Infrastructure',
                technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
              },
              {
                category: 'Data & Analytics',
                technologies: ['Big Data', 'Data Lake', 'Machine Learning', 'AI', 'IoT']
              },
              {
                category: 'Security & Compliance',
                technologies: ['Cybersecurity', 'GDPR', 'ISO 27001', 'SOC 2', 'Penetration Testing']
              },
              {
                category: 'DevOps & Automation',
                technologies: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Agile', 'Scrum']
              },
              {
                category: 'Digital Transformation',
                technologies: ['API Strategy', 'Microservices', 'Mobile First', 'Cloud Native', 'Legacy Modernization']
              }
            ].map((stack, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '16px'
                }}>
                  {stack.category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 성공 사례 */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a202c',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            성공 사례
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 제조업체 디지털 전환 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🏭</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    제조업체 디지털 전환
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    중견 제조업체
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                전사적 디지털 전환을 통해 운영 효율성을 50% 향상시키고 스마트 팩토리를 구축했습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 운영 효율성 50% 향상
                • 품질 관리 자동화 90% 달성
                • 에너지 사용량 25% 절감
              </div>
            </div>

            {/* 금융기관 클라우드 전환 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🏦</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    금융기관 클라우드 전환
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    지역 은행
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                하이브리드 클라우드 전환을 통해 인프라 비용을 40% 절감하고 보안을 강화했습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 인프라 비용 40% 절감
                • 시스템 가용성 99.9% 달성
                • 보안 사고 0건 달성
              </div>
            </div>

            {/* 유통업체 데이터 전략 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '20px' }}>🛒</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    유통업체 데이터 전략
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    온라인 쇼핑몰
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                빅데이터 플랫폼 구축을 통해 고객 분석 정확도를 85% 향상시키고 매출을 60% 증가시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 고객 분석 정확도 85% 향상
                • 매출 증가 60% 달성
                • 재고 회전율 45% 개선
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#1a202c'
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
            color: 'white',
            marginBottom: '24px'
          }}>
            IT 컨설팅으로 비즈니스를 혁신하세요
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            전문적인 IT 컨설팅으로 디지털 전환을 가속화하고 
            경쟁 우위를 확보하여 비즈니스 성장을 실현하세요.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 32px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              💼 컨설팅 상담
            </button>
            
            <button style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#667eea',
              border: '2px solid #667eea',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              📋 무료 진단
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
