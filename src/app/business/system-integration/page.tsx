import Header from '@/components/Header';

export default function SystemIntegration() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 시스템 통합 & 구축 섹션 */}
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
              🔧 시스템 통합 & 구축
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              기존 시스템을 최신 기술로 통합하고, 효율적인 업무 프로세스를 위한 맞춤형 시스템을 구축합니다.
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
                color: '#1a202c',
                marginBottom: '24px'
              }}>
                디지털 혁신을 통한 비즈니스 최적화
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#4a5568',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}>
                분산된 시스템들을 하나로 통합하고, 업무 효율성을 극대화할 수 있는 
                맞춤형 시스템을 구축하여 디지털 전환을 완성합니다.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: '#667eea',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  시스템 통합
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: '#f093fb',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  ERP 구축
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: '#4facfe',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  데이터 통합
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '80px',
                marginBottom: '24px'
              }}>
                🔗⚙️
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                통합 솔루션
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                기존 시스템과 신규 시스템을 유기적으로 연결하여 
                통합된 업무 환경을 구축합니다.
              </p>
            </div>
          </div>

          {/* 시스템 통합 서비스 */}
          <div style={{
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              시스템 통합 서비스
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* API 통합 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🔌</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      API 통합
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      시스템 간 데이터 연동
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  다양한 시스템 간 API를 통한 실시간 데이터 연동과 통합을 구현합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>RESTful API 개발</li>
                  <li>GraphQL 통합</li>
                  <li>실시간 데이터 동기화</li>
                  <li>에러 핸들링 및 모니터링</li>
                </ul>
              </div>

              {/* 데이터베이스 통합 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🗄️</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      데이터베이스 통합
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      분산된 데이터 통합
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  여러 데이터베이스를 하나로 통합하여 데이터 일관성과 접근성을 향상시킵니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>데이터 마이그레이션</li>
                  <li>ETL 프로세스 구축</li>
                  <li>데이터 품질 관리</li>
                  <li>백업 및 복구 시스템</li>
                </ul>
              </div>

              {/* 클라우드 통합 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                      클라우드 통합
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      하이브리드 클라우드 환경
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  온프레미스와 클라우드 환경을 통합하여 최적의 인프라를 구축합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>하이브리드 클라우드</li>
                  <li>멀티 클라우드 전략</li>
                  <li>클라우드 마이그레이션</li>
                  <li>보안 및 거버넌스</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 시스템 구축 서비스 */}
          <div style={{
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              시스템 구축 서비스
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* ERP 시스템 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🏢</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      ERP 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      전사적 자원 관리 시스템
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  기업의 모든 업무 프로세스를 통합 관리할 수 있는 맞춤형 ERP 시스템을 구축합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>재무 관리</li>
                  <li>인사 관리</li>
                  <li>구매 관리</li>
                  <li>재고 관리</li>
                </ul>
              </div>

              {/* CRM 시스템 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                    <span style={{ color: 'white', fontSize: '20px' }}>👥</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      CRM 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      고객 관계 관리 시스템
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  고객과의 관계를 체계적으로 관리하고 영업 효율성을 극대화하는 CRM을 구축합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>고객 정보 관리</li>
                  <li>영업 기회 추적</li>
                  <li>마케팅 자동화</li>
                  <li>고객 서비스</li>
                </ul>
              </div>

              {/* BI 시스템 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                    <span style={{ color: 'white', fontSize: '20px' }}>📊</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      BI 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      비즈니스 인텔리전스
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  데이터를 분석하여 의사결정에 필요한 인사이트를 제공하는 BI 시스템을 구축합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>데이터 웨어하우스</li>
                  <li>대시보드 구축</li>
                  <li>리포팅 시스템</li>
                  <li>예측 분석</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 구축 프로세스 */}
          <div style={{
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              구축 프로세스
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
                  description: '기존 시스템 분석 및 요구사항 정의',
                  icon: '🔍'
                },
                {
                  step: '02',
                  title: '아키텍처 설계',
                  description: '시스템 아키텍처 및 통합 방안 설계',
                  icon: '🏗️'
                },
                {
                  step: '03',
                  title: '개발 & 테스트',
                  description: '시스템 개발 및 통합 테스트',
                  icon: '⚙️'
                },
                {
                  step: '04',
                  title: '데이터 마이그레이션',
                  description: '기존 데이터 이전 및 검증',
                  icon: '📦'
                },
                {
                  step: '05',
                  title: '시스템 통합',
                  description: '시스템 간 연동 및 통합 작업',
                  icon: '🔗'
                },
                {
                  step: '06',
                  title: '운영 & 지원',
                  description: '시스템 운영 및 지속적인 지원',
                  icon: '🛠️'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
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

          {/* 기술 스택 */}
          <div style={{
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              기술 스택
            </h2>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '30px'
              }}>
                {[
                  {
                    category: 'Integration',
                    technologies: ['REST API', 'GraphQL', 'SOAP', 'Webhook', 'Message Queue']
                  },
                  {
                    category: 'Database',
                    technologies: ['Oracle', 'SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB']
                  },
                  {
                    category: 'Middleware',
                    technologies: ['Apache Kafka', 'RabbitMQ', 'Redis', 'Elasticsearch']
                  },
                  {
                    category: 'Cloud',
                    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
                  },
                  {
                    category: 'Monitoring',
                    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic']
                  },
                  {
                    category: 'Security',
                    technologies: ['OAuth', 'SAML', 'LDAP', 'VPN', 'Firewall']
                  }
                ].map((stack, index) => (
                  <div key={index}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '16px',
                      textAlign: 'center'
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
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            fontSize: '14px',
                            color: '#4a5568',
                            textAlign: 'center',
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
          </div>

          {/* 성공 사례 */}
          <div style={{
            marginBottom: '80px'
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
              {/* 제조업체 ERP 통합 */}
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
                      제조업체 ERP 통합
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      대형 제조업체
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  분산된 15개 시스템을 하나의 통합 ERP로 통합하여 업무 효율성을 40% 향상시켰습니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  • 업무 프로세스 자동화 85% 달성
                  • 데이터 정확도 99.5% 향상
                  • 시스템 운영 비용 30% 절감
                </div>
              </div>

              {/* 유통업체 CRM 구축 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🛍️</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      유통업체 CRM 구축
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
                  고객 데이터 통합 및 마케팅 자동화를 통해 고객 만족도와 매출을 동시에 향상시켰습니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  • 고객 만족도 25% 향상
                  • 매출 증가율 35% 달성
                  • 고객 유지율 40% 개선
                </div>
              </div>

              {/* 금융기관 BI 시스템 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🏦</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      금융기관 BI 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      지방은행
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  실시간 데이터 분석을 통한 리스크 관리와 의사결정 지원 시스템을 구축했습니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  • 의사결정 시간 60% 단축
                  • 리스크 예측 정확도 90% 달성
                  • 데이터 처리 속도 3배 향상
                </div>
              </div>
            </div>
          </div>

          {/* CTA 섹션 */}
          <div style={{
            textAlign: 'center',
            padding: '60px 40px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '24px'
            }}>
              시스템 통합으로 비즈니스를 혁신하세요
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              기존 시스템을 최신 기술로 통합하고, 효율적인 업무 프로세스를 구축하여 
              디지털 전환을 완성해보세요.
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
                📞 상담 문의하기
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
                📝 견적 요청하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
