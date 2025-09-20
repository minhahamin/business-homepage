import Header from '@/components/Header';

export default function WebAppDevelopment() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 웹 개발 & 앱 개발 섹션 */}
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
            marginBottom: '80px'
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
              웹 개발 & 앱 개발
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              최신 기술을 활용하여 사용자 친화적이고 성능이 뛰어난 웹사이트와 모바일 앱을 개발합니다.
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
                디지털 혁신의 시작
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#4a5568',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}>
                웹과 모바일 환경에서 최적화된 사용자 경험을 제공하는 애플리케이션을 개발합니다. 
                반응형 디자인과 최신 기술 스택을 통해 비즈니스 목표를 달성할 수 있는 솔루션을 제공합니다.
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
                  반응형 웹
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: '#f093fb',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  모바일 앱
                </div>
                <div style={{
                  padding: '12px 20px',
                  backgroundColor: '#4facfe',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  크로스플랫폼
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
                💻📱
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                통합 개발 솔루션
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                lineHeight: '1.6'
              }}>
                웹과 앱을 동시에 개발하여 일관된 사용자 경험과 효율적인 비용 관리를 제공합니다.
              </p>
            </div>
          </div>

          {/* 웹 개발 서비스 */}
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
              웹 개발 서비스
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* 반응형 웹사이트 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🌐</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      반응형 웹사이트
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      모든 디바이스에 최적화
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  데스크톱, 태블릿, 모바일 모든 환경에서 완벽하게 작동하는 반응형 웹사이트를 개발합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React, Next.js, Vue.js</li>
                  <li>SEO 최적화</li>
                  <li>빠른 로딩 속도</li>
                </ul>
              </div>

              {/* 웹 애플리케이션 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>⚡</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      웹 애플리케이션
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      고성능 웹 애플리케이션
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  복잡한 비즈니스 로직과 데이터 처리가 필요한 고성능 웹 애플리케이션을 개발합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>Node.js, Express, NestJS</li>
                  <li>데이터베이스 설계</li>
                  <li>API 개발</li>
                  <li>사용자 인증</li>
                </ul>
              </div>

              {/* 전자상거래 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🛒</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      전자상거래
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      온라인 쇼핑몰 구축
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  안전하고 편리한 온라인 쇼핑 경험을 제공하는 전자상거래 플랫폼을 구축합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>결제 시스템 연동</li>
                  <li>재고 관리</li>
                  <li>주문 처리</li>
                  <li>고객 관리</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 모바일 앱 개발 서비스 */}
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
              모바일 앱 개발 서비스
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* 네이티브 앱 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>📱</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      네이티브 앱
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      iOS & Android 개발
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  각 플랫폼에 최적화된 네이티브 앱을 개발하여 최고의 성능과 사용자 경험을 제공합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>Swift (iOS)</li>
                  <li>Kotlin/Java (Android)</li>
                  <li>플랫폼별 최적화</li>
                  <li>앱스토어 출시</li>
                </ul>
              </div>

              {/* 크로스플랫폼 앱 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🔄</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      크로스플랫폼 앱
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      하나의 코드로 모든 플랫폼
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  하나의 코드베이스로 iOS와 Android 앱을 동시에 개발하여 개발 비용과 시간을 절약합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Xamarin</li>
                  <li>빠른 개발</li>
                </ul>
              </div>

              {/* PWA */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>⚡</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      PWA (Progressive Web App)
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      웹과 앱의 장점 결합
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  웹의 접근성과 앱의 기능을 결합한 PWA를 개발하여 다양한 플랫폼에서 일관된 경험을 제공합니다.
                </p>
                <ul style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  paddingLeft: '20px'
                }}>
                  <li>오프라인 지원</li>
                  <li>푸시 알림</li>
                  <li>홈 화면 설치</li>
                  <li>빠른 로딩</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 개발 프로세스 */}
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
              개발 프로세스
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  step: '01',
                  title: '기획 & 분석',
                  description: '요구사항 분석 및 프로젝트 기획',
                  icon: '📋'
                },
                {
                  step: '02',
                  title: 'UI/UX 디자인',
                  description: '사용자 경험을 고려한 인터페이스 디자인',
                  icon: '🎨'
                },
                {
                  step: '03',
                  title: '프로토타입',
                  description: '핵심 기능을 포함한 프로토타입 개발',
                  icon: '⚙️'
                },
                {
                  step: '04',
                  title: '개발 & 테스트',
                  description: '실제 개발 및 품질 검증',
                  icon: '🔧'
                },
                {
                  step: '05',
                  title: '배포 & 런칭',
                  description: '서비스 배포 및 런칭 지원',
                  icon: '🚀'
                },
                {
                  step: '06',
                  title: '유지보수',
                  description: '지속적인 업데이트 및 지원',
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
                    category: 'Frontend',
                    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
                  },
                  {
                    category: 'Backend',
                    technologies: ['Node.js', 'Express', 'NestJS', 'Python', 'Django']
                  },
                  {
                    category: 'Mobile',
                    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
                  },
                  {
                    category: 'Database',
                    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
                  },
                  {
                    category: 'Cloud',
                    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker']
                  },
                  {
                    category: 'DevOps',
                    technologies: ['Git', 'CI/CD', 'Kubernetes', 'Monitoring']
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
              프로젝트를 시작하세요
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              최신 기술과 경험을 바탕으로 비즈니스 목표를 달성할 수 있는 웹사이트와 앱을 개발해드립니다.
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
