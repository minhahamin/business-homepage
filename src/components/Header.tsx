'use client';

import { useState } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: '회사소개',
      dropdown: [
        { title: '인사말', href: '/about/greeting' },
        { title: '연혁', href: '/about/history' },
        { title: '특허 및 인증서', href: '/about/certificates' },
        { title: '오시는 길', href: '/about/location' }
      ]
    },
    {
      title: '사업소개',
      dropdown: [
        { title: '웹 개발 & 앱 개발', href: '/business/web-app-development', isHighlighted: true },
        { title: '시스템 통합 & 구축', href: '/business/system-integration', isHighlighted: true },
        { title: '클라우드 솔루션', href: '/business/cloud-solutions', isHighlighted: true },
        { title: 'AI/머신러닝 서비스', href: '/business/ai-ml-services' },
        { title: '디지털 마케팅', href: '/business/digital-marketing' },
        { title: 'IT 컨설팅', href: '/business/it-consulting' },
        { title: '유지보수 & 지원', href: '/business/maintenance-support' }
      ]
    },
    {
      title: '공지사항',
      dropdown: [
        { title: '공지사항', href: '/notice' }
      ]
    },
    {
      title: '고객지원',
      dropdown: [
        { title: 'Q&A', href: '/support/qna' },
        { title: '견적문의', href: '/support/quote' }
      ]
    }
  ];

  return (
    <header style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* W 로고 */}
        <div style={{ 
          width: '50px', 
          height: '50px', 
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>W</span>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav style={{ display: 'flex', gap: '40px' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{ 
                position: 'relative'
              }}
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* 메인 메뉴 */}
              <span style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                color: '#1F2937',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                padding: '12px 0'
              }}>
                {item.title}
              </span>

              {/* 드롭다운 메뉴 */}
              {activeDropdown === item.title && (
                <div style={{ 
                  position: 'absolute', 
                  top: '100%', 
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '250px', 
                  backgroundColor: 'white', 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '8px',
                  padding: '16px 0', 
                  zIndex: 50,
                  marginTop: '8px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        style={{
                          display: 'block',
                          padding: '8px 16px',
                          fontSize: '14px',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          transition: 'all 0.2s ease',
                          backgroundColor: subItem.isHighlighted ? '#EFF6FF' : 'transparent',
                          color: subItem.isHighlighted ? '#1F2937' : '#6B7280',
                          fontWeight: subItem.isHighlighted ? 'bold' : 'normal'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLAnchorElement;
                          target.style.backgroundColor = subItem.isHighlighted ? '#DBEAFE' : '#F9FAFB';
                          target.style.color = '#1F2937';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLAnchorElement;
                          target.style.backgroundColor = subItem.isHighlighted ? '#EFF6FF' : 'transparent';
                          target.style.color = subItem.isHighlighted ? '#1F2937' : '#6B7280';
                        }}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}