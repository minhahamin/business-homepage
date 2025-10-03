# Business Homepage

현대적이고 전문적인 비즈니스 홈페이지입니다. Next.js, TypeScript, Tailwind CSS를 사용하여 제작되었습니다.
배포 : https://business-homepage-iota.vercel.app/

## 🚀 주요 기능

### 🏢 회사 소개
- **인사말**: 대표자의 인사말과 회사 비전
- **연혁**: 회사의 발전 과정과 주요 성과
- **특허 및 인증서**: 획득한 특허와 인증서 정보
- **오시는 길**: 상세한 위치 정보와 교통편 안내

### 💼 사업 소개
- **웹 개발 & 앱 개발**: 웹사이트와 모바일 앱 개발 서비스
- **시스템 통합 & 구축**: 기업 시스템 통합 및 구축
- **클라우드 솔루션**: 클라우드 인프라 및 솔루션
- **AI/머신러닝 서비스**: AI 기술을 활용한 서비스
- **디지털 마케팅**: 온라인 마케팅 및 홍보
- **IT 컨설팅**: IT 전략 수립 및 컨설팅
- **유지보수 & 지원**: 시스템 유지보수 및 기술 지원

### 📢 공지사항
- 표 형식의 공지사항 목록
- 카테고리별 분류 (시스템, 서비스, 운영, 정책, 사업, 보안, 고객)
- 검색 및 필터 기능
- 페이지네이션 지원

### 🛠️ 고객 지원
- **Q&A**: 자주 묻는 질문과 답변 (아코디언 형태)
- **견적 문의**: 상세한 프로젝트 정보를 통한 견적 요청
- **연락처**: 전화, 이메일, 운영시간 정보

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Images**: Next.js Image Optimization
- **Icons**: Custom SVG Icons
- **Internationalization**: Custom Context API

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx                    # 메인 홈페이지
│   ├── about/
│   │   ├── greeting/page.tsx       # 인사말 페이지
│   │   ├── history/page.tsx        # 연혁 페이지
│   │   ├── certificates/page.tsx   # 특허 및 인증서 페이지
│   │   └── location/page.tsx       # 오시는 길 페이지
│   ├── notice/page.tsx             # 공지사항 페이지
│   ├── support/
│   │   ├── qna/page.tsx            # Q&A 페이지
│   │   └── quote/page.tsx          # 견적문의 페이지
│   ├── layout.tsx                  # 루트 레이아웃
│   ├── globals.css                 # 전역 스타일
│   ├── error.tsx                   # 에러 페이지
│   ├── not-found.tsx               # 404 페이지
│   └── loading.tsx                 # 로딩 페이지
├── components/
│   └── Header.tsx                  # 헤더 컴포넌트
├── .vscode/
│   ├── settings.json               # VS Code 설정
│   └── css_custom_data.json        # CSS 커스텀 데이터
├── postcss.config.js               # PostCSS 설정
├── tailwind.config.ts              # Tailwind CSS 설정
└── tsconfig.json                   # TypeScript 설정
```

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드
```bash
npm run build
```

### 프로덕션 실행
```bash
npm start
```

## 📱 반응형 디자인

- **모바일**: 320px 이상
- **태블릿**: 768px 이상
- **데스크톱**: 1024px 이상

## 🎨 디자인 특징

### 색상 팔레트
- **Primary**: 그라데이션 (#667eea → #764ba2)
- **Secondary**: 회색 (#1f2937, #374151, #6b7280)
- **Accent**: 다양한 그라데이션 (파란색, 분홍색, 초록색, 주황색)
- **Background**: 흰색 (#ffffff), 연한 회색 (#f8fafc)

### 타이포그래피
- **Font**: Inter (Google Fonts)
- **Headings**: 2xl ~ 6xl
- **Body**: base, sm, lg

### 컴포넌트 특징
- **카드 디자인**: 둥근 모서리와 그림자 효과
- **그라데이션**: 다양한 색상의 그라데이션 배경
- **아이콘**: 이모지를 활용한 직관적인 아이콘
- **호버 효과**: 마우스 오버 시 부드러운 전환 효과

## 📄 페이지 구성

### 메인 페이지
- 회사 소개 및 서비스 개요
- 주요 사업 영역 소개
- 고객 만족도 및 통계

### 회사 소개
- **인사말**: 대표자의 인사말과 회사 철학
- **연혁**: 회사 발전 과정과 주요 성과
- **특허 및 인증서**: 기술력과 신뢰성 어필
- **오시는 길**: 상세한 위치 정보와 교통편

### 공지사항
- 표 형식의 공지사항 목록
- 카테고리별 분류 및 검색 기능
- 페이지네이션 지원

### 고객 지원
- **Q&A**: 아코디언 형태의 질문과 답변
- **견적 문의**: 상세한 프로젝트 정보 입력 폼

## 📸 이미지 최적화

- Next.js Image 컴포넌트 사용
- 자동 WebP 변환
- 반응형 이미지 로딩
- Lazy loading 지원

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.ts`에서 색상 팔레트 수정

### 스타일 조정
`src/app/globals.css`에서 전역 스타일 수정

### 컴포넌트 수정
각 페이지의 `page.tsx` 파일에서 내용 수정

### 헤더 메뉴 변경
`src/components/Header.tsx`에서 메뉴 구조 수정

## 📋 주요 기능

### 🏢 회사 소개 페이지
- 대표자의 인사말과 회사 비전
- 회사 연혁과 주요 성과
- 특허 및 인증서 정보
- 상세한 오시는 길 안내

### 📢 공지사항 시스템
- 표 형식의 공지사항 목록
- 카테고리별 분류 및 검색
- 페이지네이션 지원
- 중요 공지사항 하이라이트

### 🛠️ 고객 지원 시스템
- Q&A 아코디언 형태의 질문과 답변
- 상세한 견적 문의 폼
- 연락처 정보 제공

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 👨‍💻 개발자

**민하** - 포트폴리오 프로젝트

---


💡 **참고**: 이 프로젝트는 대중화된 사업 랜딩 페이지와 제 상상력(?)을 참고하여 제작되었습니다.

