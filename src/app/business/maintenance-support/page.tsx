import Header from '@/components/Header';

export default function MaintenanceSupport() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 유지보수 & 지원 섹션 */}
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
              🔧 유지보수 & 지원
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              안정적이고 지속적인 IT 시스템 운영을 위한 
              24/7 전문적인 유지보수 및 기술 지원 서비스를 제공합니다.
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
                안정적인 운영의 핵심
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '32px',
                opacity: '0.9'
              }}>
                IT 시스템의 안정적인 운영과 지속적인 성능 향상을 위해 
                전문적인 유지보수와 즉각적인 기술 지원을 제공합니다.
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
                  24/7 지원
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
                  예방적 관리
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
                  긴급 대응
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
                Proactive Support
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'white',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                문제 발생 전 예방적 관리를 통해 
                시스템 안정성을 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 유지보수 & 지원 서비스 */}
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
            유지보수 & 지원 서비스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 24/7 모니터링 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>👁️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    24/7 모니터링
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    실시간 시스템 감시
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                시스템의 상태를 24시간 실시간으로 모니터링하여 문제를 조기에 발견하고 대응합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>실시간 성능 모니터링</li>
                <li>자동 알림 시스템</li>
                <li>장애 예측 분석</li>
                <li>상세한 리포트 제공</li>
              </ul>
            </div>

            {/* 예방적 유지보수 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🛠️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    예방적 유지보수
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    문제 발생 전 선제적 관리
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                정기적인 점검과 업데이트를 통해 시스템 장애를 예방하고 최적의 성능을 유지합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>정기 시스템 점검</li>
                <li>소프트웨어 업데이트</li>
                <li>보안 패치 관리</li>
                <li>성능 최적화</li>
              </ul>
            </div>

            {/* 긴급 대응 서비스 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>⚡</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    긴급 대응 서비스
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    24시간 긴급 지원
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                시스템 장애 발생 시 24시간 내 즉각적인 대응으로 비즈니스 연속성을 보장합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>24시간 긴급 전화 지원</li>
                <li>원격 진단 및 복구</li>
                <li>현장 방문 지원</li>
                <li>장애 복구 SLA 보장</li>
              </ul>
            </div>

            {/* 백업 및 복구 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>💾</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    백업 및 복구
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    데이터 보호 및 복구
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                중요한 데이터의 안전한 백업과 신속한 복구를 통해 데이터 손실을 방지합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>자동 백업 시스템</li>
                <li>오프사이트 백업</li>
                <li>빠른 복구 서비스</li>
                <li>백업 검증 및 테스트</li>
              </ul>
            </div>

            {/* 보안 관리 */}
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
                    보안 관리
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    포괄적인 보안 서비스
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                사이버 보안 위협으로부터 시스템을 보호하고 지속적인 보안 관리를 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>보안 패치 관리</li>
                <li>침입 탐지 시스템</li>
                <li>취약점 스캔</li>
                <li>보안 인시던트 대응</li>
              </ul>
            </div>

            {/* 사용자 지원 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>👥</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    사용자 지원
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    전문적인 기술 지원
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                사용자들이 시스템을 효과적으로 활용할 수 있도록 전문적인 기술 지원과 교육을 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>헬프데스크 운영</li>
                <li>사용자 교육</li>
                <li>문서화 및 가이드</li>
                <li>FAQ 및 지식 베이스</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 지원 프로세스 */}
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
            지원 프로세스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '01',
                title: '문의 접수',
                description: '다양한 채널을 통한 지원 요청 접수',
                icon: '📞'
              },
              {
                step: '02',
                title: '우선순위 분류',
                description: '중요도에 따른 지원 요청 분류',
                icon: '⚡'
              },
              {
                step: '03',
                title: '진단 및 분석',
                description: '문제 원인 파악 및 해결 방안 검토',
                icon: '🔍'
              },
              {
                step: '04',
                title: '해결 및 복구',
                description: '신속한 문제 해결 및 시스템 복구',
                icon: '🛠️'
              },
              {
                step: '05',
                title: '테스트 및 검증',
                description: '해결 결과 검증 및 안정성 확인',
                icon: '✅'
              },
              {
                step: '06',
                title: '후속 관리',
                description: '문제 재발 방지 및 개선 사항 적용',
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

      {/* SLA 보장 */}
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
            🎯 SLA 보장
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                level: 'Critical',
                response: '15분',
                resolution: '4시간',
                uptime: '99.9%',
                description: '비즈니스 중단 위험'
              },
              {
                level: 'High',
                response: '1시간',
                resolution: '8시간',
                uptime: '99.5%',
                description: '중요한 기능 영향'
              },
              {
                level: 'Medium',
                response: '4시간',
                resolution: '24시간',
                uptime: '99.0%',
                description: '일부 기능 제한'
              },
              {
                level: 'Low',
                response: '24시간',
                resolution: '72시간',
                uptime: '98.0%',
                description: '기능 개선 요청'
              }
            ].map((sla, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '16px'
                }}>
                  {sla.level} Level
                </h3>
                <div style={{
                  fontSize: '14px',
                  marginBottom: '12px'
                }}>
                  <strong>응답 시간:</strong> {sla.response}
                </div>
                <div style={{
                  fontSize: '14px',
                  marginBottom: '12px'
                }}>
                  <strong>해결 시간:</strong> {sla.resolution}
                </div>
                <div style={{
                  fontSize: '14px',
                  marginBottom: '12px'
                }}>
                  <strong>가용성:</strong> {sla.uptime}
                </div>
                <div style={{
                  fontSize: '12px',
                  opacity: '0.8'
                }}>
                  {sla.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 도구 및 기술 */}
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
            지원 도구 및 기술
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Monitoring',
                technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic']
              },
              {
                category: 'Help Desk',
                technologies: ['Jira Service Desk', 'Freshdesk', 'Zendesk', 'ServiceNow', 'ManageEngine']
              },
              {
                category: 'Backup',
                technologies: ['Veeam', 'Acronis', 'Commvault', 'NetBackup', 'AWS Backup']
              },
              {
                category: 'Security',
                technologies: ['Nessus', 'OpenVAS', 'Qualys', 'Rapid7', 'Tenable']
              },
              {
                category: 'Remote Support',
                technologies: ['TeamViewer', 'AnyDesk', 'Chrome Remote Desktop', 'LogMeIn', 'Bomgar']
              },
              {
                category: 'Documentation',
                technologies: ['Confluence', 'Notion', 'GitBook', 'Sphinx', 'DokuWiki']
              }
            ].map((stack, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}>
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
      </section>

      {/* 성공 사례 */}
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
            성공 사례
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 금융기관 24/7 지원 */}
            <div style={{
              backgroundColor: '#f8fafc',
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🏦</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    금융기관 24/7 지원
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
                24시간 모니터링과 긴급 대응 서비스로 시스템 가용성을 99.9% 달성하고 장애 시간을 95% 감소시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#e2e8f0',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 시스템 가용성 99.9% 달성
                • 장애 시간 95% 감소
                • 평균 복구 시간 30분 단축
              </div>
            </div>

            {/* 제조업체 예방적 유지보수 */}
            <div style={{
              backgroundColor: '#f8fafc',
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🏭</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    제조업체 예방적 유지보수
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
                예방적 유지보수를 통해 계획된 다운타임을 80% 감소시키고 생산 효율성을 25% 향상시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#e2e8f0',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 계획된 다운타임 80% 감소
                • 생산 효율성 25% 향상
                • 유지보수 비용 35% 절감
              </div>
            </div>

            {/* 유통업체 데이터 보호 */}
            <div style={{
              backgroundColor: '#f8fafc',
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
                    유통업체 데이터 보호
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
                자동 백업 시스템과 빠른 복구 서비스로 데이터 손실을 0% 달성하고 비즈니스 연속성을 보장했습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#e2e8f0',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 데이터 손실 0% 달성
                • 복구 시간 90% 단축
                • 백업 성공률 100% 유지
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
            안정적인 IT 운영을 위한 파트너
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            24/7 전문적인 유지보수와 기술 지원으로 
            IT 시스템의 안정성과 성능을 보장하세요.
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
              🔧 지원 상담
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
              📋 SLA 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
