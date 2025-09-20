import Header from '@/components/Header';

export default function CloudSolution() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 클라우드 솔루션 섹션 */}
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
              ☁️ 클라우드 솔루션
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              안전하고 확장 가능한 클라우드 인프라로 비즈니스를 혁신하고 
              운영 효율성을 극대화하세요.
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
                디지털 전환의 핵심
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '32px',
                opacity: '0.9'
              }}>
                최신 클라우드 기술을 활용하여 비용 효율적이고 안전한 
                인프라를 구축하고 관리합니다.
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
                  AWS
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
                  Azure
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
                  Google Cloud
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
                🚀
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>
                클라우드 마이그레이션
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'white',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                기존 온프레미스 환경을 클라우드로 
                안전하고 효율적으로 이전합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 클라우드 서비스 */}
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
            클라우드 서비스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 인프라 서비스 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🏗️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    인프라 서비스 (IaaS)
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    가상 서버 및 스토리지
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                가상 서버, 스토리지, 네트워킹 등 기본적인 클라우드 인프라를 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>가상 서버 (EC2, VM)</li>
                <li>스토리지 (S3, Blob Storage)</li>
                <li>네트워킹 (VPC, Load Balancer)</li>
                <li>모니터링 및 로깅</li>
              </ul>
            </div>

            {/* 플랫폼 서비스 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>⚙️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    플랫폼 서비스 (PaaS)
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    개발 환경 및 미들웨어
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                개발자가 애플리케이션을 구축하고 배포할 수 있는 플랫폼을 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>컨테이너 서비스 (EKS, AKS)</li>
                <li>데이터베이스 (RDS, Cosmos DB)</li>
                <li>개발 도구 (GitHub Actions)</li>
                <li>API 게이트웨이</li>
              </ul>
            </div>

            {/* 소프트웨어 서비스 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>💻</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    소프트웨어 서비스 (SaaS)
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    완성된 애플리케이션
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                사용자가 즉시 사용할 수 있는 완성된 소프트웨어 애플리케이션을 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>Office 365, G Suite</li>
                <li>CRM, ERP 솔루션</li>
                <li>비디오 회의 (Teams, Zoom)</li>
                <li>이메일 및 협업 도구</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 클라우드 보안 */}
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
            클라우드 보안
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '🔐',
                title: '접근 제어',
                description: 'IAM, MFA를 통한 강화된 인증 및 권한 관리'
              },
              {
                icon: '🛡️',
                title: '데이터 암호화',
                description: '전송 중 및 저장된 데이터의 종단간 암호화'
              },
              {
                icon: '🔍',
                title: '보안 모니터링',
                description: '실시간 위협 탐지 및 보안 이벤트 분석'
              },
              {
                icon: '📋',
                title: '컴플라이언스',
                description: 'GDPR, HIPAA 등 규정 준수 및 인증'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {item.icon}
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

      {/* 비용 최적화 */}
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
            marginBottom: '24px'
          }}>
            💰 비용 최적화
          </h2>
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            클라우드 리소스를 효율적으로 관리하여 최대 40%의 비용을 절약할 수 있습니다.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {[
              { icon: '📊', title: '리소스 모니터링', desc: '실시간 사용량 추적' },
              { icon: '⚡', title: '오토 스케일링', desc: '수요에 따른 자동 확장' },
              { icon: '💾', title: '스토리지 최적화', desc: '데이터 계층화 관리' },
              { icon: '🔄', title: '예약 인스턴스', desc: '장기 사용 시 할인' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  opacity: '0.9'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
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
            클라우드로 비즈니스를 혁신하세요
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            안전하고 확장 가능한 클라우드 솔루션으로 
            디지털 전환을 완성하고 경쟁 우위를 확보하세요.
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
              ☁️ 클라우드 상담
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
              📊 비용 분석
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
