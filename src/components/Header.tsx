'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className={styles.header}>
      <div className={styles.container}>
        {/* W 로고 */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>W</span>
        </Link>

        {/* 데스크톱 네비게이션 메뉴 */}
        <nav className={styles.desktopNav}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* 메인 메뉴 */}
              <span className={styles.menuTitle}>
                {item.title}
              </span>

              {/* 드롭다운 메뉴 */}
              {activeDropdown === item.title && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`${styles.dropdownLink} ${subItem.isHighlighted ? styles.highlighted : ''}`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.mobileMenuButton}
        >
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
          <div className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileMenuOverlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileMenuTitle}>메뉴</div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ×
            </button>
          </div>
          
          {menuItems.map((item, index) => (
            <div key={index} className={styles.mobileMenuItem}>
              <div
                className={styles.mobileMenuItemTitle}
                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
              >
                {item.title}
                <span className={`${styles.arrow} ${activeDropdown === item.title ? styles.open : ''}`}>
                  ▼
                </span>
              </div>
              
              {activeDropdown === item.title && (
                <div className={styles.mobileDropdown}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`${styles.mobileDropdownLink} ${subItem.isHighlighted ? styles.highlighted : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}