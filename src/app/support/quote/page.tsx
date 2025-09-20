'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function Quote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    additionalServices: []
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceTypes = [
    '웹사이트 개발',
    '모바일 앱 개발',
    '시스템 통합',
    '클라우드 솔루션',
    'AI/머신러닝 서비스',
    '디지털 마케팅',
    'IT 컨설팅',
    '유지보수 & 지원'
  ];

  const projectTypes = [
    '신규 프로젝트',
    '기존 시스템 개선',
    '시스템 통합',
    '유지보수',
    '컨설팅'
  ];

  const budgetRanges = [
    '500만원 미만',
    '500만원 ~ 1,000만원',
    '1,000만원 ~ 2,000만원',
    '2,000만원 ~ 5,000만원',
    '5,000만원 이상',
    '협의 후 결정'
  ];

  const timelines = [
    '1개월 이내',
    '1-3개월',
    '3-6개월',
    '6개월 이상',
    '협의 후 결정'
  ];

  const additionalServicesList = [
    'UI/UX 디자인',
    '도메인 & 호스팅',
    'SEO 최적화',
    '보안 강화',
    '성능 최적화',
    '사용자 교육',
    '유지보수 서비스'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (실제 구현에서는 API 호출)
    console.log('견적 요청:', { ...formData, additionalServices: selectedServices });
    alert('견적 요청이 접수되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      
      {/* 견적문의 섹션 */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* 페이지 제목 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
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
              견적 문의
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              프로젝트에 대한 상세한 정보를 알려주시면 맞춤형 견적을 제공해드립니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* 견적 요청 폼 */}
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
                <span style={{ fontSize: '32px' }}>📝</span>
                견적 요청서
              </h2>

              <form onSubmit={handleSubmit}>
                {/* 기본 정보 */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '20px',
                    paddingBottom: '8px',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    기본 정보
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        회사명 *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        placeholder="회사명을 입력하세요"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        담당자명 *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        placeholder="담당자명을 입력하세요"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        이메일 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        placeholder="이메일을 입력하세요"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        placeholder="연락처를 입력하세요"
                      />
                    </div>
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '20px',
                    paddingBottom: '8px',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    프로젝트 정보
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        서비스 유형 *
                      </label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      >
                        <option value="">서비스를 선택하세요</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        프로젝트 유형
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      >
                        <option value="">프로젝트 유형을 선택하세요</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        예산 범위
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      >
                        <option value="">예산 범위를 선택하세요</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        개발 일정
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      >
                        <option value="">개발 일정을 선택하세요</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        프로젝트 설명 *
                      </label>
                      <textarea
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="프로젝트에 대한 상세한 설명을 입력하세요"
                      />
                    </div>
                  </div>
                </div>

                {/* 추가 서비스 */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1a202c',
                    marginBottom: '20px',
                    paddingBottom: '8px',
                    borderBottom: '2px solid #e2e8f0'
                  }}>
                    추가 서비스 (선택사항)
                  </h3>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px'
                  }}>
                    {additionalServicesList.map((service) => (
                      <label
                        key={service}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px',
                          border: selectedServices.includes(service) ? '2px solid #667eea' : '1px solid #d1d5db',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          backgroundColor: selectedServices.includes(service) ? '#f0f4ff' : 'white'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          style={{ margin: 0 }}
                        />
                        <span style={{ fontSize: '14px', color: '#374151' }}>
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  견적 요청하기
                </button>
              </form>
            </div>

            {/* 견적 안내 */}
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
                  <span style={{ fontSize: '32px' }}>💰</span>
                  견적 안내
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
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
                      <span style={{ color: 'white', fontSize: '16px' }}>⏱️</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        견적 제공 기간
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        영업일 기준 1-2일 내에 상세한 견적서를 제공해드립니다.
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
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
                      <span style={{ color: 'white', fontSize: '16px' }}>📋</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        견적 포함 내용
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        개발 비용, 일정, 기술 스택, 납품물 등 상세한 내용이 포함됩니다.
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
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
                      <span style={{ color: 'white', fontSize: '16px' }}>🔄</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        견적 수정 가능
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        요구사항 변경 시 언제든지 견적을 수정하여 재제공해드립니다.
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
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
                      <span style={{ color: 'white', fontSize: '16px' }}>📞</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1a202c',
                        marginBottom: '4px'
                      }}>
                        무료 상담
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#4a5568',
                        lineHeight: '1.5'
                      }}>
                        견적과 별도로 무료 상담을 통해 최적의 솔루션을 제안해드립니다.
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
                        quote@company.co.kr
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
          </div>
        </div>
      </section>
    </div>
  );
}
