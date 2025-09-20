import Header from '@/components/Header';

export default function Location() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 오시는 길 섹션 */}
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
              오시는 길
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              언제든지 편리하게 방문하실 수 있도록 상세한 위치 정보를 제공해드립니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* 회사 정보 */}
            <div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                marginBottom: '30px'
              }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '32px' }}>🏢</span>
                  회사 정보
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>📍</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        주소
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        서울특별시 강남구 테헤란로 123, 15층<br />
                        (역삼동, IT빌딩)
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>🚇</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        지하철
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        2호선 강남역 3번 출구 도보 5분<br />
                        9호선 신논현역 1번 출구 도보 3분
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>🚌</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        버스
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        146, 240, 341, 360, 362, 740<br />
                        강남역 정류장 하차
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>🚗</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        주차
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        건물 지하 주차장 이용 가능<br />
                        (2시간 무료, 이후 시간당 3,000원)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 연락처 정보 */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '32px' }}>📞</span>
                  연락처
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>📱</span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        marginBottom: '2px'
                      }}>
                        대표전화
                      </p>
                      <p style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#1a202c'
                      }}>
                        02-1234-5678
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>✉️</span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        marginBottom: '2px'
                      }}>
                        이메일
                      </p>
                      <p style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#1a202c'
                      }}>
                        info@company.co.kr
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>🕒</span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        marginBottom: '2px'
                      }}>
                        운영시간
                      </p>
                      <p style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#1a202c'
                      }}>
                        평일 09:00 ~ 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 지도 영역 */}
            <div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                height: 'fit-content'
              }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '32px' }}>🗺️</span>
                  위치 안내
                </h2>
                
                {/* 지도 플레이스홀더 */}
                <div style={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '20px',
                    right: '20px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '1px'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '60px',
                    left: '20px',
                    right: '20px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '1px'
                  }} />
                  
                  <div style={{
                    fontSize: '48px',
                    marginBottom: '16px'
                  }}>
                    🗺️
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}>
                    지도가 여기에 표시됩니다
                  </div>
                  <div style={{
                    fontSize: '14px',
                    opacity: 0.8
                  }}>
                    실제 서비스에서는 카카오맵이나 구글맵 API를 연동합니다
                  </div>
                </div>

                {/* 길찾기 버튼들 */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}>
                  <button style={{
                    padding: '12px 20px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    🚇 지하철 경로
                  </button>
                  <button style={{
                    padding: '12px 20px',
                    backgroundColor: '#f093fb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    🚌 버스 경로
                  </button>
                  <button style={{
                    padding: '12px 20px',
                    backgroundColor: '#4facfe',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    🚗 자동차 경로
                  </button>
                  <button style={{
                    padding: '12px 20px',
                    backgroundColor: '#43e97b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    🚶 도보 경로
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
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
              방문 안내
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  🎯
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '12px'
                }}>
                  정확한 위치
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  강남역에서 도보 5분 거리에 위치하여 접근성이 뛰어납니다.
                </p>
              </div>
              
              <div>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  🅿️
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '12px'
                }}>
                  편리한 주차
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  건물 지하 주차장에서 2시간 무료 주차가 가능합니다.
                </p>
              </div>
              
              <div>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  📋
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1a202c',
                  marginBottom: '12px'
                }}>
                  사전 예약
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  방문 전 미리 연락주시면 더욱 원활한 상담이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
