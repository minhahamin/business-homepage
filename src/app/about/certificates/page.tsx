import Header from '@/components/Header';

export default function Certificates() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 특허 및 인증서 섹션 */}
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
              특허 및 인증서
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              혁신적인 기술 개발과 품질 경영을 통해 획득한 특허 및 인증서를 소개합니다.
            </p>
          </div>

          {/* 특허 섹션 */}
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
              특허
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* 특허 1 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🔬</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      AI 기반 데이터 분석 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      특허번호: 10-2025-001234
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  머신러닝 알고리즘을 활용한 실시간 데이터 분석 및 예측 시스템에 대한 특허입니다.
                </p>
              </div>

              {/* 특허 2 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🔒</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      블록체인 기반 보안 인증 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      특허번호: 10-2025-001235
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  분산 원장 기술을 활용한 안전한 데이터 인증 및 거래 시스템에 대한 특허입니다.
                </p>
              </div>

              {/* 특허 3 */}
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
                      클라우드 자동화 관리 시스템
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      특허번호: 10-2025-001236
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  클라우드 인프라의 자동 확장 및 최적화를 위한 지능형 관리 시스템에 대한 특허입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 인증서 섹션 */}
          <div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              인증서
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {/* ISO 27001 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>🛡️</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      ISO 27001 (정보보안경영시스템)
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      인증기관: 한국정보통신기술협회
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  정보보안 경영시스템의 국제 표준을 준수하여 고객 데이터 보호를 최우선으로 하고 있습니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  인증기간: 2023.03.15 ~ 2026.03.14
                </div>
              </div>

              {/* ISO 9001 */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>⭐</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      ISO 9001 (품질경영시스템)
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      인증기관: 한국품질보증원
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  체계적인 품질관리 프로세스를 통해 고객 만족도 향상과 지속적인 서비스 개선을 실현합니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  인증기간: 2022.11.20 ~ 2025.11.19
                </div>
              </div>

              {/* CMMI Level 3 */}
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
                    background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '20px' }}>🏆</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      CMMI Level 3
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      인증기관: 한국소프트웨어품질기술원
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  소프트웨어 개발 프로세스의 성숙도 3단계를 인증받아 체계적인 프로젝트 관리 능력을 보유하고 있습니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  인증기간: 2023.07.10 ~ 2026.07.09
                </div>
              </div>

              {/* AWS Advanced Consulting Partner */}
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
                    <span style={{ color: 'white', fontSize: '20px' }}>☁️</span>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#1a202c',
                      marginBottom: '4px'
                    }}>
                      AWS Advanced Consulting Partner
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      인증기관: Amazon Web Services
                    </p>
                  </div>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  AWS의 고급 컨설팅 파트너로서 클라우드 마이그레이션과 최적화 서비스를 제공합니다.
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  backgroundColor: '#f7fafc',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}>
                  인증기간: 2023.01.15 ~ 2025.01.14
                </div>
              </div>
            </div>
          </div>

          {/* 신뢰성 섹션 */}
          <div style={{
            marginTop: '80px',
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
              신뢰할 수 있는 기술 파트너
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4a5568',
              lineHeight: '1.6',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              국제 표준 인증과 특허 기술을 바탕으로 고객의 비즈니스 성공을 지원합니다. 
              지속적인 혁신과 품질 개선을 통해 최고의 IT 서비스를 제공하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
