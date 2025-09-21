import Header from '@/components/Header';

export default function DigitalMarketing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 디지털 마케팅 섹션 */}
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
              📱 디지털 마케팅
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              데이터 기반의 전략적 디지털 마케팅으로 브랜드 인지도를 높이고 
              고객과의 연결을 강화합니다.
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
                브랜드 성장의 동력
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '32px',
                opacity: '0.9'
              }}>
                최신 디지털 트렌드와 데이터 분석을 통해 
                효과적인 마케팅 전략을 수립하고 실행합니다.
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
                  SEO/SEM
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
                  SNS 마케팅
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
                  콘텐츠 마케팅
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
                타겟 마케팅
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'white',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                정확한 타겟 분석을 통한 
                맞춤형 마케팅 전략을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 디지털 마케팅 서비스 */}
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
            디지털 마케팅 서비스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* SEO/SEM */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🔍</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    SEO/SEM
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    검색 엔진 최적화
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                검색 엔진에서 상위 노출을 위한 키워드 최적화와 광고 캠페인을 관리합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>키워드 분석 및 최적화</li>
                <li>콘텐츠 SEO 전략</li>
                <li>구글 애즈 관리</li>
                <li>백링크 구축</li>
              </ul>
            </div>

            {/* SNS 마케팅 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>📱</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    SNS 마케팅
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    소셜 미디어 전략
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                다양한 소셜 미디어 플랫폼을 활용한 브랜드 인지도 향상과 고객 참여를 증대시킵니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>페이스북/인스타그램 광고</li>
                <li>유튜브 마케팅</li>
                <li>인플루언서 협업</li>
                <li>커뮤니티 관리</li>
              </ul>
            </div>

            {/* 콘텐츠 마케팅 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>✍️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    콘텐츠 마케팅
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    가치 있는 콘텐츠 제작
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                고객에게 유용한 정보를 제공하는 콘텐츠를 통해 브랜드 신뢰도를 높입니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>블로그 콘텐츠 기획</li>
                <li>동영상 제작</li>
                <li>인포그래픽 디자인</li>
                <li>이메일 뉴스레터</li>
              </ul>
            </div>

            {/* 이메일 마케팅 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>📧</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    이메일 마케팅
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    개인화된 이메일 캠페인
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                타겟 고객에게 개인화된 이메일을 발송하여 고객 유지와 재구매를 유도합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>고객 세분화</li>
                <li>자동화된 이메일 시퀀스</li>
                <li>A/B 테스트</li>
                <li>개인화 추천</li>
              </ul>
            </div>

            {/* 웹 분석 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>📊</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    웹 분석
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    데이터 기반 마케팅
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                웹사이트와 마케팅 캠페인의 성과를 분석하여 개선 방안을 제시합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>구글 애널리틱스 설정</li>
                <li>전환율 최적화</li>
                <li>사용자 행동 분석</li>
                <li>ROI 측정</li>
              </ul>
            </div>

            {/* 온라인 광고 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🎯</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    온라인 광고
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    정밀 타겟팅 광고
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                다양한 온라인 플랫폼에서 정확한 타겟팅을 통한 효과적인 광고를 운영합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>디스플레이 광고</li>
                <li>리타겟팅 캠페인</li>
                <li>모바일 광고</li>
                <li>비디오 광고</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 마케팅 전략 프로세스 */}
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
            마케팅 전략 프로세스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '01',
                title: '시장 분석',
                description: '경쟁사 분석 및 시장 트렌드 파악',
                icon: '🔍'
              },
              {
                step: '02',
                title: '타겟 정의',
                description: '고객 페르소나 및 타겟 세분화',
                icon: '👥'
              },
              {
                step: '03',
                title: '전략 수립',
                description: '마케팅 목표 설정 및 채널 전략',
                icon: '📋'
              },
              {
                step: '04',
                title: '콘텐츠 제작',
                description: '브랜드 메시지에 맞는 콘텐츠 개발',
                icon: '✍️'
              },
              {
                step: '05',
                title: '캠페인 실행',
                description: '다양한 채널을 통한 마케팅 실행',
                icon: '🚀'
              },
              {
                step: '06',
                title: '성과 분석',
                description: 'KPI 측정 및 전략 개선',
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
                  color: '#ff9a9e',
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

      {/* 마케팅 도구 */}
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
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '40px'
          }}>
            🛠️ 마케팅 도구
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Analytics',
                technologies: ['Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Hotjar', 'Crazy Egg']
              },
              {
                category: 'Social Media',
                technologies: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later', 'Canva']
              },
              {
                category: 'Email Marketing',
                technologies: ['Mailchimp', 'Constant Contact', 'HubSpot', 'SendGrid', 'Campaign Monitor']
              },
              {
                category: 'SEO Tools',
                technologies: ['SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Google Search Console']
              },
              {
                category: 'Advertising',
                technologies: ['Google Ads', 'Facebook Ads Manager', 'LinkedIn Ads', 'Twitter Ads', 'TikTok Ads']
              },
              {
                category: 'Automation',
                technologies: ['HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign', 'Zapier']
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
            {/* 전자상거래 브랜드 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🛍️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    전자상거래 브랜드
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    패션 온라인 쇼핑몰
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                SEO 최적화와 SNS 마케팅을 통해 온라인 매출을 300% 증가시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 웹사이트 트래픽 250% 증가
                • 브랜드 인지도 180% 향상
                • 고객 유지율 45% 개선
              </div>
            </div>

            {/* B2B 서비스 회사 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🏢</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    B2B 서비스 회사
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    IT 솔루션 제공업체
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                콘텐츠 마케팅과 리드 제네레이션을 통해 잠재 고객을 400% 증가시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 리드 수 400% 증가
                • 콘텐츠 조회수 500% 증가
                • 고객 전환율 35% 향상
              </div>
            </div>

            {/* 로컬 비즈니스 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🍕</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    로컬 비즈니스
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    지역 맛집
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                지역 SEO와 소셜 미디어 마케팅으로 지역 고객 유입을 200% 증가시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 지역 검색 노출 200% 증가
                • 소셜 미디어 팔로워 150% 증가
                • 매출 증대 80% 달성
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
            디지털 마케팅으로 브랜드를 성장시키세요
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            데이터 기반의 전략적 마케팅으로 고객과의 연결을 강화하고 
            브랜드 가치를 극대화하세요.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 32px',
              backgroundColor: '#ff9a9e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              📱 마케팅 상담
            </button>
            
            <button style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#ff9a9e',
              border: '2px solid #ff9a9e',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              📊 무료 분석
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
