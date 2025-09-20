import Header from '@/components/Header';

export default function AIMLService() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* AI/머신러닝 서비스 섹션 */}
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
              🤖 AI/머신러닝 서비스
            </h1>
            <p style={{
              fontSize: '20px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              인공지능과 머신러닝 기술로 비즈니스 데이터를 분석하고 
              지능형 솔루션을 제공합니다.
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
                데이터 기반 인사이트
              </h2>
              <p style={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '1.7',
                marginBottom: '32px',
                opacity: '0.9'
              }}>
                AI와 머신러닝을 활용하여 숨겨진 패턴을 발견하고 
                예측 가능한 비즈니스 인사이트를 제공합니다.
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
                  딥러닝
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
                  예측 분석
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
                  자연어 처리
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
                🧠
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '16px'
              }}>
                지능형 솔루션
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'white',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                데이터에서 가치를 추출하고 
                자동화된 의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML 서비스 */}
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
            AI/ML 서비스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {/* 예측 분석 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>📈</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    예측 분석
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    미래 트렌드 예측
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                과거 데이터를 기반으로 미래의 트렌드와 패턴을 예측하여 전략적 의사결정을 지원합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>매출 예측 모델</li>
                <li>고객 이탈 예측</li>
                <li>재고 수요 예측</li>
                <li>시장 트렌드 분석</li>
              </ul>
            </div>

            {/* 자연어 처리 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>💬</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    자연어 처리
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    텍스트 데이터 분석
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                텍스트 데이터를 분석하여 의미를 추출하고 자동화된 처리를 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>감정 분석</li>
                <li>문서 분류</li>
                <li>챗봇 개발</li>
                <li>자동 번역</li>
              </ul>
            </div>

            {/* 컴퓨터 비전 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>👁️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    컴퓨터 비전
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    이미지/비디오 분석
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                이미지와 비디오 데이터를 분석하여 객체 인식, 분류, 검출 등의 작업을 수행합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>객체 인식</li>
                <li>얼굴 인식</li>
                <li>품질 검사</li>
                <li>의료 이미지 분석</li>
              </ul>
            </div>

            {/* 추천 시스템 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🎯</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    추천 시스템
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    개인화된 추천
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                사용자 행동 패턴을 분석하여 개인화된 상품이나 콘텐츠를 추천합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>협업 필터링</li>
                <li>콘텐츠 기반 필터링</li>
                <li>하이브리드 추천</li>
                <li>A/B 테스트</li>
              </ul>
            </div>

            {/* 이상 탐지 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>⚠️</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    이상 탐지
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    비정상 패턴 감지
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                정상적인 패턴에서 벗어난 이상 데이터를 실시간으로 탐지하고 알림을 제공합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>사기 탐지</li>
                <li>시스템 이상 감지</li>
                <li>네트워크 침입 탐지</li>
                <li>품질 이상 탐지</li>
              </ul>
            </div>

            {/* 자동화 */}
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
                    프로세스 자동화
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    지능형 업무 자동화
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                반복적인 업무 프로세스를 AI로 자동화하여 효율성을 극대화합니다.
              </p>
              <ul style={{
                fontSize: '14px',
                color: '#4a5568',
                paddingLeft: '20px'
              }}>
                <li>RPA (로봇 프로세스 자동화)</li>
                <li>문서 처리 자동화</li>
                <li>고객 서비스 자동화</li>
                <li>데이터 입력 자동화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI 개발 프로세스 */}
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
            AI 개발 프로세스
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                step: '01',
                title: '데이터 수집',
                description: '비즈니스 요구사항에 맞는 데이터 수집 및 전처리',
                icon: '📊'
              },
              {
                step: '02',
                title: '모델 설계',
                description: '문제에 적합한 AI/ML 모델 아키텍처 설계',
                icon: '🏗️'
              },
              {
                step: '03',
                title: '모델 훈련',
                description: '데이터를 활용한 모델 훈련 및 최적화',
                icon: '🎯'
              },
              {
                step: '04',
                title: '모델 검증',
                description: '성능 평가 및 검증을 통한 모델 개선',
                icon: '✅'
              },
              {
                step: '05',
                title: '배포 및 통합',
                description: '실제 환경에 모델 배포 및 시스템 통합',
                icon: '🚀'
              },
              {
                step: '06',
                title: '모니터링',
                description: '지속적인 성능 모니터링 및 모델 업데이트',
                icon: '📈'
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

      {/* 기술 스택 */}
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
            🔧 기술 스택
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                category: 'Machine Learning',
                technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM']
              },
              {
                category: 'Deep Learning',
                technologies: ['Keras', 'TensorFlow.js', 'ONNX', 'Hugging Face', 'OpenAI API']
              },
              {
                category: 'Data Processing',
                technologies: ['Pandas', 'NumPy', 'Apache Spark', 'Apache Kafka', 'Dask']
              },
              {
                category: 'Cloud Platform',
                technologies: ['AWS SageMaker', 'Azure ML', 'GCP AI Platform', 'Databricks', 'MLflow']
              },
              {
                category: 'Visualization',
                technologies: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'Dash']
              },
              {
                category: 'Deployment',
                technologies: ['Docker', 'Kubernetes', 'FastAPI', 'Flask', 'TensorFlow Serving']
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
            {/* 전자상거래 추천 시스템 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🛒</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    전자상거래 추천 시스템
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
                협업 필터링과 딥러닝을 활용한 개인화 추천 시스템으로 매출을 45% 증가시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 고객 만족도 35% 향상
                • 평균 주문 금액 28% 증가
                • 고객 유지율 40% 개선
              </div>
            </div>

            {/* 제조업 품질 검사 */}
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
                  <span style={{ color: 'white', fontSize: '20px' }}>🏭</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '4px'
                  }}>
                    제조업 품질 검사
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    자동차 부품 제조업체
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                컴퓨터 비전을 활용한 자동 품질 검사 시스템으로 검사 정확도를 95% 달성했습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 검사 시간 70% 단축
                • 불량률 60% 감소
                • 인력 비용 50% 절감
              </div>
            </div>

            {/* 금융사 사기 탐지 */}
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
                    금융사 사기 탐지
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    신용카드 회사
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                실시간 이상 탐지 모델로 사기 거래를 99.2% 정확도로 탐지하여 손실을 80% 감소시켰습니다.
              </p>
              <div style={{
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f7fafc',
                padding: '8px 12px',
                borderRadius: '6px'
              }}>
                • 사기 탐지 정확도 99.2% 달성
                • 거짓 양성 85% 감소
                • 고객 피해 80% 감소
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
            AI로 비즈니스를 혁신하세요
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a0aec0',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            인공지능과 머신러닝 기술로 데이터에서 가치를 추출하고 
            지능형 비즈니스 솔루션을 구축하세요.
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
              🤖 AI 상담
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
              📊 데이터 분석
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
