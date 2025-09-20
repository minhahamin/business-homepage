import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '혁신적인 비즈니스 솔루션 | 전문 기업',
  description: '10년 이상의 경험을 바탕으로 고객의 비즈니스 성공을 위한 전문적인 솔루션을 제공합니다. 비즈니스 컨설팅, 웹 개발, 마케팅 서비스를 만나보세요.',
  keywords: '비즈니스 컨설팅, 웹 개발, 마케팅, 디자인, 전문 기업',
  authors: [{ name: '회사명' }],
  openGraph: {
    title: '혁신적인 비즈니스 솔루션',
    description: '고객의 성공을 위한 전문적인 비즈니스 솔루션을 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className="font-sans">{children}</body>
    </html>
  );
}
