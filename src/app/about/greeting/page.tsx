import Header from '@/components/Header';

export default function Greeting() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 대표 인사말 섹션 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            marginBottom: '80px'
          }}>
            {/* 대표자 사진 */}
            <div style={{
              flex: '0 0 300px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
              }}>
                <span style={{
                  fontSize: '80px',
                  color: 'white'
                }}>👨‍💼</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '8px'
              }}>
                김대표
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#4a5568',
                marginBottom: '4px'
              }}>
                대표이사
              </p>
              <p style={{
                fontSize: '14px',
                color: '#718096'
              }}>
                IT 업계 15년 경력
              </p>
            </div>

            {/* 인사말 */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '32px',
                lineHeight: '1.2'
              }}>
                안녕하세요,<br />
                <span style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  W
                </span> 대표이사입니다.
              </h2>
              
              <div style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#2d3748',
                marginBottom: '32px'
              }}>
                <p style={{ marginBottom: '20px' }}>
                  디지털 혁신의 시대, 저희 W는 고객의 성공을 위해 최선을 다하고 있습니다. 
                  15년간의 IT 업계 경험을 바탕으로 웹 개발부터 AI 솔루션까지, 
                  고객의 비즈니스 성장에 필요한 모든 기술을 제공합니다.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  저희는 단순히 기술을 제공하는 것이 아니라, 고객의 비즈니스 목표를 정확히 이해하고 
                  최적의 솔루션을 제안하는 것을 최우선으로 생각합니다. 
                  모든 프로젝트에서 고객의 만족도와 성공을 위해 최선을 다하겠습니다.
                </p>
                <p>
                  앞으로도 지속적인 기술 혁신과 고객 중심의 서비스로 
                  더 나은 디지털 세상을 만들어가겠습니다.
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                <div style={{
                  fontSize: '24px'
                }}>💼</div>
                <div>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#2d3748',
                    marginBottom: '4px'
                  }}>
                    &ldquo;고객의 성공이 저희의 성공입니다&rdquo;
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#4a5568'
                  }}>
                    - 김대표, 대표이사
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 비전과 미션 */}
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
            비전과 미션
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {/* 비전 */}
            <div style={{
              padding: '40px',
              backgroundColor: '#f7fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                비전 (Vision)
              </h3>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#4a5568'
              }}>
                &ldquo;디지털 혁신을 통해 모든 기업이 성장할 수 있는 세상을 만들어갑니다&rdquo;
              </p>
            </div>

            {/* 미션 */}
            <div style={{
              padding: '40px',
              backgroundColor: '#f7fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '32px'
              }}>
                🚀
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a202c',
                marginBottom: '16px'
              }}>
                미션 (Mission)
              </h3>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#4a5568'
              }}>
                &ldquo;최신 기술과 창의적 아이디어로 고객의 비즈니스 성공을 지원합니다&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 고객에 대한 약속 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            고객에 대한 약속
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {/* 품질 보장 */}
            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                ⭐
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}>
                최고 품질 보장
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                모든 프로젝트에서 최고 수준의 품질과 완성도를 보장합니다.
              </p>
            </div>

            {/* 24/7 지원 */}
            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                🕐
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}>
                24/7 기술 지원
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                언제든지 고객의 문의와 요청에 신속하게 응답합니다.
              </p>
            </div>

            {/* 맞춤형 솔루션 */}
            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}>
                맞춤형 솔루션
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                고객의 비즈니스에 최적화된 맞춤형 솔루션을 제공합니다.
              </p>
            </div>

            {/* 지속적인 혁신 */}
            <div style={{
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                🔄
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}>
                지속적인 혁신
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                opacity: 0.9
              }}>
                최신 기술 트렌드를 반영한 지속적인 서비스 개선을 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}